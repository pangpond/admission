import React, { Component } from 'react'
import {
  Form,
  Input,
  Checkbox,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  LocaleProvider,
} from 'antd'
import withRedux from 'next-redux-wrapper'

import { initStore } from '../store'
import Layout from '../index'
import Ant from '../components/Ant'
import Bird from '../components/Bird'
import Cat from '../components/Cat'
import DisplayForm from '../components/DisplayForm'
import StudentProfile from '../components/StudentProfile'

const FormItem = Form.Item
const Option = Select.Option

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
}
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
}

class Admission extends Component {
  render() {
    return (
      <Layout>
        {/* <Ant />
        <Bird />
        <Cat /> */}
        <StudentProfile />
        <DisplayForm />
      </Layout>
    )
  }
}

export default withRedux(initStore, null)(Admission)
