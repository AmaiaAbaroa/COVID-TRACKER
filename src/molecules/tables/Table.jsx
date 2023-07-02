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
    {
        name: 'Cases',
        selector: "cases",
    },
    {
        name: 'New Cases',
        selector: "todayCases",
    },
    {
        name: 'Deaths',
        selector: "deaths",
    },
    {
        name: 'New Deaths',
        selector: "todayDeaths",
    },
    {
        name: 'Recoverd',
        selector: "recovered",
    },
    {
        name: 'Active',
        selector: "active",
    },
    {
        name: 'Critical',
        selector: "critical",
    },
    {
        name: 'Tested',
        selector: "tests",
    },

];

if (data === null) {
return <> Loading </>;
}

return(<TableAtom data={data} columns={myColumns} />);

};


export default TableTracker3;
