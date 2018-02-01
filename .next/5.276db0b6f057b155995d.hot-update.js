webpackHotUpdate(5,{

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = __webpack_require__(438);

var _form2 = _interopRequireDefault(_form);

var _button = __webpack_require__(419);

var _button2 = _interopRequireDefault(_button);

var _checkbox = __webpack_require__(487);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _input = __webpack_require__(492);

var _input2 = _interopRequireDefault(_input);

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

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

var _select = __webpack_require__(497);

var _select2 = _interopRequireDefault(_select);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(566);

var _redux = __webpack_require__(555);

var _actions = __webpack_require__(770);

var _InputAnt = __webpack_require__(778);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/pangpond/Sites/Nextgensoft/admission/components/Ant.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pangpond/Sites/Nextgensoft/admission/components/Ant.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yNzZkYjBiNmYwNTdiMTU1OTk1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BbnQuanM/N2I0MjExYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBGb3JtLFxuICBJbnB1dCxcbiAgQ2hlY2tib3gsXG4gIFNlbGVjdCxcbiAgSW5wdXROdW1iZXIsXG4gIERhdGVQaWNrZXIsXG4gIFN3aXRjaCxcbiAgU2xpZGVyLFxuICBCdXR0b24sXG4gIExvY2FsZVByb3ZpZGVyLFxufSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCB7IGlucHV0Q2hhbmdlIH0gZnJvbSAnLi4vYWN0aW9ucydcblxuaW1wb3J0IElucHV0U3RhdGUgZnJvbSAnLi4vaGFuZGxlcnMvSW5wdXRBbnQnXG5cbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXG5cbmNvbnN0IGZvcm1JdGVtTGF5b3V0ID0ge1xuICBsYWJlbENvbDogeyBzcGFuOiA0IH0sXG4gIHdyYXBwZXJDb2w6IHsgc3BhbjogOCB9LFxufVxuY29uc3QgZm9ybVRhaWxMYXlvdXQgPSB7XG4gIGxhYmVsQ29sOiB7IHNwYW46IDQgfSxcbiAgd3JhcHBlckNvbDogeyBzcGFuOiA4LCBvZmZzZXQ6IDQgfSxcbn1cblxuY2xhc3MgQW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgY2hlY2tOaWNrOiBmYWxzZSxcbiAgfVxuICBjaGVjayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmZvcm0udmFsaWRhdGVGaWVsZHMoKGVyciwgdmFsKSA9PiB7XG4gICAgICBpZiAoIWVycikge1xuICAgICAgICBjb25zb2xlLmluZm8oJ3N1Y2Nlc3MnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBjaGVja05pY2s6IGUudGFyZ2V0LmNoZWNrZWQsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmZvcm0udmFsaWRhdGVGaWVsZHMoWyduaWNrbmFtZSddLCB7IGZvcmNlOiB0cnVlIH0pXG4gICAgICB9LFxuICAgIClcbiAgfVxuICBpbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBpbnB1dENoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaWQsIHRpdGxlLCB2YWx1ZSB9ID0gZS50YXJnZXRcbiAgICBpbnB1dENoYW5nZSh0aXRsZSwgaWQsIHZhbHVlKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGdldEZpZWxkRGVjb3JhdG9yIH0gPSB0aGlzLnByb3BzLmZvcm1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgey8qXG4gICAgICAgICAgPElucHV0U3RhdGVcbiAgICAgICAgICBjb250cm9sTGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICBjb250cm9sR3JvdXA9XCJQcm9maWxlXCJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2UgaW5wdXQgeW91ciBuYW1lXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgICA8SW5wdXRTdGF0ZVxuICAgICAgICAgIGNvbnRyb2xMYWJlbD1cIk5pY2tuYW1lXCJcbiAgICAgICAgICBjb250cm9sR3JvdXA9XCJQcm9maWxlXCJcbiAgICAgICAgICBuYW1lPVwibmlja25hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGlucHV0IHlvdXIgbmlja25hbWVcIlxuICAgICAgICAgIHJlcXVpcmVkPXt0aGlzLnN0YXRlLmNoZWNrTmlja31cbiAgICAgICAgLz4gKi99XG4gICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiTmFtZVwiPlxuICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndXNlcm5hbWUnLCB7XG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIG5hbWUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLmlucHV0Q2hhbmdlLFxuICAgICAgICAgIH0pKDxJbnB1dCB0aXRsZT1cInByb2ZpbGVcIiBwbGFjZWhvbGRlcj1cIlBsZWFzZSBpbnB1dCB5b3VyIG5hbWVcIiAvPil9XG4gICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgIDxGb3JtSXRlbSB7Li4uZm9ybUl0ZW1MYXlvdXR9IGxhYmVsPVwiTmlja25hbWVcIj5cbiAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ25pY2tuYW1lJywge1xuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0aGlzLnN0YXRlLmNoZWNrTmljayxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgbmlja25hbWUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLmlucHV0Q2hhbmdlLFxuICAgICAgICAgICAgdGl0bGU6ICdwcm9maWxlJyxcbiAgICAgICAgICB9KSg8SW5wdXQgdGl0bGU9XCJwcm9maWxlXCIgcGxhY2Vob2xkZXI9XCJQbGVhc2UgaW5wdXQgeW91ciBuaWNrbmFtZVwiIC8+KX1cbiAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtVGFpbExheW91dH0+XG4gICAgICAgICAgPENoZWNrYm94IHZhbHVlPXt0aGlzLnN0YXRlLmNoZWNrTmlja30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgIE5pY2tuYW1lIGlzIHJlcXVpcmVkXG4gICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgPEZvcm1JdGVtIHsuLi5mb3JtVGFpbExheW91dH0+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuY2hlY2t9PlxuICAgICAgICAgICAgQ2hlY2tcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBpbnB1dENoYW5nZTogYmluZEFjdGlvbkNyZWF0b3JzKGlucHV0Q2hhbmdlLCBkaXNwYXRjaCksXG59KVxuXG4vLyBleHBvcnQgZGVmYXVsdCBGb3JtLmNyZWF0ZSgpKEFudClcbmV4cG9ydCBkZWZhdWx0IEZvcm0uY3JlYXRlKCkoY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFudCkpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FudC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQWdCQTtBQWhCQTtBQUFBO0FBZ0JBO0FBQ0E7QUFEQTtBQUNBOztBQUlBO0FBR0E7QUFKQTtBQUlBO0FBTkE7QUFPQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUdBO0FBSUE7QUFKQTtBQUlBO0FBQ0E7QUFQQTtBQVFBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFNQTs7Ozs7OztBQUdBOztBQUNBO0FBQUE7QUFEQTtBQUNBO0FBSUE7QUFBQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9