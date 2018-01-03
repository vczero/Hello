import React from 'react';
import { DatePicker } from 'antd';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import 'ant-design-pro/dist/ant-design-pro.css';
import './index.css';


const Header = () => (
  <div className="header">
    <div className="fr header-user">
      <div className="fr header-about">
        About Me
      </div>
      <div className="fr header-user-avatar">
        <img src="https://avatars2.githubusercontent.com/u/6133685?s=460&v=4"/>
      </div>
    </div>
    <div className="header-search">
      <HeaderSearch/>
    </div>
  </div>
)
export default Header
