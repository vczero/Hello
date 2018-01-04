import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Home from './routes/Home';
import About from './routes/About';
import Kuaiji from './routes/Kuaiji';
import Header from './components/Header';
import Menu from './components/Menu';

const App = () => (
  <Layout>
    <Router>
      <div className="index-main-container">
        <Header/>
        <div className="index-menu-main">
          <Menu/>
        </div>
        <div className="index-content">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/kuaiji" component={Kuaiji}/>
        </div>
      </div>
    </Router>
  </Layout>
  
)
export default App


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
