//import CovidData from "../atoms/TopTen"
import UseFetch from "../services/ApiService"

function Landingpage(){

    const url = "https://disease.sh/v3/covid-19/countries";
    const {data} = UseFetch(url);

    return(
        <>
            <h1>HOLA HOLITA</h1>
           {/* <CovidData></CovidData>*/}
           <ul>
            {data?.map{element}=>
            <li key={element.name}>element.country}</li>)}
           </ul>
        </>
    )
}

export default Landingpage