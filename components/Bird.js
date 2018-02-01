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

import InputState from '../handlers/InputAnt'

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

class Bird extends Component {
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
    const { getFieldDecorator } = this.props.form
    return (
      <div style={{ marginTop: 100 }}>
        <Form layout="horizontal">
          <FormItem {...formTailLayout}>
            <Checkbox title="input" id="check" onChange={this.inputChange}>
              Checkbox Label
            </Checkbox>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Input Number"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            {getFieldDecorator('inputNumber', {
              rules: [
                {
                  required: true,
                },
              ],
              onChange: this.inputChange,
            })(<InputNumber
              size="large"
              min={1}
              max={10}
              style={{ width: 100 }}
              defaultValue={3}
              name="inputNumber"
            />)}
          </FormItem>

          <FormItem label="Slider" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
            <Slider defaultValue={70} />
          </FormItem>

          <FormItem label="Select" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
            <Select size="large" defaultValue="lucy" style={{ width: 192 }} name="select">
              <Option value="jack">jack</Option>
              <Option value="lucy">lucy</Option>
              <Option value="disabled" disabled>
                disabled
              </Option>
              <Option value="yiminghe">yiminghe</Option>
            </Select>
          </FormItem>

          <FormItem label="DatePicker" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
            <DatePicker name="startDate" />
          </FormItem>
          <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
            <Button size="large" type="primary" htmlType="submit">
              OK
            </Button>
            <Button size="large" style={{ marginLeft: 8 }}>
              Cancel
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  inputChange: bindActionCreators(inputChange, dispatch),
})

// export default Form.create()(Ant)
export default Form.create()(connect(null, mapDispatchToProps)(Bird))
