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

var _Bird = require('../components/Bird');

var _Bird2 = _interopRequireDefault(_Bird);

var _Cat = require('../components/Cat');

var _Cat2 = _interopRequireDefault(_Cat);

var _DisplayForm = require('../components/DisplayForm');

var _DisplayForm2 = _interopRequireDefault(_DisplayForm);

var _StudentProfile = require('../components/StudentProfile');

var _StudentProfile2 = _interopRequireDefault(_StudentProfile);

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

var Admission = function (_Component) {
  (0, _inherits3.default)(Admission, _Component);

  function Admission() {
    (0, _classCallCheck3.default)(this, Admission);

    return (0, _possibleConstructorReturn3.default)(this, (Admission.__proto__ || (0, _getPrototypeOf2.default)(Admission)).apply(this, arguments));
  }

  (0, _createClass3.default)(Admission, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_index2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_DisplayForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement(_StudentProfile2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }));
    }
  }]);

  return Admission;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null)(Admission);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aFJlZHV4IiwiaW5pdFN0b3JlIiwiTGF5b3V0IiwiQW50IiwiQmlyZCIsIkNhdCIsIkRpc3BsYXlGb3JtIiwiU3R1ZGVudFByb2ZpbGUiLCJGb3JtSXRlbSIsIkl0ZW0iLCJPcHRpb24iLCJmb3JtSXRlbUxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJmb3JtVGFpbExheW91dCIsIm9mZnNldCIsIkFkbWlzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQWFoQixBQUFPOzs7O0FBRVAsQUFBUyxBQUFpQjs7QUFDMUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFvQjs7Ozs7Ozs7O0FBRTNCLElBQU0sV0FBVyxlQUFqQixBQUFzQjtBQUN0QixJQUFNLFNBQVMsaUJBQWYsQUFBc0I7O0FBRXRCLElBQU07WUFDTSxFQUFFLE1BRFMsQUFDWCxBQUFRLEFBQ2xCO2NBQVksRUFBRSxNQUZoQixBQUF1QixBQUVULEFBQVE7QUFGQyxBQUNyQjtBQUdGLElBQU07WUFDTSxFQUFFLE1BRFMsQUFDWCxBQUFRLEFBQ2xCO2NBQVksRUFBRSxNQUFGLEFBQVEsR0FBRyxRQUZ6QixBQUF1QixBQUVULEFBQW1CO0FBRlYsQUFDckI7O0lBSUksQTs7Ozs7Ozs7Ozs7NkJBQ0ssQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFJQTtBQUpBO0FBQUEsMEJBSUEsQUFBQzs7b0JBQUQ7c0JBTkosQUFDRSxBQUtFLEFBR0w7QUFISztBQUFBOzs7OztBQVJnQixBLEFBY3hCOztrQkFBZSxBQUFVLGtEQUFWLEFBQXFCLE1BQXBDLEFBQWUsQUFBMkIiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2FkbWlzc2lvbiJ9