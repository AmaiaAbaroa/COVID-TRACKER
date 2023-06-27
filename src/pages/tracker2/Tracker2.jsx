import UseFetch from "../../services/UseFetch"
import Cards from "../../atoms/Cards/Cards"


function Tracker2(){
    const url = 'https://disease.sh/v3/covid-19/';
    const {data} = UseFetch(url + 'countries/spain?strict=true');

    return(
        <> 
            
            {data?.map((spain)=> 

            <Cards 
            key={spain.cases} 
            card_resum_title={spain.country} 
            card_resum_style={"card_resum_lightblue"} 
            card_resum_chip_value={spain.todayCases}
            card_resum_number_style={"card_resum_number_red"}
            card_resum_number_value={spain.cases}> 
            </Cards>
       
         )
        }
          
           
        </>
    )
}

export default Tracker2