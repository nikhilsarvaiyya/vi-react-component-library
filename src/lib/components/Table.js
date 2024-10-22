import React, { useState, useMemo } from 'react'
import { sortRows, filterRows, paginateRows } from './Table/helpers';
import { DateFormat, Image, Boolen, ProgressBar, Number,Email} from './Table/Formatters'
import { Pagination } from './Table/Pagination'

const VITable = ({ columns, rows }) => {
  const [activePage, setActivePage] = useState(1)
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' })
  const rowsPerPage = 5

  const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters])
  const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage)

  const count = filteredRows.length
  const totalPages = Math.ceil(count / rowsPerPage)

  const handleSearch = (value, accessor) => {
    setActivePage(1)

    if (value) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [accessor]: value,
      }))
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters }
        delete updatedFilters[accessor]

        return updatedFilters
      })
    }
  }

  const handleSort = (accessor) => {
    setActivePage(1)
    setSort((prevSort) => ({
      order: prevSort.order === 'asc' && prevSort.orderBy === accessor ? 'desc' : 'asc',
      orderBy: accessor,
    }))
  }

  const clearAll = () => {
    setSort({ order: 'asc', orderBy: 'id' })
    setActivePage(1)
    setFilters({})
  }

  const formatData = (data, row, column) => {
    let localStyle = {};
    let setValue = "NA";
    let dataValue = data || "NA";

    let validation = column?.validation
   
    switch (column?.validation?.type) {
      case 'number':
        localStyle = { textAlign: "right" }
        setValue = Number(dataValue,validation)
        break;
      case 'image':
        localStyle = { position: "relative" }
        setValue = Image(dataValue,validation)
        break;
      case 'boolean':
        setValue = Boolen(dataValue,validation)
        break;
      case 'date':
        setValue = DateFormat(dataValue, validation)
        break;
      case 'email':
        setValue = Email(dataValue, validation)
        break;
      case 'progress':
        setValue = ProgressBar(dataValue)
        break;
      default:
        setValue = dataValue
        break;
    }

    // TD Cell Style
    let tdStyle = {}
    
    let isStyleAvailable = row?.cellStyle?.filter((row,i) => row.name === column.accessor)[0];
    
    if(isStyleAvailable?.style){
      tdStyle = isStyleAvailable?.style
    }
    
    return <td className={`${row.sortColorClass}`} style={{ ...localStyle,...row.rowStyle,...column?.style,...tdStyle  }} key={column.accessor}>{setValue}</td>
  }

  let setSortColor = (row, column) => {
    if(sort.orderBy === column.accessor){
        row.sortColorClass = "sorting-color"
      } else {
        row.sortColorClass = "remove-sorting-color"
      }
  }
  
  return (
    <>
      <div className='vi-table-header' >
            <h1 >VNI Table</h1>
            <ul>
                <li onClick={() => alert("Download")} ><span className="material-symbols-outlined "> download </span></li>
                <li onClick={() => alert("Upload")}><span className="material-symbols-outlined "> upload </span></li>
                <li onClick={() => alert("Print")}><span className="material-symbols-outlined "> print </span></li>
                <li onClick={() => alert("Refresh")}><span className="material-symbols-outlined "> refresh </span></li>
            </ul>
        </div>
      <table className='vi-table'>
        <thead>
          <tr>
            {columns.map((column,i) => {
              if(column?.visible === false){
                return
              }
              const sortIcon = () => {
                if (column.accessor === sort.orderBy) {
                  if (sort.order === 'asc') {
                    
                    return <h1 >&uarr; </h1>
                  }
                  return <h1 >&#8595; </h1>
                } else {
                  return <h1 >&#9830; </h1>
                }
              }
              return (
              <th key={column.accessor}>
                <div style={{ display: "flex" }}>
                  <label style={{ flex: "auto", marginRight: "14px" }}  >{column.label} </label>
                  <button className='vi-icon-button' onClick={() => handleSort(column.accessor)}>{sortIcon()}</button>
              </div>
              </th>
               )
            })}
          </tr>
          <tr>
            {columns.map((column,i) => {
              if(column?.visible === false){
                return
              }
              return (
                <th key={i}>
                  <input
                    key={`${column.accessor}-search`}
                    type="search"
                    placeholder={`Search ${column.label}`}
                    value={filters[column.accessor]}
                    onChange={(event) => handleSearch(event.target.value, column.accessor)}
                  />
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {calculatedRows.map((row) => {
            
            return (
              <tr key={row.id}>
                {columns.map((column) => {
                  if(column?.visible === false){
                    return
                  }
                  setSortColor(row,column)
                  return formatData(row[column.accessor], row, column)
                })}
              </tr>
            )
          })}
          {count ===  0 ?  <p style={{padding:"20px"}}>No data found</p> : ""}
        </tbody>
      </table>

      <div className="pagination">
      {count >  0 ? 
        <Pagination
          activePage={activePage}
          count={count}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          setActivePage={setActivePage}
          setSort={setSort}
          setFilters={setFilters}
          
        />
      : <button style={{float:"right"}} onClick={clearAll}>Reset all</button>}
      </div>
      
    </>
  )
}

export default VITable


// Sort Order BG color
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