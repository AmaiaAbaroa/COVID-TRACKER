import "./_table.css"
//import {useState, useEffect} from "react";
import DataTable, {createTheme} from "react-data-table-component-with-filter";
import UseFetch from "../../services/UseFetch";
import "styled-components";

const Table =() =>{

    const url = "https://disease.sh/v3/covid-19/";
    const { data } = UseFetch(url + "countries");
    console.log(data)

    const columns = [
        {
            name: 'Flag',
            selector: row => row.flag
        },

        {
            name: 'Country',
            selector: row => row.country
}];

const MyComponent = () => (
    <DataTable
      title="Country"
      columns={columns}
      theme="solarized"
    />
  );

    return(
        <>

        <DataTable
            columns = {columns}
            data = {data}
            pagination/>
        


        </>
    )

};

export default Table;