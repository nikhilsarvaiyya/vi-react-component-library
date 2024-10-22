/* eslint-disable jsx-a11y/accessible-emoji */

export const Pagination = ({ activePage, count, rowsPerPage, totalPages, setActivePage, setSort, setFilters }) => {
    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
    const end = activePage === totalPages ? count : beginning + rowsPerPage - 1
  
    const clearAll = () => {
      setSort({ order: 'asc', orderBy: 'id' })
      setActivePage(1)
      setFilters({})
    }
    return (
      <>
      
        <p className="paginate-page">
          Page {activePage} of {totalPages}
        </p>
        <p className="paginate-row">
          Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}
        </p>
        
        <div className="paginate-arrow">
          <button disabled={activePage === 1} onClick={() => setActivePage(1)}>
             First
          </button>
          <button disabled={activePage === 1} onClick={() => setActivePage(activePage - 1)}>
             Previous
          </button>
          <button disabled={activePage === totalPages} onClick={() => setActivePage(activePage + 1)}>
            Next 
          </button>
          <button disabled={activePage === totalPages} onClick={() => setActivePage(totalPages)}>
            Last 
            {/* <DoubleRight fillColor="green" size="14" /> */}
          </button>
          <button onClick={clearAll}>Clear all</button>
        </div>
        
       
      </>
    )
  }
  