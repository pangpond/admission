import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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

import { inputChange } from '../actions'

import Profile from '../components/Form/Profile/'
import Address from '../components/Form/Address'
import UI from '../components/Form/UI'
import FormIndex from '../components/Form/'
import RegisterForm from '../components/Form/Register'
import Info from '../components/Form/RegistrantInfo/'

const stepContent = [
  {
    title: 'นักเรียน',
    content: <Info />,
  },
  {
    title: 'การศึกษา',
    content: 'form Education',
  },
  {
    title: 'ผู้ปกครอง',
    content: 'form Parent',
  },
  {
    title: 'แผนที่และการเดินทาง',
    content: 'form Map',
  },
]

class StudentProfile extends Component {
  render() {
    return (
      <div>
        <RegisterForm stepContent={stepContent} />
        <Profile />
        {/* <Profile />
        <Address /> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  inputChange: bindActionCreators(inputChange, dispatch),
})

export default Form.create()(connect(null, mapDispatchToProps)(StudentProfile))
