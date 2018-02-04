import React, { Component } from 'react'
import { Form, Row, Col, Card, Avatar } from 'antd'
import Info from './Info'
import Address from './Address'

const { Meta } = Card

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
  state = {
    fields: {
      firstname: { value: '' },
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
    },
  }
  handleFormChange = (changedFields) => {
    this.setState({
      fields: { ...this.state.fields, ...changedFields },
    })
  }
  render() {
    const { fields } = this.state
    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <Row gutter={16}>
          <Col span={12}>
            <Card title={cardTitle('1.1', 'ข้อมูลส่วนตัวของนักเรียน')} bordered={false}>
              <Info {...fields} onChange={this.handleFormChange} />
            </Card>
          </Col>
          <Col span={12}>
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
