import UseFetch from "../services/UseFetch"
import Cards from "../atoms/Cards/Cards"


function Landingpage(){
    const url = 'https://disease.sh/v3/covid-19/';
    const {data} = UseFetch(url + 'countries');
    
    return(
        <> 
            <h1>HOLA HOLITA</h1>
            {data?.map((element)=> 

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
            {data?.map((element)=> 
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
