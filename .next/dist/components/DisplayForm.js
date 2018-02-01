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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pangpond/Sites/Nextgensoft/admission/components/DisplayForm.js';


var DisplayForm = function (_Component) {
  (0, _inherits3.default)(DisplayForm, _Component);

  function DisplayForm() {
    (0, _classCallCheck3.default)(this, DisplayForm);

    return (0, _possibleConstructorReturn3.default)(this, (DisplayForm.__proto__ || (0, _getPrototypeOf2.default)(DisplayForm)).apply(this, arguments));
  }

  (0, _createClass3.default)(DisplayForm, [{
    key: 'render',
    value: function render() {
      var state = this.props.state;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_reactBootstrap.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('pre', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, (0, _stringify2.default)(state, null, 2)))));
    }
  }]);

  return DisplayForm;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(DisplayForm);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGlzcGxheUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb2wiLCJSb3ciLCJjb25uZWN0IiwiRGlzcGxheUZvcm0iLCJzdGF0ZSIsInByb3BzIiwibWFwU3RhdGVUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFLOztBQUNkLEFBQVM7Ozs7Ozs7SUFFSCxBOzs7Ozs7Ozs7Ozs2QkFDSztVQUFBLEFBQ0MsUUFBVSxLQURYLEFBQ2dCLE1BRGhCLEFBQ0MsQUFDUjs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHFDQUFJLElBQUwsQUFBUyxHQUFHLFVBQVosQUFBc0I7b0JBQXRCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxrQ0FBTSxBQUFlLE9BQWYsQUFBc0IsTUFKcEMsQUFDRSxBQUNFLEFBQ0UsQUFDRSxBQUFNLEFBQTRCLEFBSzNDOzs7OztBQVp1QixBOztBQWUxQixJQUFNLGtCQUFrQixTQUFsQixBQUFrQix1QkFBQTs7V0FBQSxBQUFVO0FBQUEsQUFDaEM7QUFERixBQUlBOztrQkFBZSx5QkFBQSxBQUFRLGlCQUF2QixBQUFlLEFBQXlCIiwiZmlsZSI6IkRpc3BsYXlGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW5ncG9uZC9TaXRlcy9OZXh0Z2Vuc29mdC9hZG1pc3Npb24ifQ==