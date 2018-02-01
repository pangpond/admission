'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _slider = require('antd/lib/slider');

var _slider2 = _interopRequireDefault(_slider);

var _inputNumber = require('antd/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

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

var _actions = require('../actions');

var _InputAnt = require('../handlers/InputAnt');

var _InputAnt2 = _interopRequireDefault(_InputAnt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/admission/components/Bird.js';


var FormItem = _form2.default.Item;
var Option = _select2.default.Option;

var formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
var formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};

var Bird = function (_Component) {
  (0, _inherits3.default)(Bird, _Component);

  function Bird() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Bird);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Bird.__proto__ || (0, _getPrototypeOf2.default)(Bird)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      checkNick: false,
      checkFacebook: true
    }, _this.check = function () {
      _this.props.form.validateFields(function (err, val) {
        if (!err) {
          console.info('success');
        }
      });
    }, _this.handleChange = function (e) {
      _this.setState({
        checkNick: e.target.checked
      }, function () {
        _this.props.form.validateFields(['nickname'], { force: true });
      });
    }, _this.inputChange = function (e) {
      console.log(e);
      var inputChange = _this.props.inputChange;
      var _e$target = e.target,
          id = _e$target.id,
          title = _e$target.title,
          value = _e$target.value,
          checked = _e$target.checked;

      inputChange(title, id, value || checked);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Bird, [{
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      return _react2.default.createElement('div', { style: { marginTop: 100 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_form2.default, { layout: 'horizontal', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(FormItem, (0, _extends3.default)({}, formTailLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react2.default.createElement(_checkbox2.default, { title: 'input', id: 'check', onChange: this.inputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Checkbox Label')), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: 'Input Number',
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), getFieldDecorator('inputNumber', {
        rules: [{
          required: true
        }],
        onChange: this.inputChange
      })(_react2.default.createElement(_inputNumber2.default, {
        size: 'large',
        min: 1,
        max: 10,
        style: { width: 100 },
        defaultValue: 3,
        name: 'inputNumber',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }))), _react2.default.createElement(FormItem, { label: 'Slider', labelCol: { span: 8 }, wrapperCol: { span: 8 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_slider2.default, { defaultValue: 70, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      })), _react2.default.createElement(FormItem, { label: 'Select', labelCol: { span: 8 }, wrapperCol: { span: 8 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_select2.default, { size: 'large', defaultValue: 'lucy', style: { width: 192 }, name: 'select', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(Option, { value: 'jack', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, 'jack'), _react2.default.createElement(Option, { value: 'lucy', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, 'lucy'), _react2.default.createElement(Option, { value: 'disabled', disabled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, 'disabled'), _react2.default.createElement(Option, { value: 'yiminghe', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, 'yiminghe'))), _react2.default.createElement(FormItem, { label: 'DatePicker', labelCol: { span: 8 }, wrapperCol: { span: 8 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_datePicker2.default, { name: 'startDate', __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      })), _react2.default.createElement(FormItem, { style: { marginTop: 48 }, wrapperCol: { span: 8, offset: 8 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement(_button2.default, { size: 'large', type: 'primary', htmlType: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, 'OK'), _react2.default.createElement(_button2.default, { size: 'large', style: { marginLeft: 8 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, 'Cancel'))));
    }
  }]);

  return Bird;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    inputChange: (0, _redux.bindActionCreators)(_actions.inputChange, dispatch)
  };
};

// export default Form.create()(Ant)
exports.default = _form2.default.create()((0, _reactRedux.connect)(null, mapDispatchToProps)(Bird));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmlyZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJpbnB1dENoYW5nZSIsIklucHV0U3RhdGUiLCJGb3JtSXRlbSIsIkl0ZW0iLCJPcHRpb24iLCJmb3JtSXRlbUxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJmb3JtVGFpbExheW91dCIsIm9mZnNldCIsIkJpcmQiLCJzdGF0ZSIsImNoZWNrTmljayIsImNoZWNrRmFjZWJvb2siLCJjaGVjayIsInByb3BzIiwiZm9ybSIsInZhbGlkYXRlRmllbGRzIiwiZXJyIiwidmFsIiwiY29uc29sZSIsImluZm8iLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJjaGVja2VkIiwiZm9yY2UiLCJsb2ciLCJpZCIsInRpdGxlIiwidmFsdWUiLCJnZXRGaWVsZERlY29yYXRvciIsIm1hcmdpblRvcCIsInJ1bGVzIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBYWhCLEFBQVM7O0FBQ1QsQUFBUzs7QUFFVCxBQUFTLEFBQW1COztBQUU1QixBQUFPLEFBQWdCOzs7Ozs7Ozs7QUFFdkIsSUFBTSxXQUFXLGVBQWpCLEFBQXNCO0FBQ3RCLElBQU0sU0FBUyxpQkFBZixBQUFzQjs7QUFFdEIsSUFBTTtZQUNNLEVBQUUsTUFEUyxBQUNYLEFBQVEsQUFDbEI7Y0FBWSxFQUFFLE1BRmhCLEFBQXVCLEFBRVQsQUFBUTtBQUZDLEFBQ3JCO0FBR0YsSUFBTTtZQUNNLEVBQUUsTUFEUyxBQUNYLEFBQVEsQUFDbEI7Y0FBWSxFQUFF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