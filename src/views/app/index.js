/*
 * @Author: your name
 * @Date: 2021-02-04 13:33:04
 * @LastEditTime: 2021-02-04 15:07:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\views\layout\index.js
 */
import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Login from '../login/index'
import Register from '../register/index'

const customHistory = createBrowserHistory();
export default class App extends React.Component {
  render() {
    return (
      <Router history={customHistory}>
        <div>
          <Route exact path='/' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
        </div>
      </Router>
    )
  }
}