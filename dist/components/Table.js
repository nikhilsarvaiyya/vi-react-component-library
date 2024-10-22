"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _helpers = require("./Table/helpers");
var _Formatters = require("./Table/Formatters");
var _Pagination = require("./Table/Pagination");
const VITable = _ref => {
  let {
    columns,
    rows
  } = _ref;
  const [activePage, setActivePage] = (0, _react.useState)(1);
  const [filters, setFilters] = (0, _react.useState)({});
  const [sort, setSort] = (0, _react.useState)({
    order: 'asc',
    orderBy: 'id'
  });
  const rowsPerPage = 5;
  const filteredRows = (0, _react.useMemo)(() => (0, _helpers.filterRows)(rows, filters), [rows, filters]);
  const sortedRows = (0, _react.useMemo)(() => (0, _helpers.sortRows)(filteredRows, sort), [filteredRows, sort]);
  const calculatedRows = (0, _helpers.paginateRows)(sortedRows, activePage, rowsPerPage);
  const count = filteredRows.length;
  const totalPages = Math.ceil(count / rowsPerPage);
  const handleSearch = (value, accessor) => {
    setActivePage(1);
    if (value) {
      setFilters(prevFilters => ({
        ...prevFilters,
        [accessor]: value
      }));
    } else {
      setFilters(prevFilters => {
        const updatedFilters = {
          ...prevFilters
        };
        delete updatedFilters[accessor];
        return updatedFilters;
      });
    }
  };
  const handleSort = accessor => {
    setActivePage(1);
    setSort(prevSort => ({
      order: prevSort.order === 'asc' && prevSort.orderBy === accessor ? 'desc' : 'asc',
      orderBy: accessor
    }));
  };
  const clearAll = () => {
    setSort({
      order: 'asc',
      orderBy: 'id'
    });
    setActivePage(1);
    setFilters({});
  };
  const formatData = (data, row, column) => {
    let localStyle = {};
    let setValue = "NA";
    let dataValue = data || "NA";
    let validation = column?.validation;
    switch (column?.validation?.type) {
      case 'number':
        localStyle = {
          textAlign: "right"
        };
        setValue = (0, _Formatters.Number)(dataValue, validation);
        break;
      case 'image':
        localStyle = {
          position: "relative"
        };
        setValue = (0, _Formatters.Image)(dataValue, validation);
        break;
      case 'boolean':
        setValue = (0, _Formatters.Boolen)(dataValue, validation);
        break;
      case 'date':
        setValue = (0, _Formatters.DateFormat)(dataValue, validation);
        break;
      case 'email':
        setValue = (0, _Formatters.Email)(dataValue, validation);
        break;
      case 'progress':
        setValue = (0, _Formatters.ProgressBar)(dataValue);
        break;
      default:
        setValue = dataValue;
        break;
    }

    // TD Cell Style
    let tdStyle = {};
    let isStyleAvailable = row?.cellStyle?.filter((row, i) => row.name === column.accessor)[0];
    if (isStyleAvailable?.style) {
      tdStyle = isStyleAvailable?.style;
    }
    return /*#__PURE__*/React.createElement("td", {
      className: `${row.sortColorClass}`,
      style: {
        ...localStyle,
        ...row.rowStyle,
        ...column?.style,
        ...tdStyle
      },
      key: column.accessor
    }, setValue);
  };
  let setSortColor = (row, column) => {
    if (sort.orderBy === column.accessor) {
      console.log(column.accessor);
      row.sortColorClass = "sorting-color";
    } else {
      row.sortColorClass = "remove-sorting-color";
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "vi-table-header"
  }, /*#__PURE__*/React.createElement("h1", null, "VNI Table"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
    onClick: () => alert("Download")
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined "
  }, " download ")), /*#__PURE__*/React.createElement("li", {
    onClick: () => alert("Upload")
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined "
  }, " upload ")), /*#__PURE__*/React.createElement("li", {
    onClick: () => alert("Print")
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined "
  }, " print ")), /*#__PURE__*/React.createElement("li", {
    onClick: () => alert("Refresh")
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined "
  }, " refresh ")))), /*#__PURE__*/React.createElement("table", {
    className: "vi-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((column, i) => {
    if (column?.visible === false) {
      return;
    }
    const sortIcon = () => {
      if (column.accessor === sort.orderBy) {
        if (sort.order === 'asc') {
          return /*#__PURE__*/React.createElement("h1", null, "\u2191 ");
        }
        return /*#__PURE__*/React.createElement("h1", null, "\u2193 ");
      } else {
        return /*#__PURE__*/React.createElement("h1", null, "\u2666 ");
      }
    };
    return /*#__PURE__*/React.createElement("th", {
      key: column.accessor
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        flex: "auto",
        marginRight: "14px"
      }
    }, column.label, " "), /*#__PURE__*/React.createElement("button", {
      className: "vi-icon-button",
      onClick: () => handleSort(column.accessor)
    }, sortIcon())));
  })), /*#__PURE__*/React.createElement("tr", null, columns.map((column, i) => {
    if (column?.visible === false) {
      return;
    }
    return /*#__PURE__*/React.createElement("th", {
      key: i
    }, /*#__PURE__*/React.createElement("input", {
      key: `${column.accessor}-search`,
      type: "search",
      placeholder: `Search ${column.label}`,
      value: filters[column.accessor],
      onChange: event => handleSearch(event.target.value, column.accessor)
    }));
  }))), /*#__PURE__*/React.createElement("tbody", null, calculatedRows.map(row => {
    return /*#__PURE__*/React.createElement("tr", {
      key: row.id
    }, columns.map(column => {
      if (column?.visible === false) {
        return;
      }
      setSortColor(row, column);
      return formatData(row[column.accessor], row, column);
    }));
  }), count === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      padding: "20px"
    }
  }, "No data found") : "")), /*#__PURE__*/React.createElement("div", {
    className: "pagination"
  }, count > 0 ? /*#__PURE__*/React.createElement(_Pagination.Pagination, {
    activePage: activePage,
    count: count,
    rowsPerPage: rowsPerPage,
    totalPages: totalPages,
    setActivePage: setActivePage,
    setSort: setSort,
    setFilters: setFilters
  }) : /*#__PURE__*/React.createElement("button", {
    style: {
      float: "right"
    },
    onClick: clearAll
  }, "Reset all")));
};
var _default = exports.default = VITable; // Sort Order BG color
// Hidden Column
// Progress
// Prepend And Postpend
// ------------Formatter
// Date
// Image
// Boolean
// --------------Style
// rowStyle
// cellStyle
// column Style