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

var _actions = require('../actions');

var _InputAnt = require('../handlers/InputAnt');

var _InputAnt2 = _interopRequireDefault(_InputAnt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/admission/components/Ant.js';


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

var Ant = function (_Component) {
  (0, _inherits3.default)(Ant, _Component);

  function Ant() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Ant);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Ant.__proto__ || (0, _getPrototypeOf2.default)(Ant)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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

  (0, _createClass3.default)(Ant, [{
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, { label: 'Name', __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), getFieldDecorator('username', {
        rules: [{
          required: true,
          message: 'Please input your name'
        }],
        onChange: this.inputChange
      })(_react2.default.createElement(_input2.default, { title: 'profile', placeholder: 'Please input your name', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, { label: 'Nickname', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), getFieldDecorator('nickname', {
        rules: [{
          required: this.state.checkNick,
          message: 'Please input your nickname'
        }],
        onChange: this.inputChange
      })(_react2.default.createElement(_input2.default, { title: 'profile', placeholder: 'Please input your nickname', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, { label: 'Facebook', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), getFieldDecorator('facebook', {
        rules: [{
          required: this.state.checkFacebook,
          message: 'Please input your facebook URL'
        }],
        onChange: this.inputChange
      })(_react2.default.createElement(_input2.default, { title: 'social', placeholder: 'Please input your facebook URL', __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formTailLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), _react2.default.createElement(_checkbox2.default, { value: this.state.checkNick, name: 'checkNick', onChange: this.handleChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, 'Nickname is required')), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formTailLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), _react2.default.createElement(_checkbox2.default, {
        value: this.state.checkFacebook,
        name: 'checkFacebook',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, 'Facebook is required')), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formTailLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), _react2.default.createElement(_button2.default, { type: 'primary', onClick: this.check, __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, 'Check')));
    }
  }]);

  return Ant;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    inputChange: (0, _redux.bindActionCreators)(_actions.inputChange, dispatch)
  };
};

// export default Form.create()(Ant)
exports.default = _form2.default.create()((0, _reactRedux.connect)(null, mapDispatchToProps)(Ant));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQW50LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImlucHV0Q2hhbmdlIiwiSW5wdXRTdGF0ZSIsIkZvcm1JdGVtIiwiSXRlbSIsIk9wdGlvbiIsImZvcm1JdGVtTGF5b3V0IiwibGFiZWxDb2wiLCJzcGFuIiwid3JhcHBlckNvbCIsImZvcm1UYWlsTGF5b3V0Iiwib2Zmc2V0IiwiQW50Iiwic3RhdGUiLCJjaGVja05pY2siLCJjaGVjayIsInByb3BzIiwiZm9ybSIsInZhbGlkYXRlRmllbGRzIiwiZXJyIiwidmFsIiwiY29uc29sZSIsImluZm8iLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInNldFN0YXRlIiwiY2hlY2tlZCIsImZvcmNlIiwiY2hlY2tGYWNlYm9vayIsImlkIiwidGl0bGUiLCJ2YWx1ZSIsImdldEZpZWxkRGVjb3JhdG9yIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJvbkNoYW5nZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQWFoQixBQUFTOztBQUNULEFBQVM7O0FBRVQsQUFBUyxBQUFtQjs7QUFFNUIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0FBRXZCLElBQU0sV0FBVyxlQUFqQixBQUFzQjtBQUN0QixJQUFNLFNBQVMsaUJBQWYsQUFBc0I7O0FBRXRCLElBQU07WUFDTSxFQUFFLE1BRFMsQUFDWCxBQUFRLEFBQ2xCO2NBQVksRUFBRSxNQUZoQixBQUF1QixBQUVULEFBQVE7QUFGQyxBQUNyQjtBQUdGLElBQU07WUFDTSxFQUFFLE1BRFMsQUFDWCxBQUFRLEFBQ2xCO2NBQVksRUFBRSxNQUFGLEFBQVEsR0FBRyxRQUZ6QixBQUF1QixBQUVU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QUFjOztvQkFBZDtzQkFBQSxBQUNFO0FBREY7QUFBQSwwQkFDRSxvQ0FBVSxPQUFPLEtBQUEsQUFBSyxNQUF0QixBQUE0QixXQUFXLE1BQXZDLEFBQTRDLGFBQVksVUFBVSxLQUFsRSxBQUF1RTtvQkFBdkU7c0JBQUE7QUFBQTtTQW5ESixBQWtERSxBQUNFLEFBSUYsMENBQUMsY0FBRCxxQ0FBQSxBQUFjOztvQkFBZDtzQkFBQSxBQUNFO0FBREY7QUFBQSwwQkFDRTtlQUNTLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO2NBRkYsQUFFTyxBQUNMO2tCQUFVLEtBSFosQUFHaUI7O29CQUhqQjtzQkFBQTtBQUFBO0FBQ0UsU0F6RE4sQUF1REUsQUFDRSxBQVFGLDBDQUFDLGNBQUQscUNBQUEsQUFBYzs7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsMEJBQ0Usa0NBQVEsTUFBUixBQUFhLFdBQVUsU0FBUyxLQUFoQyxBQUFxQztvQkFBckM7c0JBQUE7QUFBQTtTQWxFTixBQUNFLEFBZ0VFLEFBQ0UsQUFNUDs7Ozs7QSxBQWpIZTs7QUFvSGxCLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFBOztpQkFDWixBQUFtQixxREFEUCxBQUFhLEFBQ3pCLEFBQWdDO0FBRFAsQUFDdEM7QUFERjs7QUFJQSxBQUNBO2tCQUFlLGVBQUEsQUFBSyxTQUFTLHlCQUFBLEFBQVEsTUFBUixBQUFjLG9CQUEzQyxBQUFlLEFBQWMsQUFBa0MiLCJmaWxlIjoiQW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5ncG9uZC9TaXRlcy9OZXh0Z2Vuc29mdC9hZG1pc3Npb24ifQ==