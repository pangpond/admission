webpackHotUpdate(5,{

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(665);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _input = __webpack_require__(489);

var _input2 = _interopRequireDefault(_input);

var _form = __webpack_require__(432);

var _form2 = _interopRequireDefault(_form);

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(419);

var _redux = __webpack_require__(413);

var _actions = __webpack_require__(491);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/pangpond/Sites/Nextgensoft/admission/components/Form/Profile.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pangpond/Sites/Nextgensoft/admission/components/Form/Profile.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kZjU5MjljODhiY2Q5NTA1MGRmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtL1Byb2ZpbGUuanM/ODU4NTIwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IHsgaW5wdXRDaGFuZ2UgfSBmcm9tICcuLi8uLi9hY3Rpb25zJ1xuXG5jb25zdCBGb3JtSXRlbSA9IEZvcm0uSXRlbVxuXG5jb25zdCBmb3JtSXRlbUxheW91dCA9IHtcbiAgbGFiZWxDb2w6IHsgc3BhbjogNCB9LFxuICB3cmFwcGVyQ29sOiB7IHNwYW46IDggfSxcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgaW5wdXRDaGFuZ2U6IGJpbmRBY3Rpb25DcmVhdG9ycyhpbnB1dENoYW5nZSwgZGlzcGF0Y2gpLFxufSlcblxuY29uc3QgQ3VzdG9taXplZEZvcm0gPSBGb3JtLmNyZWF0ZSh7XG4gIG9uRmllbGRzQ2hhbmdlKHByb3BzLCBjaGFuZ2VkRmllbGRzKSB7XG4gICAgcHJvcHMub25DaGFuZ2UoY2hhbmdlZEZpZWxkcylcbiAgfSxcbiAgbWFwUHJvcHNUb0ZpZWxkcyhwcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VybmFtZTogRm9ybS5jcmVhdGVGb3JtRmllbGQoe1xuICAgICAgICAuLi5wcm9wcy51c2VybmFtZSxcbiAgICAgICAgdmFsdWU6IHByb3BzLnVzZXJuYW1lLnZhbHVlLFxuICAgICAgfSksXG4gICAgICBwYXNzd29yZDogRm9ybS5jcmVhdGVGb3JtRmllbGQoe1xuICAgICAgICAuLi5wcm9wcy5wYXNzd29yZCxcbiAgICAgICAgdmFsdWU6IHByb3BzLnBhc3N3b3JkLnZhbHVlLFxuICAgICAgfSksXG4gICAgICBsYXN0bmFtZTogRm9ybS5jcmVhdGVGb3JtRmllbGQoe1xuICAgICAgICAuLi5wcm9wcy5sYXN0bmFtZSxcbiAgICAgICAgdmFsdWU6IHByb3BzLmxhc3RuYW1lLnZhbHVlLFxuICAgICAgfSksXG4gICAgfVxuICB9LFxuICBvblZhbHVlc0NoYW5nZShfLCB2YWx1ZXMpIHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG4gIH0sXG59KShjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZ2V0RmllbGREZWNvcmF0b3IgfSA9IHByb3BzLmZvcm1cblxuICBjb25zdCBpbnB1dENoYW5nZUZ1bmMgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgaW5wdXRDaGFuZ2UgfSA9IHByb3BzXG4gICAgY29uc3QgeyBpZCwgdGl0bGUsIHZhbHVlIH0gPSBlLnRhcmdldFxuICAgIGlucHV0Q2hhbmdlKHRpdGxlLCBpZCwgdmFsdWUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJVc2VybmFtZVwiPlxuICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3VzZXJuYW1lJywge1xuICAgICAgICAgIHJ1bGVzOiBbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1VzZXJuYW1lIGlzIHJlcXVpcmVkIScgfV0sXG4gICAgICAgIH0pKDxJbnB1dCAvPil9XG4gICAgICA8L0Zvcm1JdGVtPlxuICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJQYXNzd29yZFwiPlxuICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3Bhc3N3b3JkJywge1xuICAgICAgICAgIHJ1bGVzOiBbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkIScgfV0sXG4gICAgICAgIH0pKDxJbnB1dCAvPil9XG4gICAgICA8L0Zvcm1JdGVtPlxuICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtSXRlbUxheW91dH0gbGFiZWw9XCJMYXN0IE5hbWVcIj5cbiAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdsYXN0bmFtZScsIHtcbiAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIGxhc3RuYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvbkNoYW5nZTogaW5wdXRDaGFuZ2VGdW5jLFxuICAgICAgICB9KSg8SW5wdXQgdGl0bGU9XCJwcm9maWxlXCIgcGxhY2Vob2xkZXI9XCJQbGVhc2UgaW5wdXQgeW91ciBuYW1lXCIgLz4pfVxuICAgICAgPC9Gb3JtSXRlbT5cbiAgICA8L2Rpdj5cbiAgKVxufSkpXG5cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIHVzZXJuYW1lOiB7XG4gICAgICAgIHZhbHVlOiAncGFuZ3BvbmQnLFxuICAgICAgfSxcbiAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgIH0sXG4gICAgICBsYXN0bmFtZToge1xuICAgICAgICB2YWx1ZTogJycsXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbiAgaGFuZGxlRm9ybUNoYW5nZSA9IChjaGFuZ2VkRmllbGRzKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWVsZHM6IHsgLi4udGhpcy5zdGF0ZS5maWVsZHMsIC4uLmNoYW5nZWRGaWVsZHMgfSxcbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBmaWVsZHMgPSB0aGlzLnN0YXRlLmZpZWxkc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q3VzdG9taXplZEZvcm0gey4uLmZpZWxkc30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gLz5cbiAgICAgICAgPHByZSBjbGFzc05hbWU9XCJsYW5ndWFnZS1iYXNoXCI+e0pTT04uc3RyaW5naWZ5KGZpZWxkcywgbnVsbCwgMil9PC9wcmU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVxuXG4vLyBleHBvcnQgZGVmYXVsdCBGb3JtLmNyZWF0ZSgpKEFudClcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShQcm9maWxlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb3JtL1Byb2ZpbGUuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQUE7QUFFQTtBQUVBO0FBSkE7O0FBTUE7QUFFQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBVkE7QUFjQTtBQXBCQTtBQXFCQTtBQXJCQTtBQUNBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUlBO0FBR0E7QUFKQTtBQUlBO0FBTkE7QUFPQTtBQUlBO0FBSkE7QUFBQTtBQTdCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0E7QUFGQTs7QUFLQTtBQUZBOzs7QUFHQTtBQVBBO0FBREE7QUFhQTtBQUNBO0FBQUE7Ozs7OztBQUlBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9