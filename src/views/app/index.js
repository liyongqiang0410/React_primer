/*
 * @Author: your name
 * @Date: 2021-02-04 13:33:04
 * @LastEditTime: 2021-02-19 14:37:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\views\layout\index.js
 */
import React from 'react';
import { Router, Route } from 'react-router';
import Login from '../login/index'
import Register from '../register/index'
import MyLayout from '../layout/index'
import eventDealWith from '../eventDealWith/index'
const createBrowserHistory = require('history').createBrowserHistory;
const customHistory = createBrowserHistory();

export default class App extends React.Component {
  render() {
    return (
      <Router history={customHistory}>
        <div className='App' style={{ padding: '20px' }}>
          <Route exact path='/' component={MyLayout} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/eventDealWith' component={eventDealWith} />
        </div>
      </Router>
    )
  }
}