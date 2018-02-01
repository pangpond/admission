import React, { Component } from 'react'
import { Form, Input } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { inputChange } from '../../actions'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
}

const mapDispatchToProps = dispatch => ({
  inputChange: bindActionCreators(inputChange, dispatch),
})

const CustomizedForm = Form.create({
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
    <div>
      <FormItem {...formItemLayout} label="Username">
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<Input />)}
      </FormItem>
      <FormItem {...formItemLayout} label="Password">
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Password is required!' }],
        })(<Input />)}
      </FormItem>
      <FormItem {...formItemLayout} label="Last Name">
        {getFieldDecorator('lastname', {
          rules: [
            {
              required: true,
              message: 'Please input your lastname',
            },
          ],
          onChange: inputChangeFunc,
        })(<Input title="profile" placeholder="Please input your name" />)}
      </FormItem>
    </div>
  )
}))

class Profile extends Component {
  state = {
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
  handleFormChange = (changedFields) => {
    this.setState({
      fields: { ...this.state.fields, ...changedFields },
    })
  }
  render() {
    const fields = this.state.fields
    return (
      <div>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
        <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
      </div>
    )
  }
}

export default Profile

// export default Form.create()(Ant)
// export default connect(null, mapDispatchToProps)(Profile)
