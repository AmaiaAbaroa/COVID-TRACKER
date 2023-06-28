import UseFetch from "../services/UseFetch"
import Cards from "../atoms/Cards/Cards"


function Landingpage(){
    const url = 'https://disease.sh/v3/covid-19/';
    const {data} = UseFetch(url + 'countries');

    const sortedData = data?.sort((a, b) => b.cases - a.cases);
    const topTenCountries = sortedData?.slice(0, 10);
    
    return(
        <> 
            <h1>HOLA HOLITA</h1>
            {topTenCountries?.map((element)=> 

            <Cards 
            key={element.cases} 
            card_resum_title={element.country} 
            card_resum_style={"card_resum_lightblue"} 
            card_resum_chip_value={element.todayCases}
            card_resum_number_style={"card_resum_number_red"}
            card_resum_number_value={element.cases}> 
            </Cards>
            )
        }    
        </>
    )
}

export default Landingpage
