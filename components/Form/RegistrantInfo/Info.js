import React, { Component } from 'react'
import { Form, Input, InputNumber, Row, Col, Radio } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { inputChange } from '../../../actions'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 24 },
  },
}

const formItemTwiceLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 8 },
    lg: { span: 8 },
    xl: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 16 },
    lg: { span: 16 },
    xl: { span: 8 },
  },
}

const colLayout = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 24 },
  lg: { span: 24 },
  xl: { span: 24 },
}

const colTwiceLayout = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 11 },
  lg: { span: 11 },
  xl: { span: 11 },
}


class Info extends Component {
  constructor(props) {
    super(props)
    this.inputChangeFunc = this.inputChangeFunc.bind(this)
     // props.form.setFieldsValue({ weight: 50 })
  }

  inputChangeFunc = (e) => {
    const { inputChange } = this.props
    const { id, title, value } = e.target
    inputChange(title, id, value)
  }

  changeWeight = (value) => {
    const { inputChange } = this.props
    inputChange('info', 'weight', value)
  }

  changeHeight = (value) => {
    const { inputChange } = this.props
    inputChange('info', 'height', value)
  }

  changeCheckButton = (e, name) => {
    const { inputChange } = this.props
    inputChange('info', name, e.target.value)
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { props } = this
    const { state } = this.props
    return (
      <Row gutter={16}>
        <Col {...colLayout}>
          <FormItem {...formItemLayout}>
            <Col {...colTwiceLayout} style={{ marginBottom: '16px' }}>
              <FormItem {...formItemLayout} label="ชื่อ">
                {getFieldDecorator('firstname', {
                  rules: [{ required: true, message: 'กรุณาระบุชื่อ' }],
                  onChange: this.inputChangeFunc,
                  initialValue: props.firstname.value,
                  // props: { defaultValue: props.firstname.value },
                })(<Input title="info" placeholder="ชื่อ" />)}
              </FormItem>
            </Col>
            <Col span={2}>
              <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                &nbsp;
              </span>
            </Col>
            <Col {...colTwiceLayout}>
              <FormItem {...formItemLayout} label="นามสกุล">
                {getFieldDecorator('lastname', {
                  rules: [{ required: true, message: 'กรุณาระบุนามสกุล'}],
                  onChange: this.inputChangeFunc,
                  initialValue: props.lastname.value,
                })(<Input title="info" placeholder="นามสกุล" />)}
              </FormItem>
            </Col>
          </FormItem>
          <FormItem {...formItemLayout} >
            <Col {...colTwiceLayout} style={{ marginBottom: '16px' }}>
              <FormItem label="เพศ">
                {getFieldDecorator('gender', {
                  rules: [{ required: true, message: 'กรุณาระบุเพศ' }],
                  onChange: e => this.changeCheckButton(e, 'gender'),
                  initialValue: props.gender.value,
                })(
                  <RadioGroup style={{ float: 'left' }}>
                    <RadioButton value="male">ชาย</RadioButton>
                    <RadioButton value="female">หญิง</RadioButton>
                  </RadioGroup>)}
              </FormItem>
            </Col>
            <Col span={2}>
              <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                &nbsp;
              </span>
            </Col>
            <Col {...colTwiceLayout}>
              <FormItem {...formItemLayout} label="หมู่เลือด">
                {getFieldDecorator('blood', {
                  rules: [{ required: true, message: 'กรุณาระบุหมู่เลือด' }],
                  onChange: e => this.changeCheckButton(e, 'blood'),
                  initialValue: props.blood.value,
                })(
                  <RadioGroup style={{ float: 'left' }} >
                    <RadioButton value="o">O</RadioButton>
                    <RadioButton value="a">A</RadioButton>
                    <RadioButton value="b">B</RadioButton>
                    <RadioButton value="ab">AB</RadioButton>
                  </RadioGroup>)}
              </FormItem>
            </Col>
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="ศาสนา"
          >
            {getFieldDecorator('religion', {
              rules: [{ required: true, message: 'กรุณาระบุศาสนา' }],
              onChange: e => this.changeCheckButton(e, 'religion'),
              initialValue: props.religion.value,
            })(
              <RadioGroup title="info" style={{ float: 'left' }} >
                <RadioButton value="พุทธ">พุทธ</RadioButton>
                <RadioButton value="คริสต์">คริสต์</RadioButton>
                <RadioButton value="อิสลาม">อิสลาม</RadioButton>
                <RadioButton value="อื่นๆ">อื่นๆ</RadioButton>
              </RadioGroup>)}
          </FormItem>

          <FormItem {...formItemLayout}>
            <Col {...colTwiceLayout} style={{ marginBottom: '16px' }}>
              <FormItem label="สัญชาติ">
                {getFieldDecorator('nationality', {
                  rules: [{ required: true, message: 'กรุณาระบุสัญชาติ' }],
                  onChange: this.inputChangeFunc,
                  initialValue: props.nationality.value,
                })(<Input title="info" placeholder="สัญชาติ" />)}
              </FormItem>
            </Col>
            <Col span={2}>
              <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                &nbsp;
              </span>
            </Col>
            <Col {...colTwiceLayout}>
              <FormItem {...formItemLayout} label="เชื้อชาติ">
                {getFieldDecorator('race', {
                  rules: [{ required: true, message: 'กรุณาระบุเชื้อชาติ' }],
                  onChange: this.inputChangeFunc,
                  initialValue: props.race.value,
                })(<Input title="info" placeholder="เชื้อชาติ" />)}
              </FormItem>
            </Col>
          </FormItem>

          <FormItem {...formItemLayout}>
            <Col {...colTwiceLayout} style={{ marginBottom: '16px' }}>
              <FormItem {...formItemLayout} label="เบอร์มือถือ">
                {getFieldDecorator('mobile', {
                  rules: [{ required: true, message: 'กรุณาระบุเบอร์มือถือ' }],
                  onChange: this.inputChangeFunc,
                  initialValue: props.mobile.value,
                })(<Input title="info" placeholder="เบอร์มือถือ" />)}
              </FormItem>
            </Col>
            <Col span={2}>
              <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                &nbsp;
              </span>
            </Col>
            <Col {...colTwiceLayout}>
              <FormItem {...formItemLayout} label="อีเมล">
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'กรุณาระบุอีเมล' }],
                  onChange: this.inputChangeFunc,
                  initialValue: props.email.value,
                })(<Input title="info" placeholder="อีเมล" />)}
              </FormItem>
            </Col>
          </FormItem>

          <FormItem {...formItemLayout}>
            <Col {...colTwiceLayout} style={{ marginBottom: '16px' }}>
              <FormItem label="น้ำหนัก">
                {getFieldDecorator('weight', {
                  rules: [{ required: true, message: 'กรุณาระบุน้ำหนัก' }],
                  initialValue: props.weight.value,
                })(<InputNumber title="info" min={30} max={200} onChange={this.changeWeight} />)}
              </FormItem>
            </Col>
            <Col span={2}>
              <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                &nbsp;
              </span>
            </Col>
            <Col {...colTwiceLayout}>
              <FormItem {...formItemLayout} label="ส่วนสูง">
                {getFieldDecorator('height', {
                  rules: [{ required: true, message: 'กรุณาระบุส่วนสูง' }],
                  initialValue: props.height.value,
                })(<InputNumber title="info" min={100} max={200} onChange={this.changeHeight} />)}
              </FormItem>
            </Col>
          </FormItem>
        </Col>
      </Row>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  inputChange: bindActionCreators(inputChange, dispatch),
})

export default Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields)
  }})(connect(null, mapDispatchToProps)(Info))
