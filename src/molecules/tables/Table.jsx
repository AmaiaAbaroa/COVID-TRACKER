// import "./_table.css"
// //import {useState, useEffect} from "react";
// import DataTable from "react-data-table-component-with-filter";
// import UseFetch from "../../services/UseFetch";
// //import "styled-components";

// const Table =() =>{

//     const url = "https://disease.sh/v3/covid-19/";
//     const { data } = UseFetch(url + "countries");
//     console.log(data)
    

//     const columns = [
//         {
//             name: 'Flag',
//             selector: row => <img src={row.countryInfo.flag} alt="Flag" />
//         },

//         {
//             name: 'Country',
//             selector: row => row.country
// }];


// // const columns = [
// //     {
// //     name: {props.title_column_1_table},
// //     selector: row => <img src={row.[props.img_flag]}/>
// //     },
// //     {
// //     name: 'Country',
// //     selector: row => row.country
// //     }
// // ];



// // const MyComponent = () => (
// //     <DataTable
// //       title="Country"
// //       columns={columns}
// //       theme="solarized"
// //     />
// //   );
// if (data === null) {
//     return <> Loading </>;
// }

// return(
//         <>

//         <DataTable
//             columns = {columns}
//             data = {data}
//             keyField="id"
//             pagination/>
        


//         </>
//     )

// };

// export default Table;

import TableAtom from "../../atoms/tableAtom/tableAtom";
import UseFetch from "../../services/UseFetch";

const TableTracker3 =() =>{

const url = "https://disease.sh/v3/covid-19/";
const { data } = UseFetch(url + "countries");
console.log(data)


const myColumns = [
    {
    name: 'Flag',
    selector: 'flag',
    cell: (row) => <img src={row.countryInfo.flag} alt="Flag" />,
    },
    {
    name: 'Country',
    selector: "country",
    },

];

if (data === null) {
return <> Loading </>;
}

return(<TableTracker3 data={data} columns={myColumns} />);

};


export default TableTracker3;
