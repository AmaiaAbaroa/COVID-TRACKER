import DataTable from "react-data-table-component-with-filter";

const TableAtom = (props) => {
  return (
    <DataTable
      data={props.data}
      columns={props.columns}
      pagination
      highlightOnHover
      responsive
    />
  );
};

export default TableAtom;
