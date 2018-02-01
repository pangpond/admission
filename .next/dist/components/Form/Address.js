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

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/admission/components/Form/Address.js';


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

var Address = function (_Component) {
  (0, _inherits3.default)(Address, _Component);

  function Address() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Address);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Address.__proto__ || (0, _getPrototypeOf2.default)(Address)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      checkNick: false
    }, _this.check = function () {
      _this.props.form.validateFields(function (err, val) {
        if (!err) {
          console.info('success');
        }
      });
    }, _this.handleChange = function (e) {
      if (e.target.name === 'checkNick') {
        _this.setState({
          checkNick: e.target.checked
        }, function () {
          _this.props.form.validateFields(['nickname'], { force: true });
        });
      }

      if (e.target.name === 'checkFacebook') {
        _this.setState({
          checkFacebook: e.target.checked
        }, function () {
          _this.props.form.validateFields(['facebook'], { force: true });
        });
      }
    }, _this.inputChange = function (e) {
      var inputChange = _this.props.inputChange;
      var _e$target = e.target,
          id = _e$target.id,
          title = _e$target.title,
          value = _e$target.value;

      inputChange(title, id, value);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Address, [{
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, { label: 'Name', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), getFieldDecorator('username', {
        rules: [{
          required: true,
          message: 'Please input your name'
        }],
        onChange: this.inputChange
      })(_react2.default.createElement(_input2.default, { title: 'profile', placeholder: 'Please input your name', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, { label: 'Nickname', __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), getFieldDecorator('nickname', {
        rules: [{
          required: this.state.checkNick,
          message: 'Please input your nickname'
        }],
        onChange: this.inputChange
      })(_react2.default.createElement(_input2.default, { title: 'profile', placeholder: 'Please input your nickname', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, { label: 'Facebook', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), getFieldDecorator('facebook', {
        rules: [{
          required: this.state.checkFacebook,
          message: 'Please input your facebook URL'
        }],
        onChange: this.inputChange
      })(_react2.default.createElement(_input2.default, { title: 'social', placeholder: 'Please input your facebook URL', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formTailLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), _react2.default.createElement(_checkbox2.default, { value: this.state.checkNick, name: 'checkNick', onChange: this.handleChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, 'Nickname is required')), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formTailLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement(_checkbox2.default, {
        value: this.state.checkFacebook,
        name: 'checkFacebook',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, 'Facebook is required')), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formTailLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react2.default.createElement(_button2.default, { type: 'primary', onClick: this.check, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, 'Check')));
    }
  }]);

  return Address;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    inputChange: (0, _redux.bindActionCreators)(_actions.inputChange, dispatch)
  };
};

// export default Form.create()(Address)
exports.default = _form2.default.create()((0, _reactRedux.connect)(null, mapDispatchToProps)(Address));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9ybS9BZGRyZXNzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImlucHV0Q2hhbmdlIiwiRm9ybUl0ZW0iLCJJdGVtIiwiT3B0aW9uIiwiZm9ybUl0ZW1MYXlvdXQiLCJsYWJlbENvbCIsInNwYW4iLCJ3cmFwcGVyQ29sIiwiZm9ybVRhaWxMYXlvdXQiLCJvZmZzZXQiLCJBZGRyZXNzIiwic3RhdGUiLCJjaGVja05pY2siLCJjaGVjayIsInByb3BzIiwiZm9ybSIsInZhbGlkYXRlRmllbGRzIiwiZXJyIiwidmFsIiwiY29uc29sZSIsImluZm8iLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInNldFN0YXRlIiwiY2hlY2tlZCIsImZvcmNlIiwiY2hlY2tGYWNlYm9vayIsImlkIiwidGl0bGUiLCJ2YWx1ZSIsImdldEZpZWxkRGVjb3JhdG9yIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJvbkNoYW5nZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQWFoQixBQUFTOztBQUNULEFBQVM7O0FBRVQsQUFBUyxBQUFtQjs7Ozs7OztBQUU1QixJQUFNLFdBQVcsZUFBakIsQUFBc0I7QUFDdEIsSUFBTSxTQUFTLGlCQUFmLEFBQXNCOztBQUV0QixJQUFNO1lBQ00sRUFBRSxNQURTLEFBQ1gsQUFBUSxBQUNsQjtjQUFZLEVBQUUsTUFGaEIsQUFBdUIsQUFFVCxBQUFRO0FBRkMsQUFDckI7QUFHRixJQUFNO1lBQ00sRUFBRSxNQURTLEFBQ1gsQUFBUSxBQUNsQjtjQUFZLEVBQUUsTUFBRixBQUFRLEdBQUcsUUFGekIsQUFBdUIsQUFFVCxBQUFtQjtBQUZWLEFBQ3JCOztJ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O0FBQUEsMEJBQ0Usb0NBQVUsT0FBTyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsV0FBVyxNQUF2QyxBQUE0QyxhQUFZLFVBQVUsS0FBbEUsQUFBdUU7b0JBQXZFO3NCQUFBO0FBQUE7U0FwQ0osQUFtQ0UsQUFDRSxBQUlGLDBDQUFDLGNBQUQscUNBQUEsQUFBYzs7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsMEJBQ0U7ZUFDUyxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtjQUZGLEFBRU8sQUFDTDtrQkFBVSxLQUhaLEFBR2lCOztvQkFIakI7c0JBQUE7QUFBQTtBQUNFLFNBMUNOLEFBd0NFLEFBQ0UsQUFRRiwwQ0FBQyxjQUFELHFDQUFBLEFBQWM7O29CQUFkO3NCQUFBLEFBQ0U7QUFERjtBQUFBLDBCQUNFLGtDQUFRLE1BQVIsQUFBYSxXQUFVLFNBQVMsS0FBaEMsQUFBcUM7b0JBQXJDO3NCQUFBO0FBQUE7U0FuRE4sQUFDRSxBQWlERSxBQUNFLEFBTVA7Ozs7O0EsQUFsR21COztBQXFHdEIsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsNkJBQUE7O2lCQUNaLEFBQW1CLHFEQURQLEFBQWEsQUFDekIsQUFBZ0M7QUFEUCxBQUN0QztBQURGOztBQUlBLEFBQ0E7a0JBQWUsZUFBQSxBQUFLLFNBQVMseUJBQUEsQUFBUSxNQUFSLEFBQWMsb0JBQTNDLEFBQWUsQUFBYyxBQUFrQyIsImZpbGUiOiJBZGRyZXNzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5ncG9uZC9TaXRlcy9OZXh0Z2Vuc29mdC9hZG1pc3Npb24ifQ==