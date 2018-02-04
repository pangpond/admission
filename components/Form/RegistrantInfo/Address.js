import React, { Component } from 'react'
import { Form, Input, Row, Col, Switch, Divider } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { inputChange } from '../../../actions'
import Typeahead from '../../Typeahead/'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 24 },
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
    md: { span: 16 },
    lg: { span: 16 },
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

const colTrippleLayout = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 7 },
  lg: { span: 7 },
  xl: { span: 7 },
}

const colTrippleTailLayout = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 8 },
  lg: { span: 8 },
  xl: { span: 8 },
}

class Address extends Component {
  state = {
    checkNick: false,
    cloneAddress : true,
  }
  inputChange = (e) => {
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

  toggleCloneAddress = (checked) => {
    this.setState({
      cloneAddress: checked,
    })
  }

  handleChangeAddress = (address) => {
    const {
      s: prev_edu_name,
      a: prev_edu_sub_district,
      d: prev_edu_district,
      p: prev_edu_province
    } = address
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { cloneAddress } = this.state

    const defaultAddress = {
      s: this.props.prev_edu_name,
      a: this.props.prev_edu_sub_district,
      d: this.props.prev_edu_district,
      p: this.props.prev_edu_province,
    }

    const cloneAddressLabel = cloneAddress ? 'ใช้ที่อยู่ตามบัตรประชาชน' : 'ใช้ที่อยู่ใหม่'

    return (
      <Row gutter={16}>
        <Col {...colLayout}>
          <Divider>ที่อยู่ตามบัตรประชาชน</Divider>
          <FormItem {...formItemLayout} label="บ้านเลขที่ หมู่บ้าน คอนโด">
            {getFieldDecorator('mobile', {
              rules: [{ required: true, message: 'Firstname is required!' }],
              onChange: this.inputChangeFunc,
            })(<Input title="info" placeholder="Please input your name" />)}
          </FormItem>
          <FormItem {...formItemLayout}>
            <Col {...colTrippleLayout} style={{ marginBottom: '16px' }}>
              <FormItem {...formItemLayout} label="หมู่">
                {getFieldDecorator('mobile', {
                  rules: [{ required: true, message: 'Firstname is required!' }],
                  onChange: this.inputChangeFunc,
                })(<Input title="info" placeholder="Please input your name" />)}
              </FormItem>
            </Col>
            <Col span={1}>
              <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                  &nbsp;
              </span>
            </Col>
            <Col {...colTrippleLayout}>
              <FormItem {...formItemLayout} label="ซอย">
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Firstname is required!' }],
                  onChange: this.inputChangeFunc,
                })(<Input title="info" placeholder="Please input your name" />)}
              </FormItem>
            </Col>
            <Col span={1}>
              <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                  &nbsp;
              </span>
            </Col>
            <Col {...colTrippleTailLayout}>
              <FormItem {...formItemLayout} label="ถนน">
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Firstname is required!' }],
                  onChange: this.inputChangeFunc,
                })(<Input title="info" placeholder="Please input your name" />)}
              </FormItem>
            </Col>
          </FormItem>
          <Typeahead
            kind="address"
            renderResult={(data) => {
              const provinceLabel = data.p === 'กรุงเทพมหานคร' ? '' : 'จังหวัด'
              const districtLabel = data.p === 'กรุงเทพมหานคร' ? 'เขต' : 'อำเภอ'
              const subDistrictLabel = data.p === 'กรุงเทพมหานคร' ? 'แขวง' : 'ตำบล'
              return (
                <div>
                  {subDistrictLabel}
                  <b>{data.d}</b> {districtLabel}
                  <b>{data.a}</b> {provinceLabel}
                  <b>{data.p}</b> รหัสไปรษณีย์
                  <b>{data.z}</b>
                </div>
              )
            }}
            onAddressSelected={addressObject => this.handleChangeAddress(addressObject)}
            defaultAddress={defaultAddress}
          />

          <Divider>ที่อยู่ปัจจุบัน</Divider>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
            {cloneAddressLabel} <Switch defaultChecked onChange={this.toggleCloneAddress} />
            </Col>
          </Row>
          <FormItem {...formItemLayout} label="บ้านเลขที่ หมู่บ้าน คอนโด">
            {getFieldDecorator('mobile', {
              rules: [{ required: true, message: 'Firstname is required!' }],
              onChange: this.inputChangeFunc,
            })(<Input title="info" placeholder="Please input your name" />)}
          </FormItem>
          <FormItem {...formItemLayout}>
            <Col {...colTrippleLayout} style={{ marginBottom: '16px' }}>
              <FormItem {...formItemLayout} label="หมู่">
                {getFieldDecorator('mobile', {
                  rules: [{ required: true, message: 'Firstname is required!' }],
                  onChange: this.inputChangeFunc,
                })(<Input title="info" placeholder="Please input your name" />)}
              </FormItem>
            </Col>
            <Col span={1}>
              <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                  &nbsp;
              </span>
            </Col>
            <Col {...colTrippleLayout}>
              <FormItem {...formItemLayout} label="ซอย">
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Firstname is required!' }],
                  onChange: this.inputChangeFunc,
                })(<Input title="info" placeholder="Please input your name" />)}
              </FormItem>
            </Col>
            <Col span={1}>
              <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                  &nbsp;
              </span>
            </Col>
            <Col {...colTrippleTailLayout}>
              <FormItem {...formItemLayout} label="ถนน">
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Firstname is required!' }],
                  onChange: this.inputChangeFunc,
                })(<Input title="info" placeholder="Please input your name" />)}
              </FormItem>
            </Col>
          </FormItem>
          <Typeahead
            kind="address"
            renderResult={(data) => {
              const provinceLabel = data.p === 'กรุงเทพมหานคร' ? '' : 'จังหวัด'
              const districtLabel = data.p === 'กรุงเทพมหานคร' ? 'เขต' : 'อำเภอ'
              const subDistrictLabel = data.p === 'กรุงเทพมหานคร' ? 'แขวง' : 'ตำบล'
              return (
                <div>
                  {subDistrictLabel}
                  <b>{data.d}</b> {districtLabel}
                  <b>{data.a}</b> {provinceLabel}
                  <b>{data.p}</b> รหัสไปรษณีย์
                  <b>{data.z}</b>
                </div>
              )
            }}
            onAddressSelected={addressObject => handleChangeAddress(addressObject)}
            defaultAddress={defaultAddress}
          />
        </Col>
      </Row>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  inputChange: bindActionCreators(inputChange, dispatch),
})

export default Form.create()(connect(null, mapDispatchToProps)(Address))

