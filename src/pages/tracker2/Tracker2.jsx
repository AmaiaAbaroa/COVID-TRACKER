import UseFetch from "../../services/UseFetch"
import Cards from "../../atoms/Cards/Cards"


function Tracker2(){
     const url = 'https://disease.sh/v3/covid-19/';
     const {data} = UseFetch(url + 'countries/spain');
     console.log(data)
    return(
        <> 
        <Cards card_resum_style={"card_resum_lightblue"} 
                card_resum_title={data.country}
                
        >

        </Cards>
    
      
            
           {/* <Cards 
            key={data.cases} 
            card_resum_title={data.country} 
            card_resum_style={"card_resum_lightblue"} 
            card_resum_chip_value={data.todayCases}
            card_resum_number_style={"card_resum_number_red"}
            card_resum_number_value={data.cases}> 
            </Cards> */}
          
           
        </>
    )
}


export default Tracker2