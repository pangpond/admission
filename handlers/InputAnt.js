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
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { inputChange } from '../actions'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
}

class InputAnt extends Component {
  inputChange = (e) => {
    const { inputChange, controlGroup, name } = this.props
    inputChange(controlGroup, name, e.target.value)
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <FormItem {...formItemLayout} label={this.props.controlLabel}>
        {getFieldDecorator(this.props.name, {
          rules: [
            {
              required: this.props.required,
              message: this.props.placeholder,
            },
          ],
          // onChange: this.inputChange,
        })(<Input
          placeholder={this.props.placeholder}
          onChange={this.inputChange}
          disabled={this.props.disabled}
        />)}
      </FormItem>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  inputChange: bindActionCreators(inputChange, dispatch),
})

// export default connect(null, mapDispatchToProps)(InputAnt)
export default Form.create()(connect(null, mapDispatchToProps)(InputAnt))
// export default connect(null, mapDispatchToProps)(Form.create()(InputAnt))
