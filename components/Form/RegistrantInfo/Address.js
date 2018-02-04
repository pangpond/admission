import { Form, Input, Row, Col, Radio, Divider } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { inputChange } from '../../../actions'

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


const mapDispatchToProps = dispatch => ({
  inputChange: bindActionCreators(inputChange, dispatch),
})

const Address = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields)
  },
  mapPropsToFields(props) {
    return {
      firstname: Form.createFormField({
        ...props.firstname,
        value: props.firstname.value,
      }),
      lastname: Form.createFormField({
        ...props.lastname,
        value: props.lastname.value,
      }),
      gender: Form.createFormField({
        ...props.gender,
        value: props.gender.value,
      }),
      blood: Form.createFormField({
        ...props.blood,
        value: props.blood.value,
      }),
      religion: Form.createFormField({
        ...props.religion,
        value: props.religion.value,
      }),
      nationality: Form.createFormField({
        ...props.nationality,
        value: props.nationality.value,
      }),
      race: Form.createFormField({
        ...props.race,
        value: props.race.value,
      }),
      mobile: Form.createFormField({
        ...props.mobile,
        value: props.mobile.value,
      }),
      email: Form.createFormField({
        ...props.email,
        value: props.email.value,
      }),
      weight: Form.createFormField({
        ...props.weight,
        value: props.weight.value,
      }),
      height: Form.createFormField({
        ...props.height,
        value: props.height.value,
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
  const changeWeight = (value) => {
    const { inputChange } = props
    inputChange('info', 'weight', value)
  }

  const changeHeight = (value) => {
    const { inputChange } = props
    inputChange('info', 'height', value)
  }

  const changeCheckButton = (e, name) => {
    const { inputChange } = props
    inputChange('info', name, e.target.value)
  }

  return (
    <Row gutter={16}>
      <Col {...colLayout}>
        <Divider>ที่อยู่ปัจจุบัน</Divider>
        <FormItem {...formItemLayout} label="บ้านเลขที่ หมู่บ้าน คอนโด">
          {getFieldDecorator('mobile', {
            rules: [{ required: true, message: 'Firstname is required!' }],
            onChange: inputChangeFunc,
          })(<Input title="info" placeholder="Please input your name" />)}
        </FormItem>
        <FormItem {...formItemLayout}>
          <Col {...colTrippleLayout} style={{ marginBottom: '16px' }}>
            <FormItem {...formItemLayout} label="หมู่">
              {getFieldDecorator('mobile', {
                rules: [{ required: true, message: 'Firstname is required!' }],
                onChange: inputChangeFunc,
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
                onChange: inputChangeFunc,
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
                onChange: inputChangeFunc,
              })(<Input title="info" placeholder="Please input your name" />)}
            </FormItem>
          </Col>
        </FormItem>
        <FormItem {...formItemLayout}>
          <Col {...colTwiceLayout} style={{ marginBottom: '16px' }}>
            <FormItem {...formItemLayout} label="ตำบล">
              {getFieldDecorator('mobile', {
                rules: [{ required: true, message: 'Firstname is required!' }],
                onChange: inputChangeFunc,
              })(<Input title="info" placeholder="Please input your name" />)}
            </FormItem>
          </Col>
          <Col span={2}>
            <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                &nbsp;
            </span>
          </Col>
          <Col {...colTwiceLayout}>
            <FormItem {...formItemLayout} label="อำเภอ">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Firstname is required!' }],
                onChange: inputChangeFunc,
              })(<Input title="info" placeholder="Please input your name" />)}
            </FormItem>
          </Col>
        </FormItem>
        <FormItem {...formItemLayout}>
          <Col {...colTwiceLayout} style={{ marginBottom: '16px' }}>
            <FormItem {...formItemLayout} label="จังหวัด">
              {getFieldDecorator('mobile', {
                rules: [{ required: true, message: 'Firstname is required!' }],
                onChange: inputChangeFunc,
              })(<Input title="info" placeholder="Please input your name" />)}
            </FormItem>
          </Col>
          <Col span={2}>
            <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                &nbsp;
            </span>
          </Col>
          <Col {...colTwiceLayout}>
            <FormItem {...formItemLayout} label="รหัสไปรษณีย์">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Firstname is required!' }],
                onChange: inputChangeFunc,
              })(<Input title="info" placeholder="Please input your name" />)}
            </FormItem>
          </Col>
        </FormItem>
        <Divider>ที่อยู่ตามบัตรประชาชน</Divider>
        <FormItem {...formItemLayout} label="บ้านเลขที่ หมู่บ้าน คอนโด">
          {getFieldDecorator('mobile', {
            rules: [{ required: true, message: 'Firstname is required!' }],
            onChange: inputChangeFunc,
          })(<Input title="info" placeholder="Please input your name" />)}
        </FormItem>
        <FormItem {...formItemLayout}>
          <Col {...colTrippleLayout} style={{ marginBottom: '16px' }}>
            <FormItem {...formItemLayout} label="หมู่">
              {getFieldDecorator('mobile', {
                rules: [{ required: true, message: 'Firstname is required!' }],
                onChange: inputChangeFunc,
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
                onChange: inputChangeFunc,
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
                onChange: inputChangeFunc,
              })(<Input title="info" placeholder="Please input your name" />)}
            </FormItem>
          </Col>
        </FormItem>
        <FormItem {...formItemLayout}>
          <Col {...colTwiceLayout} style={{ marginBottom: '16px' }}>
            <FormItem {...formItemLayout} label="ตำบล">
              {getFieldDecorator('mobile', {
                rules: [{ required: true, message: 'Firstname is required!' }],
                onChange: inputChangeFunc,
              })(<Input title="info" placeholder="Please input your name" />)}
            </FormItem>
          </Col>
          <Col span={2}>
            <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                &nbsp;
            </span>
          </Col>
          <Col {...colTwiceLayout}>
            <FormItem {...formItemLayout} label="อำเภอ">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Firstname is required!' }],
                onChange: inputChangeFunc,
              })(<Input title="info" placeholder="Please input your name" />)}
            </FormItem>
          </Col>
        </FormItem>
        <FormItem {...formItemLayout}>
          <Col {...colTwiceLayout} style={{ marginBottom: '16px' }}>
            <FormItem {...formItemLayout} label="จังหวัด">
              {getFieldDecorator('mobile', {
                rules: [{ required: true, message: 'Firstname is required!' }],
                onChange: inputChangeFunc,
              })(<Input title="info" placeholder="Please input your name" />)}
            </FormItem>
          </Col>
          <Col span={2}>
            <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                &nbsp;
            </span>
          </Col>
          <Col {...colTwiceLayout}>
            <FormItem {...formItemLayout} label="รหัสไปรษณีย์">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Firstname is required!' }],
                onChange: inputChangeFunc,
              })(<Input title="info" placeholder="Please input your name" />)}
            </FormItem>
          </Col>
        </FormItem>
      </Col>
    </Row>
  )
}))

export default Address
