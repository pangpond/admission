import { Form, Input } from 'antd'
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

const RegistrantInfo = Form.create({
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
          onChange: inputChangeFunc,
        })(<Input title="info" />)}
      </FormItem>
      <FormItem {...formItemLayout} label="Password">
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Password is required!' }],
          onChange: inputChangeFunc,
        })(<Input title="info" />)}
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
        })(<Input title="info" placeholder="Please input your name" />)}
      </FormItem>
    </div>
  )
}))

export default RegistrantInfo
