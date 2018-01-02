import React, { PureComponent } from 'react';
import { Layout, Menu, Icon, Spin, Avatar, Divider } from 'antd';
import Debounce from 'lodash-decorators/debounce';
import { Link } from 'dva/router';
import HeaderSearch from '../../components/HeaderSearch';
import styles from './index.less';

const { Header } = Layout;

export default class GlobalHeader extends PureComponent {
  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }
  
  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
    this.triggerResizeEvent();
  }
  @Debounce(600)
  triggerResizeEvent() { // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }
  render() {
    const {
      collapsed, fetchingNotices, isMobile, logo,
      onNoticeVisibleChange, onMenuClick, onNoticeClear,
    } = this.props;
    return (
      <Header className={styles.header}>
        {isMobile && (
          [
            (
              <Link to="/" className={styles.logo} key="logo">
                <img src={logo} alt="logo" width="32" />
              </Link>
            ),
            <Divider type="vertical" key="line" />,
          ]
        )}
        <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <div className={styles.right}>
          <HeaderSearch
            className={`${styles.action} ${styles.search}`}
            placeholder="站内搜索"
            dataSource={['搜索功能稍后提供']}
            onSearch={(value) => {
              console.log('input', value); // eslint-disable-line
            }}
            onPressEnter={(value) => {
              console.log('enter', value); // eslint-disable-line
            }}
          />
          <div className={styles.about}>
            <span className={`${styles.action} ${styles.account}`}>
              
              <span className={styles.name}>About Me</span>
            </span>
          </div>
        </div>
      </Header>
    );
  }
}
