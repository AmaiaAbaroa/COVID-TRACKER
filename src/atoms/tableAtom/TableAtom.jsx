import DataTable, { createTheme } from "react-data-table-component-with-filter";
import 'styled-components'
import './_tableAtom.css'

const TableAtom = (props) => {
  return (
    <DataTable
      data={props.data}
      columns={props.columns}
      pagination
    />
  );
};

export default TableAtom;
