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
          lineNumber: 25
        }
      }, _react2.default.createElement(_Profile2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement(_Address2.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3R1ZGVudFByb2ZpbGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiaW5wdXRDaGFuZ2UiLCJQcm9maWxlIiwiQWRkcmVzcyIsIlN0dWRlbnRQcm9maWxlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQVM7O0FBY1QsQUFBUyxBQUFtQjs7QUFFNUIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBYTs7Ozs7Ozs7O0lBRWQsQTs7Ozs7Ozs7Ozs7NkJBQ0ssQUFDUDs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBSEosQUFDRSxBQUVFLEFBR0w7QUFISztBQUFBOzs7OztBQUxxQixBOztBQVc3QixJQUFNLHFCQUFxQixTQUFyQixBQUFxQiw2QkFBQTs7aUJBQ1osQUFBbUIscURBRFAsQUFBYSxBQUN6QixBQUFnQztBQURQLEFBQ3RDO0FBREYsQUFJQTs7a0JBQWUsZUFBQSxBQUFLLFNBQVMseUJBQUEsQUFBUSxNQUFSLEFBQWMsb0JBQTNDLEFBQWUsQUFBYyxBQUFrQyIsImZpbGUiOiJTdHVkZW50UHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFuZ3BvbmQvU2l0ZXMvTmV4dGdlbnNvZnQvYWRtaXNzaW9uIn0=