// @flow
import React from 'react'
import { defaultProps, withState, compose } from 'recompose'
// import {
//   Form,
//   Input,
//   Icon,
// } from 'semantic-ui-react'
import { Form, Input, Row, Col, Radio, Divider } from 'antd'

type TypeaheadInputType = {
  displayOption: () => any,
  maxVisible: number,
  value: string,
  options: any[],
  filterOptions: string,
  onChange: (e: any) => void,
  onOptionSelected: (option: any) => void,
  label: string,
  kind: string,
  clear: boolean => void,

  // local props
  open: boolean,
  // clear: boolean => void,
  setOpen: boolean => void,
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

const Typeahead: React.Component<TypeaheadInputType> = compose(
  defaultProps({
    onChange: () => {},
    option: [],
    maxVisible: 10,
  }),
  withState('open', 'setOpen', false),
)((props: TypeaheadInputType) => (
  <FormItem
    {...formItemLayout}
    label={props.label}
    className="typeahead typeahead-input-wrap"
    required
  >
    <Input
      title={props.label}
      placeholder={props.label}
      onBlur={() => setTimeout(() => props.setOpen(false), 400)}
      onFocus={() => props.setOpen(true)}
      value={props.value}
      onChange={props.onChange}
    />

    {props.options.length && props.value.length && props.open ? (
      <Input
        title={props.label}
        placeholder={props.label}
        onChange={() => null}
        value={props.options[0][props.filterOption]}
        className="typeahead-input-hint"
      />
    ) : null}

    {props.open && props.options.length && props.value.length ? (
      <ul className="typeahead-selector">
        {props.options.filter((item, i) => i < props.maxVisible).map((item, i) => (
          <li
            key={i}
            onClick={() => {
              props.onOptionSelected(item)
              props.setOpen(false)
            }}
          >
            {props.displayOption(item)}
          </li>
        ))}
      </ul>
    ) : null}
  </FormItem>
))

export default Typeahead
