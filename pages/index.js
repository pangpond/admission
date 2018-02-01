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
import DisplayForm from '../components/DisplayForm'

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

class DynamicRule extends Component {
  state = {
    checkNick: false,
  }
  check = () => {
    this.props.form.validateFields((err) => {
      if (!err) {
        console.info('success')
      }
    })
  }
  handleChange = (e) => {
    this.setState(
      {
        checkNick: e.target.checked,
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true })
      },
    )
  }
  render() {
    return (
      <Layout>
        <DisplayForm />
        <Ant />
      </Layout>
    )
  }
}

export default withRedux(initStore, null)(DynamicRule)
