import React from 'react'
import { Form, Input, Row, Col, Radio, Divider } from 'antd'
import { fieldsEnum } from './finder'
import AddressTypeahead from './address'

type AddressFormInputPropType = {
  values: {
    s: string,
    a: string,
    d: string,
    p: string,
  },
  onAddressSelected: addresObject => void,
  renderResult: data => React.Component,
}

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

class AddressForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addressObj: undefined,
    }
    this.setAddressObj = this.setAddressObj.bind(this)
  }

  setAddressObj(addressObj) {
    this.setState({ addressObj })
  }
  props: AddressFormInputPropType
  render() {
    const { addressObj } = this.state
    const { defaultAddress } = this.props
    const autoFields = []

    const defaultAddressArr = Object.keys(defaultAddress).map((key) => {
      const value = defaultAddress[key]
      return [key, value]
    })

    return (
      <FormItem>
        <style jsx global>
          {`
            .typeahead-input-wrap {
              position: relative;
              width: 100%;
              // padding-left: .5em;
              // padding-right: .5em;
            }
            .typeahead input[type='text']:focus {
              border-color: #1e87f0;
              outline: none;
            }
            .typeahead-selector {
              position: absolute;
              top: 34px;
              width: 100%;
              border: 1px solid #eee;
              border-top: none;
              list-style: none;
              z-index: 999;
            }
            .typeahead ul {
              padding: 0;
              margin: 0;
            }
            .typeahead-selector li {
              padding: 10px 5px;
              background: #fff;
              border-bottom: 1px solid #eee;
              cursor: pointer;
            }
            .tt-cursor,
            .typeahead-selector li:hover {
              background: #f5f5f5;
            }
            .typeahead-input-hint {
              opacity: 0.3 !important;
              position: absolute;
              width: 100%;
              border: 1px solid rgba(0, 0, 0, 0);
              top: 0;
              left: 6px;
              user-select: none;
              pointer-events: none;
              border: none;
              padding-left: .5em;
              padding-right: .5em;
            },
          `}
        </style>
        {Object.keys(fieldsEnum).map((key) => {
          let name
          switch (fieldsEnum[key]) {
            case 's':
              name = 'โรงเรียนที่กำลังศึกษา'
              break
            case 'd':
              name = 'ตำบล/แขวง'
              break
            case 'a':
              name = 'อำเภอ/เขต'
              break
            case 'p':
              name = 'จังหวัด'
              break

            default:
              name = ''
              break
          }

          const addressTypeahead = (
            <AddressTypeahead
              key={key}
              label={name}
              renderResult={this.props.renderResult}
              onOptionSelected={(result) => {
                this.setAddressObj(result)
                this.props.onAddressSelected(result)
              }}
              value={
                addressObj
                  ? addressObj[fieldsEnum[key]]
                  : new Map(defaultAddressArr).get(fieldsEnum[key])
              }
              fieldType={fieldsEnum[key]}
            />
          )

          if (fieldsEnum[key] !== 's') {
            const calLayout =
              fieldsEnum[key] !== 'p' ? { ...colTrippleLayout } : { ...colTrippleTailLayout }
            return (
              <div key={key}>
                <Col {...calLayout} style={{ marginBottom: '16px' }}>
                  {addressTypeahead}
                </Col>
                <Col span={1}>
                  <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                    &nbsp;
                  </span>
                </Col>
              </div>
            )
          }
          return <div key={key}>{addressTypeahead}</div>
        })}

        {autoFields.map(field => field)}
      </FormItem>
    )
  }
}

export default AddressForm
