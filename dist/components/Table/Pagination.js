"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable jsx-a11y/accessible-emoji */

const Pagination = _ref => {
  let {
    activePage,
    count,
    rowsPerPage,
    totalPages,
    setActivePage,
    setSort,
    setFilters
  } = _ref;
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;
  const clearAll = () => {
    setSort({
      order: 'asc',
      orderBy: 'id'
    });
    setActivePage(1);
    setFilters({});
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "paginate-page"
  }, "Page ", activePage, " of ", totalPages), /*#__PURE__*/_react.default.createElement("p", {
    className: "paginate-row"
  }, "Rows: ", beginning === end ? end : `${beginning} - ${end}`, " of ", count), /*#__PURE__*/_react.default.createElement("div", {
    className: "paginate-arrow"
  }, /*#__PURE__*/_react.default.createElement("button", {
    disabled: activePage === 1,
    onClick: () => setActivePage(1)
  }, "First"), /*#__PURE__*/_react.default.createElement("button", {
    disabled: activePage === 1,
    onClick: () => setActivePage(activePage - 1)
  }, "Previous"), /*#__PURE__*/_react.default.createElement("button", {
    disabled: activePage === totalPages,
    onClick: () => setActivePage(activePage + 1)
  }, "Next"), /*#__PURE__*/_react.default.createElement("button", {
    disabled: activePage === totalPages,
    onClick: () => setActivePage(totalPages)
  }, "Last"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: clearAll
  }, "Clear all")));
};
exports.Pagination = Pagination;