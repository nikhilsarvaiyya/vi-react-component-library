"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const VIBadge = props => {
  let count = props.count > 9 ? "9+" : props.count;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    className: "vi-button vi-button-tip",
    type: "button"
  }, props.label, " ", /*#__PURE__*/_react.default.createElement("span", null, count)));
};
var _default = exports.default = VIBadge;