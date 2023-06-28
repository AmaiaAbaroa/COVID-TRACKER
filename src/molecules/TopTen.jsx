import UseFetch from "../services/UseFetch";
import Cards from "../atoms/Cards/Cards";
import "./_topTen.css"



function TopTen(){
    const url = 'https://disease.sh/v3/covid-19/';
    const {data} = UseFetch(url + 'countries');

    const sortedData = data?.sort((a, b) => b.cases - a.cases);
    const topTenCountries = sortedData?.slice(0, 10);
    
    
    return(
        <> 
            {topTenCountries?.map((element)=> 
     
            <Cards 
            key={element.cases} 
            img_flags_value={element.countryInfo.flag}
            img_country_style={"img_country"}
            card_resum_style={"div_pais"} 
            card_resum_chip_style={"card_resum_chip"}
            card_resum_chip_value={element.country}
            card_resum_number_style={"total_cases"}
            card_resum_number_value={element.cases}> 
            </Cards>
            )
        }    
        </>
    )
}

export default TopTen