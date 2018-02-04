import React, { Component } from 'react'
import { Form, Row, Col, Card } from 'antd'
import School from './School'
// import Address from './Address'

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

class EducationInfo extends Component {
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
          <Col {...cardLayout}>
            <Card title={cardTitle('2.1', 'ข้อมูลสถานศึกษาเดิม')} bordered={false}>
              <School {...fields} onChange={this.handleFormChange} />
            </Card>
          </Col>
          <Col {...cardLayout}>
            <Card title={cardTitle('2.2', 'แผนการเรียนที่ต้องการสมัคร')} bordered={false}>
              ddd
            </Card>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default EducationInfo
