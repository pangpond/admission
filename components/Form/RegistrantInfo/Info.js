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

const mapDispatchToProps = dispatch => ({
  inputChange: bindActionCreators(inputChange, dispatch),
})

const Info = Form.create({
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

  // props.form.setFieldsValue({ weight: 50 })
  return (
    <Row gutter={16}>
      <Col {...colLayout}>

        <FormItem {...formItemLayout}>
          <Col {...colTwiceLayout} style={{ marginBottom: '16px' }}>
            <FormItem {...formItemLayout} label="ชื่อ">
              {getFieldDecorator('firstname', {
                rules: [
                  {
                    required: true,
                    message: 'Firstname is required!',
                  },
                ],
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
            <FormItem {...formItemLayout} label="นามสกุล">
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
          </Col>
        </FormItem>
        <FormItem {...formItemLayout} >
          <Col {...colTwiceLayout} style={{ marginBottom: '16px' }}>
            <FormItem label="เพศ">
              {getFieldDecorator('gender', {
                rules: [{ required: true, message: 'Firstname is required!' }],
                initialValue: ['female'],
                valuePropName: 'checked',
                onChange: e => changeCheckButton(e, 'gender'),
              })(
                <RadioGroup style={{ float: 'left' }} defaultValue="female">
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
                rules: [{ required: true, message: 'Firstname is required!' }],
                initialValue: ['b'],
                valuePropName: 'checked',
                onChange: e => changeCheckButton(e, 'blood'),
              })(
                <RadioGroup style={{ float: 'left' }} defaultValue="b">
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
            rules: [{ required: true, message: 'Firstname is required!' }],
            initialValue: ['พุทธ'],
            valuePropName: 'checked',
            onChange: e => changeCheckButton(e, 'religion'),
          })(
            <RadioGroup title="info" style={{ float: 'left' }} defaultValue="พุทธ">
              <RadioButton value="พุทธ">พุทธ</RadioButton>
              <RadioButton value="คริสต์">คริสต์</RadioButton>
              <RadioButton value="อิสลาม">อิสลาม</RadioButton>
              <RadioButton value="อื่นๆ">อื่นๆ</RadioButton>
            </RadioGroup>)}
        </FormItem>

        <FormItem {...formItemLayout}>
          <Col {...colTwiceLayout} style={{ marginBottom: '16px' }}>
            <FormItem label="สัญชาติ" defaultValue="ไทย">
              {getFieldDecorator('nationality', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your nationality',
                  },
                ],
                initialValue: 'ไทย',
                onChange: inputChangeFunc,
              })(<Input title="info"  />)}
            </FormItem>
          </Col>
          <Col span={2}>
            <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
              &nbsp;
            </span>
          </Col>
          <Col {...colTwiceLayout}>
            <FormItem {...formItemLayout} label="เชื้อชาติ" defaultValue="ไทย">
              {getFieldDecorator('race', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your race',
                  },
                ],
                onChange: inputChangeFunc,
              })(<Input title="info" placeholder="Please input your race" />)}
            </FormItem>
          </Col>
        </FormItem>

        <FormItem {...formItemLayout}>
          <Col {...colTwiceLayout} style={{ marginBottom: '16px' }}>
            <FormItem {...formItemLayout} label="เบอร์มือถือ">
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
            <FormItem {...formItemLayout} label="อีเมล">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Firstname is required!' }],
                onChange: inputChangeFunc,
              })(<Input title="info" placeholder="Please input your name" />)}
            </FormItem>
          </Col>
        </FormItem>

        <FormItem {...formItemLayout}>
          <Col {...colTwiceLayout} style={{ marginBottom: '16px' }}>
            <FormItem label="น้ำหนัก">
              {getFieldDecorator('weight', {
                rules: [{ required: true, message: 'Firstname is required!' }],
              })(<InputNumber title="info" min={30} max={200} onChange={changeWeight} />)}
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
                rules: [{ required: true, message: 'Firstname is required!' }],
              })(<InputNumber title="info" min={100} max={200} onChange={changeHeight} />)}
            </FormItem>
          </Col>
        </FormItem>
      </Col>
    </Row>
  )
}))

export default Info
