import React, { Component } from 'react'
import { Form, Input, Icon } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { inputChange } from '../../../actions'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
}

const mapDispatchToProps = dispatch => ({
  inputChange: bindActionCreators(inputChange, dispatch),
})

const InputWithIcon = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields)
  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        ...props.username,
        value: props.username.value,
      }),
      password: Form.createFormField({
        ...props.password,
        value: props.password.value,
      }),
      lastname: Form.createFormField({
        ...props.lastname,
        value: props.lastname.value,
      }),
    }
  },
  onValuesChange(_, values) {
    console.log(values)
  },
})(connect(null, mapDispatchToProps)((props) => {
  const { getFieldDecorator } = props.form

  const inputChangeFunc = (e) => {
    const { inputChange } = props
    const { id, title, value } = e.target
    inputChange(title, id, value)
  }
  return (
    <FormItem {...formItemLayout} label="Last Name">
      {getFieldDecorator('lastname', {
        rules: [
          {
            required: true,
            message: 'Please input your lastname',
          },
        ],
        onChange: inputChangeFunc,
      })(<Input
        title="profile"
        placeholder="Please input your name"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
      />)}
    </FormItem>
  )
}))

export default InputWithIcon
