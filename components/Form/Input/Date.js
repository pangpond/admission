import { Form, DatePicker, TimePicker, Button } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { inputChange } from '../../../actions'

const FormItem = Form.Item
const MonthPicker = DatePicker.MonthPicker
const RangePicker = DatePicker.RangePicker

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

const Date = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields)
  },
  mapPropsToFields(props) {
    return {
      datePicker: Form.createFormField({
        ...props.datePicker,
        value: props.datePicker.value,
      }),
      dateTimePicker: Form.createFormField({
        ...props.dateTimePicker,
        // value: props.dateTimePicker.value,
      }),
      monthPicker: Form.createFormField({
        ...props.monthPicker,
        // value: props.monthPicker.value,
      }),
      rangePicker: Form.createFormField({
        ...props.rangePicker,
        // value: props.rangePicker.value,
      }),
      rangeTimePicker: Form.createFormField({
        ...props.rangeTimePicker,
        // value: props.rangeTimePicker.value,
      }),
      timePicker: Form.createFormField({
        ...props.timePicker,
        // value: props.timePicker.value,
      }),
    }
  },
  onValuesChange(_, values) {
    console.log(values)
  },
})(connect(null, mapDispatchToProps)((props) => {
  const { getFieldDecorator } = props.form

  const inputChangeFunc = (e) => {
    console.log(e)
    // e.preventDefault()

    props.form.validateFields((err, fieldsValue, newfieldsValue) => {
      console.log(newfieldsValue)
      if (err) {
        return
      }

      // const rangeValue = fieldsValue['range-picker']
      // const rangeTimeValue = fieldsValue['range-time-picker']
      const values = {
        // ...fieldsValue,
        datePicker: fieldsValue.datePicker.format('YYYY-MM-DD'),
        // 'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        // 'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        // 'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        // 'range-time-picker': [
        //   rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
        //   rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        // ],
        // 'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      }

      console.log('Received values of form: ', values)

      const { inputChange } = props
      const { title } = e.target
      inputChange(title, 'datePicker', fieldsValue.datePicker.format('YYYY-MM-DD'))
    })
  }
  const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    onChange: inputChangeFunc,
  }
  const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
  }
  return (
    <div>
      <FormItem {...formItemLayout} label="DatePicker">
        {getFieldDecorator('datePicker', config)(<DatePicker title="date" id="datePicker" />)}
      </FormItem>
      {/*
      <FormItem {...formItemLayout} label="DatePicker[showTime]">
        {getFieldDecorator('dateTimePicker', config)(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
      </FormItem>
      <FormItem {...formItemLayout} label="MonthPicker">
        {getFieldDecorator('monthPicker', config)(<MonthPicker />)}
      </FormItem>
      <FormItem {...formItemLayout} label="RangePicker">
        {getFieldDecorator('rangePicker', rangeConfig)(<RangePicker />)}
      </FormItem>
      <FormItem {...formItemLayout} label="RangePicker[showTime]">
        {getFieldDecorator('rangeTimePicker', rangeConfig)(<RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
      </FormItem>
      <FormItem {...formItemLayout} label="TimePicker">
        {getFieldDecorator('timePicker', config)(<TimePicker />)}
      </FormItem>
      <FormItem
        wrapperCol={{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 },
        }}
      >
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
      </FormItem>
      */}
    </div>
  )
}))

export default Date
