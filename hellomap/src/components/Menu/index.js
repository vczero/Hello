import React from 'react';
import { Menu, Icon} from 'antd';
import './index.css';

class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: ["2"]
    };
  }

  render() {
    return (<div>
      <div className="menu-logo">
        <div>
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
        </div>
        <div className="menu-pname">
          Ant Design Pro
        </div>
      </div>
      <Menu theme="dark" mode="inline" className="menu-c" openKeys={this.state.openKeys}>
        <Menu.SubMenu 
        key="1"
        onTitleClick={this._setOpenkey.bind(this)}
        title={
          <span>
            <Icon type="dashboard" />
            <span>Dashboard</span>
          </span>
        }>
          <Menu.Item>001 | 总体概览</Menu.Item>
          <Menu.Item>002 | 北京市</Menu.Item>
          <Menu.Item>003 | 上海市</Menu.Item>
          <Menu.Item>004 | 杭州市</Menu.Item>
          <Menu.Item>005 | 苏州市</Menu.Item>
          <Menu.Item>006 | 南京市</Menu.Item>
          <Menu.Item>007 | 广州市</Menu.Item>
          <Menu.Item>008 | 武汉市</Menu.Item>
          <Menu.Item>009 | 西安市</Menu.Item>
          <Menu.Item>010 | 成都市</Menu.Item>
          <Menu.Item>011 | 重庆市</Menu.Item>
          <Menu.Item>012 | 厦门市</Menu.Item>
          <Menu.Item>013 | 合肥市</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu 
        key="2"
        onTitleClick={this._setOpenkey.bind(this)}
        title={
          <span>
            <Icon type="profile" />
            <span>详情</span>
          </span>
        }>
          <Menu.Item>详情页</Menu.Item>
          <Menu.Item>结果页</Menu.Item>
          <Menu.Item>表单也页</Menu.Item>
          <Menu.Item>列表页</Menu.Item>
          <Menu.Item>表单也页</Menu.Item>
          <Menu.Item>列表页</Menu.Item>
          <Menu.Item>表单也页</Menu.Item>
          <Menu.Item>列表页</Menu.Item>
          <Menu.Item>表单也页</Menu.Item>
          <Menu.Item>列表页</Menu.Item>
          <Menu.Item>表单也页</Menu.Item>
          <Menu.Item>列表页</Menu.Item>
          <Menu.Item>表单也页</Menu.Item>
          <Menu.Item>列表页</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>);
  }

  _setOpenkey(obj){
    let key = obj.key;
    if(this.state.openKeys && this.state.openKeys[0] == key){
      return this.setState({openKeys: []});
    }
    this.setState({
      openKeys: [key]
    });
  }
}


export default MenuList;