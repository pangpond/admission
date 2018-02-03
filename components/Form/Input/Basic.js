import { Form, Input, Icon, Tooltip, Checkbox, Row, Col, Button } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { inputChange } from '../../../actions'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
}

const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
}

const mapDispatchToProps = dispatch => ({
  inputChange: bindActionCreators(inputChange, dispatch),
})

const Basic = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields)
  },
  mapPropsToFields(props) {
    return {
      withicon: Form.createFormField({
        ...props.withicon,
        value: props.withicon.value,
      }),
      tooltip: Form.createFormField({
        ...props.tooltip,
        value: props.tooltip.value,
      }),
      email: Form.createFormField({
        ...props.email,
        value: props.email.value,
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
      <FormItem {...formItemLayout} label="Input With Icon">
        {getFieldDecorator('withicon', {
          rules: [
            {
              required: true,
              message: 'Please input your lastname',
            },
          ],
          onChange: inputChangeFunc,
        })(<Input
          title="text"
          placeholder="Please input your name"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />)}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label={
          <span>
              Nickname&nbsp;
            <Tooltip title="What do you want others to call you?">
              <Icon type="question-circle-o" />
            </Tooltip>
          </span>
        }
      >
        {getFieldDecorator('tooltip', {
          rules: [
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ],
          onChange: inputChangeFunc,
        })(<Input title="text" />)}
      </FormItem>
      <FormItem {...formItemLayout} label="E-mail">
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ],
          onChange: inputChangeFunc,
        })(<Input title="text" />)}
      </FormItem>
      <FormItem {...formItemLayout} label="Captcha" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            {getFieldDecorator('captcha', {
              rules: [
                {
                  required: true,
                  message: 'Please input the captcha you got!',
                },
              ],
              onChange: inputChangeFunc,
            })(<Input title="text" />)}
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </FormItem>
      <FormItem {...formTailLayout}>
        {getFieldDecorator('agreement', {
          valuePropName: 'checked',
        })(<Checkbox>I have read the <a href="#">agreement</a></Checkbox>)}
      </FormItem>
    </div>
  )
}))

export default Basic
