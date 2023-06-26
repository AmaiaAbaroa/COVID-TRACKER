
import UseFetch from "../services/UseFetch"
import ResumCard from "../atoms/ResumeCard";

function Landingpage(){
    const url = 'https://disease.sh/v3/covid-19/countries';
    const {data} = UseFetch(url);
    
    return(
        <>
            <h1>HOLA HOLITA</h1>
            
            <ResumCard card_resume_title={"title"} card_resume_chip_value={} ></ResumCard>
            <ul>
                {data?.map((element)=>
                <li key={element.name}>{element.country}</li>)}
            </ul>
           
        </>
    )
}

export default Landingpage