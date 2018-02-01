'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../store');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _Ant = require('../components/Ant');

var _Ant2 = _interopRequireDefault(_Ant);

var _DisplayForm = require('../components/DisplayForm');

var _DisplayForm2 = _interopRequireDefault(_DisplayForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/admission/pages/index.js?entry';


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

var DynamicRule = function (_Component) {
  (0, _inherits3.default)(DynamicRule, _Component);

  function DynamicRule() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DynamicRule);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DynamicRule.__proto__ || (0, _getPrototypeOf2.default)(DynamicRule)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      checkNick: false
    }, _this.check = function () {
      _this.props.form.validateFields(function (err) {
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DynamicRule, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_index2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_DisplayForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_Ant2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }));
    }
  }]);

  return DynamicRule;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null)(DynamicRule);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aFJlZHV4IiwiaW5pdFN0b3JlIiwiTGF5b3V0IiwiQW50IiwiRGlzcGxheUZvcm0iLCJGb3JtSXRlbSIsIkl0ZW0iLCJPcHRpb24iLCJmb3JtSXRlbUxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJmb3JtVGFpbExheW91dCIsIm9mZnNldCIsIkR5bmFtaWNSdWxlIiwic3RhdGUiLCJjaGVja05pY2siLCJjaGVjayIsInByb3BzIiwiZm9ybSIsInZhbGlkYXRlRmllbGRzIiwiZXJyIiwiY29uc29sZSIsImluZm8iLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJjaGVja2VkIiwiZm9yY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFhaEIsQUFBTzs7OztBQUVQLEFBQVMsQUFBaUI7O0FBQzFCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFpQjs7Ozs7Ozs7O0FBRXhCLElBQU0sV0FBVyxlQUFqQixBQUFzQjtBQUN0QixJQUFNLFNBQVMsaUJBQWYsQUFBc0I7O0FBRXRCLElBQU07WUFDTSxFQUFFLE1BRFMsQUFDWCxBQUFRLEFBQ2xCO2NBQVksRUFBRSxNQUZoQixBQUF1QixBQUVULEFBQVE7QUFGQyxBQUNyQjtBQUdGLElBQU07WUFDTSxFQUFFLE1BRFMsQUFDWCxBQUFRLEFBQ2xCO2NBQVksRUFBRSxNQUFGLEFBQVEsR0FBRyxRQUZ6QixBQUF1QixBQUVULEFBQW1CO0FBRlYsQUFDckI7O0ksQUFJSTs7Ozs7Ozs7Ozs7Ozs7c05BQ0osQTtpQkFBUSxBLEFBQ0s7QUFETCxBQUNOLGFBRUYsQSxRQUFRLFlBQU0sQUFDWjtZQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsZUFBZSxVQUFBLEFBQUMsS0FBUSxBQUN0QztZQUFJLENBQUosQUFBSyxLQUFLLEFBQ1I7a0JBQUEsQUFBUSxLQUFSLEFBQWEsQUFDZDtBQUNGO0FBSkQsQUFLRDtBLGFBQ0QsQSxlQUFlLFVBQUEsQUFBQyxHQUFNLEFBQ3BCO1lBQUEsQUFBSzttQkFFVSxFQUFBLEFBQUUsT0FGakIsQUFDRSxBQUNzQjtBQUR0QixBQUNFLFNBRUYsWUFBTSxBQUNKO2NBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixlQUFlLENBQS9CLEFBQStCLEFBQUMsYUFBYSxFQUFFLE9BQS9DLEFBQTZDLEFBQVMsQUFDdkQ7QUFOSCxBQVFEO0E7Ozs7OzZCQUNRLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQUhKLEFBQ0UsQUFFRSxBQUdMO0FBSEs7QUFBQTs7Ozs7QUF6QmtCLEEsQUErQjFCOztrQkFBZSxBQUFVLGtEQUFWLEFBQXFCLE1BQXBDLEFBQWUsQUFBMkIiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2FkbWlzc2lvbiJ9