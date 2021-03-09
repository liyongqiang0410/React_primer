/*
 * @Author: your name
 * @Date: 2021-02-04 16:06:58
 * @LastEditTime: 2021-02-04 17:22:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\views\layout\index.js
 */
import React from 'react'
// import App from '../'
import { Route, Link } from 'react-router-dom'
import './index.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  ChromeOutlined
} from '@ant-design/icons';

import Login from '../login/index'
import Register from '../register/index'
import EventDealWith from '../eventDealWith/index'
import Form from '../form/index'
import Todolist from '../todolist/index'
import Lift from '../lifeCircle/index'
import ContextCom from '../context/context'
import IndexContext from '../context/canonicalForm/index'
import HOC from '../higherOrderComponents/Index'
import HocDecorator from '../higherOrderComponents/hocDecorator/Index'
import Portals from '../portals'
import Redux from '../redux/Index'
import ReduxReact from '../reduxDemo/Index'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const style = { height: '32px', margin: '16px', fontSize: '16px', lineHeight: '32px', color: '#fff', display: 'flex', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', justifyContent: 'space-around' }
export default class MyLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed, type) => {
    console.log(collapsed, type);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    let logo;
    if (!this.state.collapsed) {
      logo = (
        <div style={style}>
          <ChromeOutlined style={{ fontSize: '32px', color: '#fff' }} />
          <span style={{ display: 'inline-block' }}>react-create-app</span>
        </div>
      )
    } else {
      logo = (<div style={style}><ChromeOutlined style={{ fontSize: '32px', color: '#fff' }} /></div>)
    }
    return (
      <Layout style={{ minHeight: '100vh' }} >
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          {logo}
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/login">首页</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to='/form'>表单</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">
                <Link to="/eventDealWith">事件处理</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/todolist">列表</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/lift">生命周期</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">
                <Link to="/context">状态上下文</Link>
              </Menu.Item>
              {/* <Menu.Item key="8">
                <Link to="/indexContext">indexContext</Link>
              </Menu.Item> */}
            </SubMenu>
            <SubMenu key="sub3" icon={<TeamOutlined />} title="details">
              <Menu.Item key="9">
                <Link to="/hoc">hoc</Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="/hocDecorator">hocDecorator</Link>
              </Menu.Item>
              <Menu.Item key="11">
                <Link to="/portals">portals</Link>
              </Menu.Item>
              <Menu.Item key="12">
                <Link to="/redux">redux</Link>
              </Menu.Item>
              <Menu.Item key="13">
                <Link to="/reduxReact">reduxReact</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="14" icon={<FileOutlined />}>
              <Link to="/register">注册</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background reactApp" style={{ padding: 24, minHeight: "calc(100vh - 64px - 54px)" }}>
              <Route path='/login' component={Login}></Route>
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
              <Route path='/redux' component={Redux} />
              <Route path='/reduxReact' component={ReduxReact} />
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
    );
  }
}
