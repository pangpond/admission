import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import withRedux from 'next-redux-wrapper'

import { initStore } from '../store'
import Wrapper from '../index'
import Ant from '../components/Ant'
import Bird from '../components/Bird'
import Cat from '../components/Cat'
import DisplayForm from '../components/DisplayForm'
import StudentProfile from '../components/StudentProfile'

const { Header, Content, Footer } = Layout

class Admission extends Component {
  render() {
    return (
      <Wrapper>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <StudentProfile />
            </div>
            <DisplayForm />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Admission ©2018 Created by NextSchool</Footer>
        </Layout>
      </Wrapper>
    )
  }
}

export default withRedux(initStore, null)(Admission)
