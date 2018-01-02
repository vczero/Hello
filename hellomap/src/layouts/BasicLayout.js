import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, message } from 'antd';
import DocumentTitle from 'react-document-title';
import { connect } from 'dva';
import { Route, Redirect, Switch } from 'dva/router';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import { enquireScreen } from 'enquire-js';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import SiderMenu from '../components/SiderMenu';
import NotFound from '../routes/Exception/404';
import { getRoutes } from '../utils/utils';
import { getMenuData } from '../common/menu';
import logo from '../assets/logo.svg';

/**
 * 根据菜单取得重定向地址.
 */
const redirectData = [];
const getRedirect = (item) => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `/${item.path}`,
        to: `/${item.children[0].path}`,
      });
      item.children.forEach((children) => {
        getRedirect(children);
      });
    }
  }
};
getMenuData().forEach(getRedirect);

const { Content } = Layout;
const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class BasicLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  }
  state = {
    isMobile,
  };
  getChildContext() {
    const { location, routerData } = this.props;
    return {
      location,
      breadcrumbNameMap: routerData,
    };
  }
  componentDidMount() {
    enquireScreen((mobile) => {
      this.setState({
        isMobile: mobile,
      });
    });
    this.props.dispatch({
      type: 'user/fetchCurrent',
    });
  }
  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = 'LBS SPACE';
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - LBS SPACE`;
    }
    return title;
  }
  handleMenuCollapse = (collapsed) => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  }

  render() {
    const {
      collapsed, fetchingNotices, notices, routerData, match, location,
    } = this.props;
    const layout = (
      <Layout>
        <SiderMenu
          collapsed={collapsed}
          location={location}
          isMobile={this.state.isMobile}
          onCollapse={this.handleMenuCollapse}
        />
        <Layout>
          <GlobalHeader
            logo={logo}
            collapsed={collapsed}
            isMobile={this.state.isMobile}
            onCollapse={this.handleMenuCollapse}
            onMenuClick={this.handleMenuClick}
            onNoticeVisibleChange={this.handleNoticeVisibleChange}
          />
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <div style={{ minHeight: 'calc(100vh - 260px)' }}>
              <Switch>
                {
                  redirectData.map(item =>
                    <Redirect key={item.from} exact from={item.from} to={item.to} />
                  )
                }
                {
                  getRoutes(match.path, routerData).map(item => (
                    <Route
                      key={item.key}
                      path={item.path}
                      component={item.component}
                      exact={item.exact}
                    />
                  ))
                }
                <Redirect exact from="/" to="/dashboard/analysis" />
                <Route render={NotFound} />
              </Switch>
            </div>
            <GlobalFooter
              links={[{
                title: 'LBS SPACE 首页',
                href: '/',
                blankTarget: true,
              }]}
              copyright={
                <div>
                  copyright <Icon type="copyright" /> 2017 aissues.com
                </div>
              }
            />
          </Content>
        </Layout>
      </Layout>
    );

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
  fetchingNotices: state.global.fetchingNotices,
  notices: state.global.notices,
}))(BasicLayout);
