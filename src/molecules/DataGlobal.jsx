import UseFetch from "../services/UseFetch";
import Cards from "../atoms/Cards/Cards";


function DataGlobal(){
    const url = 'https://disease.sh/v3/covid-19/';
    const {data} = UseFetch(url + 'countries');
    const {all} = UseFetch(url + 'all');
    
    return(
        <> 
            <h1>COVID-19 Tracker</h1>

            {all?.map((todos)=> 

            <Cards 
            key={todos.cases} 
            //card_resum_title={todos.cases} 
            card_resum_style={"card_resum_red"} 
            card_resum_chip_value={todos.todayCases}
            card_resum_number_style={"card_resum_number_red"}
            card_resum_number_value={todos.cases}> 
            </Cards>



            // {data?.map((element)=> 

            // <Cards 
            // key={element.cases} 
            // card_resum_title={element.country} 
            // card_resum_style={"card_resum_red"} 
            // card_resum_chip_value={element.todayCases}
            // card_resum_number_style={"card_resum_number_red"}
            // card_resum_number_value={element.cases}> 
            // </Cards>
)}
            
           
        </>
    )
}

export default DataGlobal;