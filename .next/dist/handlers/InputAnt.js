'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/admission/handlers/InputAnt.js';


var FormItem = _form2.default.Item;

var formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};

var InputAnt = function (_Component) {
  (0, _inherits3.default)(InputAnt, _Component);

  function InputAnt() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, InputAnt);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InputAnt.__proto__ || (0, _getPrototypeOf2.default)(InputAnt)).call.apply(_ref, [this].concat(args))), _this), _this.inputChange = function (e) {
      var _this$props = _this.props,
          inputChange = _this$props.inputChange,
          controlGroup = _this$props.controlGroup,
          name = _this$props.name;

      inputChange(controlGroup, name, e.target.value);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(InputAnt, [{
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      return _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, { label: this.props.controlLabel, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), getFieldDecorator(this.props.name, {
        rules: [{
          required: this.props.required,
          message: this.props.placeholder
        }]
        // onChange: this.inputChange,
      })(_react2.default.createElement(_input2.default, {
        placeholder: this.props.placeholder,
        onChange: this.inputChange,
        disabled: this.props.disabled,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })));
    }
  }]);

  return InputAnt;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    inputChange: (0, _redux.bindActionCreators)(_actions.inputChange, dispatch)
  };
};

// export default connect(null, mapDispatchToProps)(InputAnt)
exports.default = _form2.default.create()((0, _reactRedux.connect)(null, mapDispatchToProps)(InputAnt));
// export default connect(null, mapDispatchToProps)(Form.create()(InputAnt))
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmRsZXJzL0lucHV0QW50LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImlucHV0Q2hhbmdlIiwiRm9ybUl0ZW0iLCJJdGVtIiwiZm9ybUl0ZW1MYXlvdXQiLCJsYWJlbENvbCIsInNwYW4iLCJ3cmFwcGVyQ29sIiwiSW5wdXRBbnQiLCJlIiwicHJvcHMiLCJjb250cm9sR3JvdXAiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRGaWVsZERlY29yYXRvciIsImZvcm0iLCJjb250cm9sTGFiZWwiLCJydWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsInBsYWNlaG9sZGVyIiwiZGlzYWJsZWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFhaEIsQUFBUzs7QUFDVCxBQUFTOztBQUVULEFBQVMsQUFBbUI7Ozs7Ozs7QUFFNUIsSUFBTSxXQUFXLGVBQWpCLEFBQXNCOztBQUV0QixJQUFNO1lBQ00sRUFBRSxNQURTLEFBQ1gsQUFBUSxBQUNsQjtjQUFZLEVBQUUsTUFGaEIsQUFBdUIsQUFFVCxBQUFRO0FBRkMsQUFDckI7O0ksQUFJSTs7Ozs7Ozs7Ozs7Ozs7Z04sQUFDSixjQUFjLFVBQUEsQUFBQyxHQUFNO3dCQUN5QixNQUR6QixBQUM4QjtVQUQ5QixBQUNYLDBCQURXLEFBQ1g7VUFEVyxBQUNFLDJCQURGLEFBQ0U7VUFERixBQUNnQixtQkFEaEIsQUFDZ0IsQUFDbkM7O2tCQUFBLEFBQVksY0FBWixBQUEwQixNQUFNLEVBQUEsQUFBRSxPQUFsQyxBQUF5QyxBQUMxQztBOzs7Ozs2QkFFUTtVQUFBLEFBQ0Msb0JBQXNCLEtBQUEsQUFBSyxNQUQ1QixBQUNrQyxLQURsQyxBQUNDLEFBRVI7OzZCQUNHLGNBQUQscUNBQUEsQUFBYyxrQkFBZ0IsT0FBTyxLQUFBLEFBQUssTUFBMUMsQUFBZ0Q7b0JBQWhEO3NCQUFBLEFBQ0c7QUFESDtRQUFBLG9CQUNxQixLQUFBLEFBQUssTUFBdkIsQUFBNkI7O29CQUdkLEtBQUEsQUFBSyxNQURqQixBQUN1QixBQUNyQjttQkFBUyxLQUFBLEFBQUssTUFIWCxBQUNMLEFBRXNCLEFBR3hCO0FBTEUsQUFDRSxTQUZHO0FBRFIsQUFBbUM7QUFBQSxBQUNsQztxQkFRYSxLQUFBLEFBQUssTUFEakIsQUFDdUIsQUFDeEI7a0JBQVUsS0FGVCxBQUVjLEFBQ2Y7a0JBQVUsS0FBQSxBQUFLLE1BSGQsQUFHb0I7O29CQUhwQjtzQkFWUCxBQUNFLEFBQ0csQUFRRSxBQU9SO0FBUFE7QUFDRCxPQURDOzs7OztBLEFBbkJZOztBQTZCdkIsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsNkJBQUE7O2lCQUNaLEFBQW1CLHFEQURQLEFBQWEsQUFDekIsQUFBZ0M7QUFEUCxBQUN0QztBQURGOztBQUlBLEFBQ0E7a0JBQWUsZUFBQSxBQUFLLFNBQVMseUJBQUEsQUFBUSxNQUFSLEFBQWMsb0JBQTNDLEFBQWUsQUFBYyxBQUFrQztBQUMvRCIsImZpbGUiOiJJbnB1dEFudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFuZ3BvbmQvU2l0ZXMvTmV4dGdlbnNvZnQvYWRtaXNzaW9uIn0=