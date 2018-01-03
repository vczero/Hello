import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Home from './components/Home'
import About from './components/About'
import AMap from './components/AMap'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/map">Topics</Link></li>
      </ul>
      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/map" component={AMap}/>
    </div>
  </Router>
)
export default BasicExample


ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
