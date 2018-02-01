import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
}
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
}

class CatForm extends Component {
  state = {
    checkNick: false,
    checkFacebook: true,
  }
  check = () => {
    this.props.form.validateFields((err, val) => {
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
  inputChange = (e) => {
    console.log(e)
    const { inputChange } = this.props
    const {
      id, title, value, checked,
    } = e.target
    inputChange(title, id, value || checked)
  }
  render() {
    const { getFieldDecorator } = props.form;
    return (
      <Form layout="inline">
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
      </Form>
    )
  }
}

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
    }
  },
  onValuesChange(_, values) {
    console.log(values)
  },
  inputChange(e) {
    const { inputChange } = this.props
    const { id, title, value } = e.target
    inputChange(title, id, value)
  },
})( CatForm)

class Cat extends Component {
  state = {
    fields: {
      username: {
        value: 'pangpond',
      },
      password: {
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

export default Cat
