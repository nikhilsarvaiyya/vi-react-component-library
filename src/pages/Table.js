
import rows from '../assets/js/row'
import column from '../assets/js/column';
import actions from '../assets/js/actions';
import { VITable } from '../lib'

const Table = () => {
  return (
    <>
      <VITable  rows={rows} columns={column} actions={actions} />
    </>

  )
}

export default Table