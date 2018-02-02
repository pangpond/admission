'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

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

var _Profile = require('../components/Form/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _Address = require('../components/Form/Address');

var _Address2 = _interopRequireDefault(_Address);

var _UI = require('../components/Form/UI');

var _UI2 = _interopRequireDefault(_UI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/admission/components/StudentProfile.js';


var StudentProfile = function (_Component) {
  (0, _inherits3.default)(StudentProfile, _Component);

  function StudentProfile() {
    (0, _classCallCheck3.default)(this, StudentProfile);

    return (0, _possibleConstructorReturn3.default)(this, (StudentProfile.__proto__ || (0, _getPrototypeOf2.default)(StudentProfile)).apply(this, arguments));
  }

  (0, _createClass3.default)(StudentProfile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_UI2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }));
    }
  }]);

  return StudentProfile;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    inputChange: (0, _redux.bindActionCreators)(_actions.inputChange, dispatch)
  };
};

exports.default = _form2.default.create()((0, _reactRedux.connect)(null, mapDispatchToProps)(StudentProfile));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3R1ZGVudFByb2ZpbGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiaW5wdXRDaGFuZ2UiLCJQcm9maWxlIiwiQWRkcmVzcyIsIlVJIiwiU3R1ZGVudFByb2ZpbGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBUzs7QUFjVCxBQUFTLEFBQW1COztBQUU1QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBUTs7Ozs7Ozs7O0lBRVQsQTs7Ozs7Ozs7Ozs7NkJBQ0ssQUFDUDs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUZKLEFBQ0UsQUFDRSxBQUtMO0FBTEs7QUFBQTs7Ozs7QUFKcUIsQTs7QUFZN0IsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsNkJBQUE7O2lCQUNaLEFBQW1CLHFEQURQLEFBQWEsQUFDekIsQUFBZ0M7QUFEUCxBQUN0QztBQURGLEFBSUE7O2tCQUFlLGVBQUEsQUFBSyxTQUFTLHlCQUFBLEFBQVEsTUFBUixBQUFjLG9CQUEzQyxBQUFlLEFBQWMsQUFBa0MiLCJmaWxlIjoiU3R1ZGVudFByb2ZpbGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2FkbWlzc2lvbiJ9