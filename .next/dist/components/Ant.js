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
      _this.setState({
        checkNick: e.target.checked
      }, function () {
        _this.props.form.validateFields(['nickname'], { force: true });
      });
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
          lineNumber: 62
        }
      }, _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, { label: 'Name', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), getFieldDecorator('username', {
        rules: [{
          required: true,
          message: 'Please input your name'
        }],
        onChange: this.inputChange
      })(_react2.default.createElement(_input2.default, { title: 'profile', placeholder: 'Please input your name', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, { label: 'Nickname', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), getFieldDecorator('nickname', {
        rules: [{
          required: this.state.checkNick,
          message: 'Please input your nickname'
        }],
        onChange: this.inputChange,
        title: 'profile'
      })(_react2.default.createElement(_input2.default, { title: 'profile', placeholder: 'Please input your nickname', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formTailLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), _react2.default.createElement(_checkbox2.default, { value: this.state.checkNick, onChange: this.handleChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, 'Nickname is required')), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formTailLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), _react2.default.createElement(_button2.default, { type: 'primary', onClick: this.check, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQW50LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImlucHV0Q2hhbmdlIiwiSW5wdXRTdGF0ZSIsIkZvcm1JdGVtIiwiSXRlbSIsIk9wdGlvbiIsImZvcm1JdGVtTGF5b3V0IiwibGFiZWxDb2wiLCJzcGFuIiwid3JhcHBlckNvbCIsImZvcm1UYWlsTGF5b3V0Iiwib2Zmc2V0IiwiQW50Iiwic3RhdGUiLCJjaGVja05pY2siLCJjaGVjayIsInByb3BzIiwiZm9ybSIsInZhbGlkYXRlRmllbGRzIiwiZXJyIiwidmFsIiwiY29uc29sZSIsImluZm8iLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJjaGVja2VkIiwiZm9yY2UiLCJpZCIsInRpdGxlIiwidmFsdWUiLCJnZXRGaWVsZERlY29yYXRvciIsInJ1bGVzIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwib25DaGFuZ2UiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFhaEIsQUFBUzs7QUFDVCxBQUFTOztBQUVULEFBQVMsQUFBbUI7O0FBRTVCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztBQUV2QixJQUFNLFdBQVcsZUFBakIsQUFBc0I7QUFDdEIsSUFBTSxTQUFTLGlCQUFmLEFBQXNCOztBQUV0QixJQUFNO1lBQ00sRUFBRSxNQURTLEFBQ1gsQUFBUSxBQUNsQjtjQUFZLEVBQUUsTUFGaEIsQUFBdUIsQUFFVCxBQUFRO0FBRkMsQUFDckI7QUFHRixJQUFNO1lBQ00sRUFBRSxNQURTLEFBQ1gsQUFBUSxBQUNsQjtjQUFZLEVBQUUsTUFBRixBQUFRLEdBQUcsUUFGekIsQUFBdUIsQUFFVCxBQUFtQjtBQUZWLEFBQ3JCOztJQUlJLEE7Ozs7Ozs7Ozs7Ozs7O3NNQUNKLEE7aUJBQVEsQUFDSyxBO0FBREwsQUFDTixhQUVGLEEsUUFBUSxZQUFNLEFBQ1o7WUFBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLGVBQWUsVUFBQSxBQUFDLEtBQUQsQUFBTSxLQUFRLEFBQzNDO1lBQUksQ0FBSixBQUFLLEtBQUssQUFDUjtrQkFBQSxBQUFRLEtBQVIsQUFBYSxBQUNkO0FBQ0Y7QUFKRCxBQUtEO0EsYSxBQUNELGVBQWUsVUFBQSxBQUFDLEdBQU0sQUFDcEI7WUFBQSxBQUFLO21CQUVVLEVBQUEsQUFBRSxPQUZqQixBQUNFLEFBQ3NCO0FBRHRCLEFBQ0UsU0FFRixZQUFNLEFBQ0o7Y0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLGVBQWUsQ0FBL0IsQUFBK0IsQUFBQyxhQUFhLEVBQUUsT0FBL0MsQUFBNkMsQUFBUyxBQUN2RDtBQU5ILEFBUUQ7QSxhQUNELEEsY0FBYyxVQUFBLEFBQUMsR0FBTTtVQUFBLEFBQ1gsY0FBZ0IsTUFETCxBQUNVLE1BRFYsQUFDWDtzQkFDcUIsRUFGVixBQUVZO1VBRlosQUFFWCxlQUZXLEFBRVg7VUFGVyxBQUVQLGtCQUZPLEFBRVA7VUFGTyxBQUVBLGtCQUZBLEFBRUEsQUFDbkI7O2tCQUFBLEFBQVksT0FBWixBQUFtQixJQUFuQixBQUF1QixBQUN4QjtBOzs7Ozs2QkFDUTtVQUFBLEFBQ0Msb0JBQXNCLEtBQUEsQUFBSyxNQUQ1QixBQUNrQyxLQURsQyxBQUNDLEFBQ1I7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBZ0JFO0FBaEJGO0FBQUEsT0FBQSxrQkFnQkcsY0FBRCxxQ0FBQSxBQUFjLGtCQUFnQixPQUE5QixBQUFvQztvQkFBcEM7c0JBQUEsQUFDRztBQURIOzRCQUNHLEFBQWtCOztvQkFFZixBQUNZLEFBQ1Y7bUJBSnlCLEFBQ3RCLEFBQ0wsQUFFVyxBQUdiO0FBTEUsQUFDRSxTQUZHO2tCQU1HLEtBUFgsQUFBOEIsQUFPZDtBQVBjLEFBQzdCLDBEQU9RLE9BQVAsQUFBYSxXQUFVLGFBQXZCLEFBQW1DO29CQUFuQztzQkF6QlAsQUFnQkUsQUFDRyxBQVFFLEFBRUw7QUFGSztPQUFBLHFCQUVKLGNBQUQscUNBQUEsQUFBYyxrQkFBZ0IsT0FBOUIsQUFBb0M7b0JBQXBDO3NCQUFBLEFBQ0c7QUFESDs0QkFDRyxBQUFrQjs7b0JBR0gsS0FBQSxBQUFLLE1BRGpCLEFBQ3VCLEFBQ3JCO21CQUp5QixBQUN0QixBQUNMLEFBRVcsQUFHYjtBQUxFLEFBQ0UsU0FGRztrQkFNRyxLQVBtQixBQU9kLEFBQ2Y7ZUFSRCxBQUE4QixBQVF0QjtBQVJzQixBQUM3QiwwREFRUSxPQUFQLEFBQWEsV0FBVSxhQUF2QixBQUFtQztvQkFBbkM7c0JBckNQLEFBMkJFLEFBQ0csQUFTRSxBQUVMO0FBRks7T0FBQSxxQkFFSixjQUFELHFDQUFBLEFBQWM7O29CQUFkO3NCQUFBLEFBQ0U7QUFERjtBQUFBLDBCQUNFLG9DQUFVLE9BQU8sS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFdBQVcsVUFBVSxLQUFqRCxBQUFzRDtvQkFBdEQ7c0JBQUE7QUFBQTtTQXhDSixBQXVDRSxBQUNFLEFBSUYsMENBQUMsY0FBRCxxQ0FBQSxBQUFjOztvQkFBZDtzQkFBQSxBQUNFO0FBREY7QUFBQSwwQkFDRSxrQ0FBUSxNQUFSLEFBQWEsV0FBVSxTQUFTLEtBQWhDLEFBQXFDO29CQUFyQztzQkFBQTtBQUFBO1NBOUNOLEFBQ0UsQUE0Q0UsQUFDRSxBQU1QOzs7OztBQWhGZSxBOztBQW1GbEIsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsNkJBQUE7O2lCQUNaLEFBQW1CLHFEQURQLEFBQWEsQUFDekIsQUFBZ0M7QUFEUCxBQUN0QztBQURGOztBQUlBLEFBQ0E7a0JBQWUsZUFBQSxBQUFLLFNBQVMseUJBQUEsQUFBUSxNQUFSLEFBQWMsb0JBQTNDLEFBQWUsQUFBYyxBQUFrQyIsImZpbGUiOiJBbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2FkbWlzc2lvbiJ9