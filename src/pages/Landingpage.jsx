import CovidData from "../atoms/TopTen"
import UseFetch from "../services/UseFetch"

function Landingpage(){
    const url = "https://disease.sh/v3/covid-19/countries";
    
    return(
        <>
            <h1>Listado</h1>
            <ul>
                {data?.map((element)=>
                <li key={element.name}>{element.country}</li>)}
            </ul>
            <CovidData></CovidData>
        </>
    )
}

export default Landingpage