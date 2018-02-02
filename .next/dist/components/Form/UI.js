'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _autoComplete = require('antd/lib/auto-complete');

var _autoComplete2 = _interopRequireDefault(_autoComplete);

var _cascader = require('antd/lib/cascader');

var _cascader2 = _interopRequireDefault(_cascader);

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/admission/components/Form/UI.js';


var FormItem = _form2.default.Item;
var Option = _select2.default.Option;

var AutoCompleteOption = _autoComplete2.default.Option;

var residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake'
    }]
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men'
    }]
  }]
}];

var UI = function (_Component) {
  (0, _inherits3.default)(UI, _Component);

  function UI() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UI);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UI.__proto__ || (0, _getPrototypeOf2.default)(UI)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }, _this.handleConfirmBlur = function (e) {
      var value = e.target.value;
      _this.setState({ confirmDirty: _this.state.confirmDirty || !!value });
    }, _this.checkPassword = function (rule, value, callback) {
      var form = _this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    }, _this.checkConfirm = function (rule, value, callback) {
      var form = _this.props.form;
      if (value && _this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }, _this.handleWebsiteChange = function (value) {
      var autoCompleteResult = void 0;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(function (domain) {
          return '' + value + domain;
        });
      }
      _this.setState({ autoCompleteResult: autoCompleteResult });
    }, _this.inputChange = function (e) {
      var inputChange = _this.props.inputChange;
      var _e$target = e.target,
          id = _e$target.id,
          title = _e$target.title,
          value = _e$target.value;

      inputChange(title, id, value);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UI, [{
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var autoCompleteResult = this.state.autoCompleteResult;

      var formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      };
      var tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      };
      var prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86'
      })(_react2.default.createElement(_select2.default, { style: { width: 70 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement(Option, { value: '86', __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, '+86'), _react2.default.createElement(Option, { value: '87', __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, '+87')));

      var websiteOptions = autoCompleteResult.map(function (website) {
        return _react2.default.createElement(AutoCompleteOption, { key: website, __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, website);
      });

      return _react2.default.createElement(_form2.default, { onSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: 'E-mail',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }), getFieldDecorator('email', {
        rules: [{
          type: 'email', message: 'The input is not valid E-mail!'
        }, {
          required: true, message: 'Please input your E-mail!'
        }]
      })(_react2.default.createElement(_input2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: 'Password',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }), getFieldDecorator('password', {
        rules: [{
          required: true, message: 'Please input your password!'
        }, {
          validator: this.checkConfirm
        }]
      })(_react2.default.createElement(_input2.default, { type: 'password', __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: 'Confirm Password',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), getFieldDecorator('confirm', {
        rules: [{
          required: true, message: 'Please confirm your password!'
        }, {
          validator: this.checkPassword
        }]
      })(_react2.default.createElement(_input2.default, { type: 'password', onBlur: this.handleConfirmBlur, __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          }
        }, 'Nickname\xA0', _react2.default.createElement(_tooltip2.default, { title: 'What do you want others to call you?', __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          }
        }, _react2.default.createElement(_icon2.default, { type: 'question-circle-o', __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          }
        }))),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }), getFieldDecorator('nickname', {
        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }]
      })(_react2.default.createElement(_input2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: 'Habitual Residence',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }), getFieldDecorator('residence', {
        initialValue: ['zhejiang', 'hangzhou', 'xihu'],
        rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }]
      })(_react2.default.createElement(_cascader2.default, { options: residences, __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: 'Phone Number',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }), getFieldDecorator('phone', {
        rules: [{ required: true, message: 'Please input your phone number!' }]
      })(_react2.default.createElement(_input2.default, { addonBefore: prefixSelector, style: { width: '100%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: 'Website',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }), getFieldDecorator('website', {
        rules: [{ required: true, message: 'Please input website!' }]
      })(_react2.default.createElement(_autoComplete2.default, {
        dataSource: websiteOptions,
        onChange: this.handleWebsiteChange,
        placeholder: 'website',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, _react2.default.createElement(_input2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      })))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: 'Captcha',
        extra: 'We must make sure that your are a human.',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }), _react2.default.createElement(_row2.default, { gutter: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, _react2.default.createElement(_col2.default, { span: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, getFieldDecorator('captcha', {
        rules: [{ required: true, message: 'Please input the captcha you got!' }]
      })(_react2.default.createElement(_input2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }))), _react2.default.createElement(_col2.default, { span: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, _react2.default.createElement(_button2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, 'Get captcha')))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, tailFormItemLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }), getFieldDecorator('agreement', {
        valuePropName: 'checked'
      })(_react2.default.createElement(_checkbox2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, 'I have read the ', _react2.default.createElement('a', { href: '', __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, 'agreement')))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, tailFormItemLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }), _react2.default.createElement(_button2.default, { type: 'primary', htmlType: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, 'Register')));
    }
  }]);

  return UI;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    inputChange: (0, _redux.bindActionCreators)(_actions.inputChange, dispatch)
  };
};

// export default Form.create()(UI)
exports.default = _form2.default.create()((0, _reactRedux.connect)(null, mapDispatchToProps)(UI));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9ybS9VSS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJpbnB1dENoYW5nZSIsIkZvcm1JdGVtIiwiSXRlbSIsIk9wdGlvbiIsIkF1dG9Db21wbGV0ZU9wdGlvbiIsInJlc2lkZW5jZXMiLCJ2YWx1ZSIsImxhYmVsIiwiY2hpbGRyZW4iLCJVSSIsInN0YXRlIiwiY29uZmlybURpcnR5IiwiYXV0b0NvbXBsZXRlUmVzdWx0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJmb3JtIiwidmFsaWRhdGVGaWVsZHNBbmRTY3JvbGwiLCJlcnIiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ29uZmlybUJsdXIiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsImNoZWNrUGFzc3dvcmQiLCJydWxlIiwiY2FsbGJhY2siLCJnZXRGaWVsZFZhbHVlIiwiY2hlY2tDb25maXJtIiwidmFsaWRhdGVGaWVsZHMiLCJmb3JjZSIsImhhbmRsZVdlYnNpdGVDaGFuZ2UiLCJtYXAiLCJkb21haW4iLCJpZCIsInRpdGxlIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJmb3JtSXRlbUxheW91dCIsImxhYmVsQ29sIiwieHMiLCJzcGFuIiwic20iLCJ3cmFwcGVyQ29sIiwidGFpbEZvcm1JdGVtTGF5b3V0Iiwib2Zmc2V0IiwicHJlZml4U2VsZWN0b3IiLCJpbml0aWFsVmFsdWUiLCJ3aWR0aCIsIndlYnNpdGVPcHRpb25zIiwid2Vic2l0ZSIsInJ1bGVzIiwidHlwZSIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsInZhbGlkYXRvciIsIndoaXRlc3BhY2UiLCJ2YWx1ZVByb3BOYW1lIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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