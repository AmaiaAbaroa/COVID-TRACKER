import UseFetch from "../../services/UseFetch"
import Cards from "../../atoms/Cards/Cards";


function Tracker2(){
    const url = 'https://disease.sh/v3/covid-19/';
    const {data} = UseFetch(url + 'countries/spain');
    const {data: dataFrance} = UseFetch(url + 'countries/france');
    console.log(data)
    
    if (data === null){
        return <> Loading </>
    }
    return(
        <>      
            <Cards 
            key= {'spain'}
            card_resum_title={data.country} 
            card_resum_chip_value={data.todayCases}
            card_resum_number_value={data.cases}
            card_resum_number_style={"card_resum_number_red"}
            card_resum_style={"card_resum_lightblue"}>

            </Cards>

            <Cards 
            key= {'france'}
            card_resum_title={dataFrance.countryInfo} 
            card_resum_chip_value={dataFrance.critical}
            card_resum_number_value={dataFrance.cases}
            card_resum_number_style={"card_resum_number_red"}
            card_resum_style={"card_resum_lightblue"}>

            </Cards> 
            {/* // card_resum_title={data.country} 
            // card_resum_chip_value={data.todayCases}
            // card_resum_number_style={"card_resum_number_red"}
            // card_resum_number_value={data.cases}  */}
           
        </>
    )
}

export default Tracker2