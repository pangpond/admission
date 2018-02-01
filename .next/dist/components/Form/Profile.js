'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/admission/components/Form/Profile.js';


var FormItem = _form2.default.Item;

var formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    inputChange: (0, _redux.bindActionCreators)(_actions.inputChange, dispatch)
  };
};

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
      })),
      lastname: _form2.default.createFormField((0, _extends3.default)({}, props.lastname, {
        value: props.lastname.value
      }))
    };
  },
  onValuesChange: function onValuesChange(_, values) {
    console.log(values);
  }
})((0, _reactRedux.connect)(null, mapDispatchToProps)(function (props) {
  var getFieldDecorator = props.form.getFieldDecorator;

  var inputChangeFunc = function inputChangeFunc(e) {
    var inputChange = props.inputChange;
    var _e$target = e.target,
        id = _e$target.id,
        title = _e$target.title,
        value = _e$target.value;

    inputChange(title, id, value);
  };
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, { label: 'Username', __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), getFieldDecorator('username', {
    rules: [{ required: true, message: 'Username is required!' }]
  })(_react2.default.createElement(_input2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, { label: 'Password', __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }), getFieldDecorator('password', {
    rules: [{ required: true, message: 'Password is required!' }]
  })(_react2.default.createElement(_input2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, { label: 'Last Name', __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), getFieldDecorator('lastname', {
    rules: [{
      required: true,
      message: 'Please input your lastname'
    }],
    onChange: inputChangeFunc
  })(_react2.default.createElement(_input2.default, { title: 'profile', placeholder: 'Please input your name', __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }))));
}));

var Profile = function (_Component) {
  (0, _inherits3.default)(Profile, _Component);

  function Profile() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Profile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Profile.__proto__ || (0, _getPrototypeOf2.default)(Profile)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fields: {
        username: {
          value: 'pangpond'
        },
        password: {
          value: ''
        },
        lastname: {
          value: ''
        }
      }
    }, _this.handleFormChange = function (changedFields) {
      _this.setState({
        fields: (0, _extends3.default)({}, _this.state.fields, changedFields)
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Profile, [{
    key: 'render',
    value: function render() {
      var fields = this.state.fields;
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement(CustomizedForm, (0, _extends3.default)({}, fields, { onChange: this.handleFormChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      })), _react2.default.createElement('pre', { className: 'language-bash', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, (0, _stringify2.default)(fields, null, 2)));
    }
  }]);

  return Profile;
}(_react.Component);

exports.default = Profile;

// export default Form.create()(Ant)
// export default connect(null, mapDispatchToProps)(Profile)
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9ybS9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImlucHV0Q2hhbmdlIiwiRm9ybUl0ZW0iLCJJdGVtIiwiZm9ybUl0ZW1MYXlvdXQiLCJsYWJlbENvbCIsInNwYW4iLCJ3cmFwcGVyQ29sIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJDdXN0b21pemVkRm9ybSIsImNyZWF0ZSIsIm9uRmllbGRzQ2hhbmdlIiwicHJvcHMiLCJjaGFuZ2VkRmllbGRzIiwib25DaGFuZ2UiLCJtYXBQcm9wc1RvRmllbGRzIiwidXNlcm5hbWUiLCJjcmVhdGVGb3JtRmllbGQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwibGFzdG5hbWUiLCJvblZhbHVlc0NoYW5nZSIsIl8iLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJmb3JtIiwiaW5wdXRDaGFuZ2VGdW5jIiwiZSIsInRhcmdldCIsImlkIiwidGl0bGUiLCJydWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsIlByb2ZpbGUiLCJzdGF0ZSIsImZpZWxkcyIsImhhbmRsZUZvcm1DaGFuZ2UiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBRWhCLEFBQVM7O0FBQ1QsQUFBUzs7QUFFVCxBQUFTLEFBQW1COzs7Ozs7O0FBRTVCLElBQU0sV0FBVyxlQUFqQixBQUFzQjs7QUFFdEIsSUFBTTtZQUNNLEVBQUUsTUFEUyxBQUNYLEFBQVEsQUFDbEI7Y0FBWSxFQUFFLE1BRmhCLEFBQXVCLEFBRVQsQUFBUTtBQUZDLEFBQ3JCOztBQUlGLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFBOztpQkFDWixBQUFtQixxREFEUCxBQUFhLEFBQ3pCLEFBQWdDO0FBRFAsQUFDdEM7QUFERjs7QUFJQSxJQUFNLGdDQUFpQixBQUFLO0FBQU8sMENBQUEsQUFDbEIsT0FEa0IsQUFDWCxlQUFlLEFBQ25DO1VBQUEsQUFBTSxTQUFOLEFBQWUsQUFDaEI7QUFIZ0MsQUFJakM7QUFKaUMsOENBQUEsQUFJaEIsT0FBTyxBQUN0Qjs7K0JBQ1ksQUFBSywyQ0FDVixNQURLLEFBQ0M7ZUFDRixNQUFBLEFBQU0sU0FIVixBQUNLLEFBRWMsQUFFeEI7QUFGRSxRQUZROytCQUlBLEFBQUssMkNBQ1YsTUFESyxBQUNDO2VBQ0YsTUFBQSxBQUFNLFNBUFYsQUFLSyxBQUVjLEFBRXhCO0FBRkUsUUFGUTsrQkFJQSxBQUFLLDJDQUNWLE1BREssQUFDQztlQUNGLE1BQUEsQUFBTSxTQVhqQixBQUFPLEFBU0ssQUFFYyxBQUczQjtBQUhLLFFBRlE7QUFUTCxBQUNMO0FBTjZCLEFBb0JqQztBQXBCaUMsMENBQUEsQUFvQmxCLEdBcEJrQixBQW9CZixRQUFRLEFBQ3hCO1lBQUEsQUFBUSxJQUFSLEFBQVksQUFDYjtBQXRCb0IsQUFBWTtBQUFBLEFBQ2pDLENBRHFCLDJCQXVCcEIsQUFBUSxNQUFSLEFBQWMsb0JBQW9CLFVBQUEsQUFBQyxPQUFVO01BQUEsQUFDdEMsb0JBQXNCLE1BRGdCLEFBQ1YsS0FEVSxBQUN0QyxBQUVSOztNQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLEdBQU07UUFBQSxBQUNyQixjQURxQixBQUNMLE1BREssQUFDckI7b0JBQ3FCLEVBRkEsQUFFRTtRQUZGLEFBRXJCLGVBRnFCLEFBRXJCO1FBRnFCLEFBRWpCLGtCQUZpQixBQUVqQjtRQUZpQixBQUVWLGtCQUZVLEFBRVYsQUFDbkI7O2dCQUFBLEFBQVksT0FBWixBQUFtQixJQUFuQixBQUF1QixBQUN4QjtBQUpELEFBS0E7eUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRyxjQUFELHFDQUFBLEFBQWMsa0JBQWdCLE9BQTlCLEFBQW9DO2dCQUFwQztrQkFBQSxBQUNHO0FBREg7d0JBQ0csQUFBa0I7V0FDVixDQUFDLEVBQUUsVUFBRixBQUFZLE1BQU0sU0FEM0IsQUFBOEIsQUFDdEIsQUFBQyxBQUEyQjtBQUROLEFBQzdCOztnQkFDQztrQkFKUCxBQUNFLEFBQ0csQUFFRSxBQUVMO0FBRks7QUFBQSxHQUFBLHFCQUVKLGNBQUQscUNBQUEsQUFBYyxrQkFBZ0IsT0FBOUIsQUFBb0M7Z0JBQXBDO2tCQUFBLEFBQ0c7QUFESDt3QkFDRyxBQUFrQjtXQUNWLENBQUMsRUFBRSxVQUFGLEFBQVksTUFBTSxTQUQzQixBQUE4QixBQUN0QixBQUFDLEFBQTJCO0FBRE4sQUFDN0I7O2dCQUNDO2tCQVRQLEFBTUUsQUFDRyxBQUVFLEFBRUw7QUFGSztBQUFBLEdBQUEscUJBRUosY0FBRCxxQ0FBQSxBQUFjLGtCQUFnQixPQUE5QixBQUFvQztnQkFBcEM7a0JBQUEsQUFDRztBQURIO3dCQUNHLEFBQWtCOztnQkFFZixBQUNZLEFBQ1Y7ZUFKeUIsQUFDdEIsQUFDTCxBQUVXLEFBR2I7QUFMRSxBQUNFLEtBRkc7Y0FEUixBQUE4QixBQU9uQjtBQVBtQixBQUM3QixzREFPUSxPQUFQLEFBQWEsV0FBVSxhQUF2QixBQUFtQztnQkFBbkM7a0JBckJULEFBQ0UsQUFXRSxBQUNHLEFBUUUsQUFJVjtBQUpVO0dBQUE7QUFwRFgsQUFBdUIsQUF1QnBCLENBQUE7O0ksQUFtQ0c7Ozs7Ozs7Ozs7Ozs7OzhNQUNKLEE7OztpQkFDVSxBQUNJLEFBQ0QsQUFFVDtBQUhVLEFBQ1I7O2lCQUZJLEFBSUksQUFDRCxBQUVUO0FBSFUsQUFDUjs7aUJBTkUsQSxBQUNFLEFBT0ksQUFDRDtBQURDLEFBQ1I7QUFSSSxBQUNOO0FBRkksQUFDTixhLEFBWUYsbUJBQW1CLFVBQUEsQUFBQyxlQUFrQixBQUNwQztZQUFBLEFBQUs7MkNBQ1UsTUFBQSxBQUFLLE1BQWxCLEFBQXdCLFFBRDFCLEFBQWMsQUFDWixBQUFtQyxBQUV0QztBQUhlLEFBQ1o7QTs7Ozs7NkJBR0ssQUFDUDtVQUFNLFNBQVMsS0FBQSxBQUFLLE1BQXBCLEFBQTBCLEFBQzFCOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsZ0NBQ0UsQUFBQywyQ0FBRCxBQUFvQixVQUFRLFVBQVUsS0FBdEMsQUFBMkM7b0JBQTNDO3NCQURGLEFBQ0UsQUFDQTtBQURBOzJCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFBZ0M7QUFBaEM7a0NBQWdDLEFBQWUsUUFBZixBQUF1QixNQUgzRCxBQUNFLEFBRUUsQUFBZ0MsQUFBNkIsQUFHbEU7Ozs7O0EsQUEzQm1CLEFBOEJ0Qjs7a0JBQUEsQUFBZTs7QUFFZjtBQUNBIiwiZmlsZSI6IlByb2ZpbGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2FkbWlzc2lvbiJ9