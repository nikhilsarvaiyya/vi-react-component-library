"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Boolen = Boolen;
exports.DateFormat = DateFormat;
exports.Email = Email;
exports.Image = Image;
exports.Number = Number;
exports.ProgressBar = ProgressBar;
var _react = _interopRequireDefault(require("react"));
var _helpers = require("./helpers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function DateFormat(date, validation) {
  let formatted = "NA";
  const today = new Date(date);
  if (today == "Invalid Date") {
    return formatted;
  }
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // month is zero-based
  let dd = today.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  let club = "";
  switch (validation?.input) {
    case 'dd-mm-yy':
      club = dd + '-' + mm + '-' + yyyy;
      break;
    case 'dd/mm/yy':
      club = dd + '/' + mm + '/' + yyyy;
      break;
    case 'dd:mm:yy':
      club = dd + ':' + mm + ':' + yyyy;
      break;
    case 'mm-dd-yy':
      club = mm + '-' + dd + '-' + yyyy;
      break;
    case 'mm/dd/yy':
      club = mm + '/' + dd + '/' + yyyy;
      break;
    case 'mm:dd:yy':
      club = mm + ':' + dd + ':' + yyyy;
      break;
    case 'yy-mm-dd':
      club = yyyy + '-' + mm + '-' + dd;
      break;
    case 'yy/mm/dd':
      club = yyyy + '/' + mm + '/' + dd;
      break;
    case 'yy:mm:dd':
      club = yyyy + ':' + mm + ':' + dd;
      break;
    default:
      club = dd + '/' + mm + '/' + yyyy;
      break;
  }
  formatted = club;
  return formatted;
}
function Image(image) {
  return /*#__PURE__*/_react.default.createElement("img", {
    alt: image,
    title: image,
    src: image,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      height: "30px"
    }
  });
}
function Boolen(value, validation) {
  return value;
}
function Email(value, validation) {
  return /*#__PURE__*/_react.default.createElement("a", {
    href: `mailto:${value}?subject=${validation?.subject}&body=${validation?.body}`
  }, value);
}
function Number(value, validation) {
  let prepand = validation?.prepand || "";
  let append = validation?.append || "";
  if ((0, _helpers.isNumber)(value)) {
    let val = /*#__PURE__*/_react.default.createElement("p", null, prepand, " ", value.toString(), " ", append);
    return val;
  }
}
function ProgressBar(value) {
  if ((0, _helpers.isNumber)(value)) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "vi-progress"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "vi-progress-bar"
    }, /*#__PURE__*/_react.default.createElement("p", {
      style: {
        width: value + "%"
      }
    }, "\xA0")), /*#__PURE__*/_react.default.createElement("span", null, value.toString(), "%"));
  }
}