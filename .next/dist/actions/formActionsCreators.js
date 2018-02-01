'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputChange = undefined;

var _constants = require('../constants');

var inputChange = exports.inputChange = function inputChange(title, name, val) {
  return function (dispatch) {
    return dispatch({
      type: _constants.INPUT_VALUE,
      title: title,
      name: name,
      val: val
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvZm9ybUFjdGlvbnNDcmVhdG9ycy5qcyJdLCJuYW1lcyI6WyJJTlBVVF9WQUxVRSIsImlucHV0Q2hhbmdlIiwidGl0bGUiLCJuYW1lIiwidmFsIiwiZGlzcGF0Y2giLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBUyxBQUFtQixBQUU1Qjs7QUFBTyxJQUFNLG9DQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsT0FBRCxBQUFRLE1BQVIsQUFBYyxLQUFkO1NBQXNCLG9CQUFBOztBQUN0QyxBQUNELEFBQ047YUFGTyxBQUdQO1lBSE8sQUFJUDtXQUw2QyxBQUMvQyxBQUFTO0FBQUEsQUFDUCxLQURGO0FBRHlCO0FBQXBCIiwiZmlsZSI6ImZvcm1BY3Rpb25zQ3JlYXRvcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bhbmdwb25kL1NpdGVzL05leHRnZW5zb2Z0L2FkbWlzc2lvbiJ9