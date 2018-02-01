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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/admission/handlers/Input.js';


var Input = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call.apply(_ref, [this].concat(args))), _this), _this.inputChange = function (e) {
      var _this$props = _this.props,
          inputChange = _this$props.inputChange,
          title = _this$props.title,
          name = _this$props.name;

      inputChange(title, name, e.target.value);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Input, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_reactBootstrap.FormGroup, { controlId: 'formBasicText', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_reactBootstrap.ControlLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, this.props.controlLabel), _react2.default.createElement(_reactBootstrap.FormControl, {
        disabled: this.props.disabled,
        type: this.props.type || 'Text',
        placeholder: this.props.controlLabel,
        onChange: this.inputChange,
        value: this.props.val,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })));
    }
  }]);

  return Input;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    inputChange: (0, _redux.bindActionCreators)(_actions.inputChange, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Input);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmRsZXJzL0lucHV0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybUdyb3VwIiwiQ29udHJvbExhYmVsIiwiRm9ybUNvbnRyb2wiLCJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiaW5wdXRDaGFuZ2UiLCJJbnB1dCIsImUiLCJwcm9wcyIsInRpdGxlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiY29udHJvbExhYmVsIiwiZGlzYWJsZWQiLCJ0eXBlIiwidmFsIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBVyxBQUFjOztBQUNsQyxBQUFTOztBQUNULEFBQVM7O0FBRVQsQUFBUyxBQUFtQjs7Ozs7OztJLEFBRXRCOzs7Ozs7Ozs7Ozs7OzswTUFDSixBLGNBQWMsVUFBQSxBQUFDLEdBQU07d0JBQ2tCLE1BRGxCLEFBQ3VCO1VBRHZCLEFBQ1gsMEJBRFcsQUFDWDtVQURXLEFBQ0Usb0JBREYsQUFDRTtVQURGLEFBQ1MsbUJBRFQsQUFDUyxBQUM1Qjs7a0JBQUEsQUFBWSxPQUFaLEFBQW1CLE1BQU0sRUFBQSxBQUFFLE9BQTNCLEFBQWtDLEFBQ25DO0E7Ozs7OzZCQUVRLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLDJDQUFVLFdBQVgsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUFlO0FBQWY7QUFBQSxjQUFlLEFBQUssTUFEdEIsQUFDRSxBQUEwQixBQUMxQiwrQkFBQSxBQUFDO2tCQUNXLEtBQUEsQUFBSyxNQURqQixBQUN1QixBQUNyQjtjQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFGbkIsQUFFMkIsQUFDekI7cUJBQWEsS0FBQSxBQUFLLE1BSHBCLEFBRzBCLEFBQ3hCO2tCQUFVLEtBSlosQUFJaUIsQUFDZjtlQUFPLEtBQUEsQUFBSyxNQUxkLEFBS29COztvQkFMcEI7c0JBSk4sQUFDRSxBQUNFLEFBRUUsQUFVUDtBQVZPO0FBQ0U7Ozs7O0FBWlEsQTs7QUF3QnBCLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFBOztpQkFDWixBQUFtQixxREFEUCxBQUFhLEFBQ3pCLEFBQWdDO0FBRFAsQUFDdEM7QUFERixBQUlBOztrQkFBZSx5QkFBQSxBQUFRLE1BQVIsQUFBYyxvQkFBN0IsQUFBZSxBQUFrQyIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFuZ3BvbmQvU2l0ZXMvTmV4dGdlbnNvZnQvYWRtaXNzaW9uIn0=