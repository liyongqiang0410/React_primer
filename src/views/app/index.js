/*
 * @Author: your name
 * @Date: 2021-02-04 13:33:04
 * @LastEditTime: 2021-02-22 11:01:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\views\layout\index.js
 */
import React from 'react';
import { Router, Route } from 'react-router';
import Login from '../login/index'
import Register from '../register/index'
import MyLayout from '../layout/index'
import EventDealWith from '../eventDealWith/index'
import Form from '../form/index'
import Todolist from '../todolist/index'
import Lift from '../lifeCircle/index'
import ContextCom from '../context/context'
import IndexContext from '../context/canonicalForm/index'
import HOC from '../higherOrderComponents/Index'
import HocDecorator from '../higherOrderComponents/hocDecorator/Index'
import Portals from '../portals'

const createBrowserHistory = require('history').createBrowserHistory;
const customHistory = createBrowserHistory();

export default class App extends React.Component {
  render() {
    return (
      <Router history={customHistory}>
        <>
          <Route exact path='/' component={MyLayout} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/eventDealWith' component={EventDealWith} />
          <Route path='/form' component={Form} />
          <Route path='/todolist' component={Todolist} />
          <Route path='/lift' component={Lift} />
          <Route path='/context' component={ContextCom} />
          <Route path='/indexContext' component={IndexContext} />
          <Route path="/hoc" component={HOC} />
          <Route path='/hocDecorator' component={HocDecorator} />
          <Route path='/portals' component={Portals} />
        </>
      </Router>
    )
  }
}