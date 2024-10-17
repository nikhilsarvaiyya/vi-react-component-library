"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const VITable = props => {
  console.log(props);
  return /*#__PURE__*/_react.default.createElement("table", {
    className: `vi-table ${props.size} ${props.type}`
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "1 header"), /*#__PURE__*/_react.default.createElement("th", null, "1 header"), /*#__PURE__*/_react.default.createElement("th", null, "1 header")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "1 data"), /*#__PURE__*/_react.default.createElement("td", null, "1 data"), /*#__PURE__*/_react.default.createElement("td", null, "1 data")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "2 data"), /*#__PURE__*/_react.default.createElement("td", null, "2 data"), /*#__PURE__*/_react.default.createElement("td", null, "2 data")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "3 data"), /*#__PURE__*/_react.default.createElement("td", null, "3 data"), /*#__PURE__*/_react.default.createElement("td", null, "3 data")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "4 data"), /*#__PURE__*/_react.default.createElement("td", null, "4 data"), /*#__PURE__*/_react.default.createElement("td", null, "4 data")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "5 data"), /*#__PURE__*/_react.default.createElement("td", null, "5 data"), /*#__PURE__*/_react.default.createElement("td", null, "5 data")));
};
var _default = exports.default = VITable;