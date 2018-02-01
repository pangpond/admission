'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/admission/components/Cat.js';


var FormItem = _form2.default.Item;

var formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
var formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};

var CatForm = function (_Component) {
  (0, _inherits3.default)(CatForm, _Component);

  function CatForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CatForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CatForm.__proto__ || (0, _getPrototypeOf2.default)(CatForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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

  (0, _createClass3.default)(CatForm, [{
    key: 'render',
    value: function render() {
      var getFieldDecorator = props.form.getFieldDecorator;

      return _react2.default.createElement(_form2.default, { layout: 'inline', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, { label: 'Name', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), getFieldDecorator('username', {
        rules: [{
          required: true,
          message: 'Please input your name'
        }],
        onChange: this.inputChange
      })(_react2.default.createElement(_input2.default, { title: 'profile', placeholder: 'Please input your name', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, { label: 'Nickname', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), getFieldDecorator('nickname', {
        rules: [{
          required: this.state.checkNick,
          message: 'Please input your nickname'
        }],
        onChange: this.inputChange
      })(_react2.default.createElement(_input2.default, { title: 'profile', placeholder: 'Please input your nickname', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, { label: 'Facebook', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), getFieldDecorator('facebook', {
        rules: [{
          required: this.state.checkFacebook,
          message: 'Please input your facebook URL'
        }],
        onChange: this.inputChange
      })(_react2.default.createElement(_input2.default, { title: 'social', placeholder: 'Please input your facebook URL', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formTailLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), _react2.default.createElement(_checkbox2.default, { value: this.state.checkNick, name: 'checkNick', onChange: this.handleChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'Nickname is required')), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formTailLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement(_checkbox2.default, {
        value: this.state.checkFacebook,
        name: 'checkFacebook',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, 'Facebook is required')), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formTailLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), _react2.default.createElement(_button2.default, { type: 'primary', onClick: this.check, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, 'Check')));
    }
  }]);

  return CatForm;
}(_react.Component);

var CustomizedForm = _form2.default.create({
  onFieldsChange: function onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields: function mapPropsToFields(props) {
    return {
      username: _form2.default.createFormField((0, _extends3.default)({}, props.username, {
        value: props.username.value
      })),
      password: _form2.default.createFormField((0, _extends3.default)({}, props.password, {
        value: props.password.value
      }))
    };
  },
  onValuesChange: function onValuesChange(_, values) {
    console.log(values);
  },
  inputChange: function inputChange(e) {
    var inputChange = this.props.inputChange;
    var _e$target2 = e.target,
        id = _e$target2.id,
        title = _e$target2.title,
        value = _e$target2.value;

    inputChange(title, id, value);
  }
})(CatForm);

var Cat = function (_Component2) {
  (0, _inherits3.default)(Cat, _Component2);

  function Cat() {
    var _ref2;

    var _temp2, _this2, _ret2;

    (0, _classCallCheck3.default)(this, Cat);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Cat.__proto__ || (0, _getPrototypeOf2.default)(Cat)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
      fields: {
        username: {
          value: 'pangpond'
        },
        password: {
          value: ''
        }
      }
    }, _this2.handleFormChange = function (changedFields) {
      _this2.setState({
        fields: (0, _extends3.default)({}, _this2.state.fields, changedFields)
      });
    }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
  }

  (0, _createClass3.default)(Cat, [{
    key: 'render',
    value: function render() {
      var fields = this.state.fields;
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement(CustomizedForm, (0, _extends3.default)({}, fields, { onChange: this.handleFormChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      })), _react2.default.createElement('pre', { className: 'language-bash', __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, (0, _stringify2.default)(fields, null, 2)));
    }
  }]);

  return Cat;
}(_react.Component);

exports.default = Cat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2F0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybUl0ZW0iLCJJdGVtIiwiZm9ybUl0ZW1MYXlvdXQiLCJsYWJlbENvbCIsInNwYW4iLCJ3cmFwcGVyQ29sIiwiZm9ybVRhaWxMYXlvdXQiLCJvZmZzZXQiLCJDYXRGb3JtIiwic3RhdGUiLCJjaGVja05pY2siLCJjaGVja0ZhY2Vib29rIiwiY2hlY2siLCJwcm9wcyIsImZvcm0iLCJ2YWxpZGF0ZUZpZWxkcyIsImVyciIsInZhbCIsImNvbnNvbGUiLCJpbmZvIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwiY2hlY2tlZCIsImZvcmNlIiwiaW5wdXRDaGFuZ2UiLCJsb2ciLCJpZCIsInRpdGxlIiwidmFsdWUiLCJnZXRGaWVsZERlY29yYXRvciIsInJ1bGVzIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwib25DaGFuZ2UiLCJDdXN0b21pemVkRm9ybSIsImNyZWF0ZSIsIm9uRmllbGRzQ2hhbmdlIiwiY2hhbmdlZEZpZWxkcyIsIm1hcFByb3BzVG9GaWVsZHMiLCJ1c2VybmFtZSIsImNyZWF0ZUZvcm1GaWVsZCIsInBhc3N3b3JkIiwib25WYWx1ZXNDaGFuZ2UiLCJfIiwidmFsdWVzIiwiQ2F0IiwiZmllbGRzIiwiaGFuZGxlRm9ybUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztBQUdoQixJQUFNLFdBQVcsZUFBakIsQUFBc0I7O0FBRXRCLElBQU07WUFDTSxFQUFFLE1BRFMsQUFDWCxBQUFRLEFBQ2xCO2NBQVksRUFBRSxNQUZoQixBQUF1QixBQUVULEFBQVE7QUFGQyxBQUNyQjtBQUdGLElBQU07WUFDTSxFQUFFLE1BRFMsQUFDWCxBQUFRLEFBQ2xCO2NBQVksRUFBRSxNQUFGLEFBQVEsR0FBRyxRQUZ6QixBQUF1QixB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QTs7Ozs7Ozs7Ozs7Ozs7Nk1BQ0osQTs7O2lCQUNVLEFBQ0ksQUFDRCxBQUVUO0FBSFUsQUFDUjs7aUIsQUFIRSxBQUNFLEFBSUksQUFDRDtBQURDLEFBQ1I7QUFMSSxBQUNOO0FBRkksQUFDTixjLEFBU0YsbUJBQW1CLFVBQUEsQUFBQyxlQUFrQixBQUNwQzthQUFBLEFBQUs7MkNBQ1UsT0FBQSxBQUFLLE1BQWxCLEFBQXdCLFFBRDFCLEFBQWMsQUFDWixBQUFtQyxBQUV0QztBQUhlLEFBQ1o7QTs7Ozs7NkJBR0ssQUFDUDtVQUFNLFNBQVMsS0FBQSxBQUFLLE1BQXBCLEFBQTBCLEFBQzFCOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsZ0NBQ0UsQUFBQywyQ0FBRCxBQUFvQixVQUFRLFVBQVUsS0FBdEMsQUFBMkM7b0JBQTNDO3NCQURGLEFBQ0UsQUFDQTtBQURBOzJCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFBZ0M7QUFBaEM7a0NBQWdDLEFBQWUsUUFBZixBQUF1QixNQUgzRCxBQUNFLEFBRUUsQUFBZ0MsQUFBNkIsQUFHbEU7Ozs7O0FBeEJlLEEsQUEyQmxCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNhdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFuZ3BvbmQvU2l0ZXMvTmV4dGdlbnNvZnQvYWRtaXNzaW9uIn0=