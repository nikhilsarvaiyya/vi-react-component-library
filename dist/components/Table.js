"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function myFunction(event, a) {
  console.log(event.target.matches, a);
  document.getElementById(a).classList.toggle("show");
  if (!event.target.matches('.' + a + '.dropbtn')) {
    var dropdowns = document.getElementsByClassName(a);
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
const objTh = entries => Object.entries(entries).map((thEntry, i) => {
  return /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    style: {
      flex: "auto"
    }
  }, thEntry[0], " "), /*#__PURE__*/_react.default.createElement("span", {
    class: "material-symbols-outlined vi-tune-icon"
  }, " tune ")));
});
const objTD = entries => Object.entries(entries).map((tdEntry, i) => {
  return typeof tdEntry[1] == 'object' ? /*#__PURE__*/_react.default.createElement("td", null, nestedTable(tdEntry[1])) : /*#__PURE__*/_react.default.createElement("td", null, tdEntry[1]);
});
const listObj = entries => Object.entries(entries).map((li, i) => {
  console.log(li[1], typeof li[1]);
  return /*#__PURE__*/_react.default.createElement("tr", null, objTD(li));
});
let nestedTable = data => {
  let trBody = listObj(data);
  return /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, trBody));
};
const VITable = props => {
  let trHead = objTh(props.tableBody[0]);
  let actionList = props.tableAction.map((act, i) => {
    return /*#__PURE__*/_react.default.createElement("a", {
      href: "#home"
    }, act.name);
  });
  let trBody = props.tableBody.map((tr, i) => {
    return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
      className: "fixed-first"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox"
    })), objTD(tr), /*#__PURE__*/_react.default.createElement("td", {
      className: "fixed-last td-action",
      style: {
        display: "inline"
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      onClick: e => myFunction(e, "A" + i),
      className: `material-symbols-outlined vi-more-vert-icon dropbtn A${i}`
    }, " more_vert "), /*#__PURE__*/_react.default.createElement("div", {
      className: "dropdown"
    }, /*#__PURE__*/_react.default.createElement("div", {
      id: "A" + i,
      className: `dropdown-content A${i}`
    }, actionList))));
  });
  return /*#__PURE__*/_react.default.createElement("table", {
    className: `vi-table`
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    className: "fixed-first"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox"
  })), trHead, /*#__PURE__*/_react.default.createElement("th", {
    className: "fixed-last th-action"
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, trBody));
};
var _default = exports.default = VITable;