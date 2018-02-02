import React, { Component } from 'react'
import {
  Form,
  Input,
  Icon,
  Checkbox,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  LocaleProvider,
} from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { inputChange } from '../../actions'

import InputWithIcon from './Input/WithIcon'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
}
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
}

const mapDispatchToPropsA = dispatch => ({
  inputChange: bindActionCreators(inputChange, dispatch),
})

class FormIndex extends Component {
  state = {
    checkNick: false,
    fields: {
      username: {
        value: 'pangpond',
      },
      password: {
        value: '',
      },
      lastname: {
        value: '',
      },
    },
  }

  check = () => {
    this.props.form.validateFields((err, val) => {
      if (!err) {
        console.info('success')
      }
    })
  }
  handleChange = (e) => {
    if (e.target.name === 'checkNick') {
      this.setState(
        {
          checkNick: e.target.checked,
        },
        () => {
          this.props.form.validateFields(['nickname'], { force: true })
        },
      )
    }

    if (e.target.name === 'checkFacebook') {
      this.setState(
        {
          checkFacebook: e.target.checked,
        },
        () => {
          this.props.form.validateFields(['facebook'], { force: true })
        },
      )
    }
  }
  inputChange = (e) => {
    const { inputChange } = this.props
    const { id, title, value } = e.target
    inputChange(title, id, value)
  }
  handleFormChange = (changedFields) => {
    this.setState({
      fields: { ...this.state.fields, ...changedFields },
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const fields = this.state.fields
    return (
      <div>
        <InputWithIcon {...fields} onChange={this.handleFormChange} />

        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
            onChange: this.inputChange,
          })(<Input title="profile" placeholder="Please input your name" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Nickname">
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: this.state.checkNick,
                message: 'Please input your nickname',
              },
            ],
            onChange: this.inputChange,
          })(<Input title="profile" placeholder="Please input your nickname" />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Facebook">
          {getFieldDecorator('facebook', {
            rules: [
              {
                required: this.state.checkFacebook,
                message: 'Please input your facebook URL',
              },
            ],
            onChange: this.inputChange,
          })(<Input title="social" placeholder="Please input your facebook URL" />)}
        </FormItem>
        <FormItem {...formTailLayout}>
          <Checkbox value={this.state.checkNick} name="checkNick" onChange={this.handleChange}>
            Nickname is required
          </Checkbox>
        </FormItem>
        <FormItem {...formTailLayout}>
          <Checkbox
            value={this.state.checkFacebook}
            name="checkFacebook"
            onChange={this.handleChange}
          >
            Facebook is required
          </Checkbox>
        </FormItem>
        <FormItem {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            Check
          </Button>
        </FormItem>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  inputChange: bindActionCreators(inputChange, dispatch),
})

// export default Form.create()(FormIndex)
export default Form.create()(connect(null, mapDispatchToProps)(FormIndex))
