"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "paginate-page"
  }, "Page ", activePage, " of ", totalPages), /*#__PURE__*/React.createElement("p", {
    className: "paginate-row"
  }, "Rows: ", beginning === end ? end : `${beginning} - ${end}`, " of ", count), /*#__PURE__*/React.createElement("div", {
    className: "paginate-arrow"
  }, /*#__PURE__*/React.createElement("button", {
    disabled: activePage === 1,
    onClick: () => setActivePage(1)
  }, "First"), /*#__PURE__*/React.createElement("button", {
    disabled: activePage === 1,
    onClick: () => setActivePage(activePage - 1)
  }, "Previous"), /*#__PURE__*/React.createElement("button", {
    disabled: activePage === totalPages,
    onClick: () => setActivePage(activePage + 1)
  }, "Next"), /*#__PURE__*/React.createElement("button", {
    disabled: activePage === totalPages,
    onClick: () => setActivePage(totalPages)
  }, "Last"), /*#__PURE__*/React.createElement("button", {
    onClick: clearAll
  }, "Clear all")));
};
exports.Pagination = Pagination;