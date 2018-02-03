import React, { Component } from 'react'
import { Form, Row, Col, Card } from 'antd'
import Info from './Info'

class RegistrantInfo extends Component {
  state = {
    fields: {
      firstname: { value: '' },
      lastname: { value: '' },
      gender: { value: '' },
      blood: { value: '' },
      religion: { value: '' },
      nationality: { value: '' },
      race: { value: '' },
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
            <Card title="ข้อมูลส่วนตัวของนักเรียน" bordered={false}>
              <Info {...fields} onChange={this.handleFormChange} />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="ข้อมูลที่อยู่ของนักเรียน" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default RegistrantInfo
