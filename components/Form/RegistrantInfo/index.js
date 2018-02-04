import React, { Component } from 'react'
import { Form, Row, Col, Card } from 'antd'
import Info from './Info'
import Address from './Address'

const { Meta } = Card

const cardLayout = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 12 },
  lg: { span: 12 },
  xl: { span: 12 },
}

const cardTitle = (step, title) => (
  <div className="ant-steps-item ant-steps-item-process">
    <div className="ant-steps-item-tail" />
    <div className="ant-steps-item-icon">
      <span className="ant-steps-icon">{step}</span>
    </div>
    <div className="ant-steps-item-content">
      <div className="ant-steps-item-title">{title}</div>
    </div>
  </div>
)

class RegistrantInfo extends Component {
  constructor() {
    super()
    this.getData = this.getData.bind(this)
  }
  state = {
    fields: {
      firstname: { value: '12' },
      lastname: { value: '' },
      gender: { value: '' },
      blood: { value: '' },
      religion: { value: '' },
      nationality: { value: 'ไทย' },
      race: { value: 'ไทย' },
      mobile: { value: '' },
      email: { value: '' },
      weight: { value: '' },
      height: { value: '' },
      address: { value: null },
      moo: { value: '' },
      soi: { value: '' },
      street: { value: '' },
      presentAddress: { value: '' },
      presentMoo: { value: '' },
      presentSoi: { value: '' },
      presentStreet: { value: '' },
    },
  }
  componentDidMount() {
    // this.getData()
  }

  // componentWillReceiveProps() {
  //   const data = localStorage.getItem('_admission')
  //   if (data) {
  //     const admission = JSON.parse(data)

  //     console.log(admission.data.address.moo)
  //     console.log(admission.data)

  //     this.setState({
  //       fields: {
  //         ...this.state.fields,
  //         ...admission.data.info,
  //         address: { value: admission.data.address.adress },
  //         moo: { value: admission.data.address.moo },
  //         soi: { value: admission.data.address.soi },
  //         street: { value: admission.data.address.street },
  //         presentAddress: { value: admission.data.presentAddress.adress },
  //         presentMoo: { value: admission.data.presentAddress.moo },
  //         presentSoi: { value: admission.data.presentAddress.soi },
  //         presentStreet: { value: admission.data.presentAddress.street },
  //       },
  //     })
  //   }
  // }
  getData() {
    const admission = JSON.parse(localStorage.getItem('_admission'))
    if (admission) {
      this.setState({
        fields: {
          ...this.state.fields,
          // ...admission.data.info,
          address: { value: admission.data.address.adress },
          moo: { value: admission.data.address.moo },
          soi: { value: admission.data.address.soi },
          street: { value: admission.data.address.street },
          presentAddress: { value: admission.data.presentAddress.adress },
          presentMoo: { value: admission.data.presentAddress.moo },
          presentSoi: { value: admission.data.presentAddress.soi },
          presentStreet: { value: admission.data.presentAddress.street },
        },
      })
    }
    console.log(admission)
    // return data ? JSON.parse(data) : this.state
  }
  handleFormChange = (changedFields) => {
    this.setState({
      fields: { ...this.state.fields, ...changedFields },
    })
    // console.log(this.state.fields)
    // localStorage.setItem('_admission', JSON.stringify(this.state, null, 2))
  }

  render() {
    const { fields } = this.state
    // const fields = this.getData()

    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <Row gutter={16}>
          <Col {...cardLayout}>
            <Card title={cardTitle('1.1', 'ข้อมูลส่วนตัวของนักเรียน')} bordered={false}>
              <Info {...fields} onChange={this.handleFormChange} />
            </Card>
          </Col>
          <Col {...cardLayout}>
            <Card title={cardTitle('1.2', 'ข้อมูลที่อยู่ของนักเรียน')} bordered={false}>
              <Address {...fields} onChange={this.handleFormChange} />
            </Card>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default RegistrantInfo
