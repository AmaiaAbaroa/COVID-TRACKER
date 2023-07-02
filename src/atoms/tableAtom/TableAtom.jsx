import DataTable, { createTheme } from "react-data-table-component-with-filter";
import 'styled-components'
import './_tableAtom.css'

const TableAtom = (props) => {
  return (
    <div>
    <DataTable
      data={props.data}
      columns={props.columns}
      pagination
    />
    </div>
  );
};

export default TableAtom;
