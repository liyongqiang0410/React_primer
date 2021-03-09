/*
 * @Author: your name
 * @Date: 2021-02-04 17:31:08
 * @LastEditTime: 2021-02-04 17:32:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\index0.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import Layout from './views/layout/index'

ReactDOM.render(
  <BrowserRouter>
    <Layout msg='hello' />
  </BrowserRouter>,
  document.getElementById('root')
);
