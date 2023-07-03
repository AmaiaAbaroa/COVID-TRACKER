import { useState } from 'react';
import Cards from "../../atoms/Cards/Cards";
import Dropdown from '../../atoms/Dropdown/Dropdown';
import CurrentDateAtom from '../../atoms/CurrentDate/CurrentDate';
import UseFetch from "../../services/UseFetch"
import "./_dropDownDivsTracker2.css";
import tracker2TotalCases from "../../assets/img/covid-blue.svg";




function DropDownDivsTracker2() {
  
  const [selectedCountry, setSelectedCountry] = useState('');
  const handleDropdownChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const url = "https://disease.sh/v3/covid-19/";
  const { data } = UseFetch(url + `countries/${selectedCountry}`);
  
  
  if (data === null) {
    return <> Loading </>;
  }
  return (
    <div className="container_body_tracker2">
      <div className="container_dropdown_data">
        <Dropdown onChange={handleDropdownChange} />
        <CurrentDateAtom/>
      </div>
   
      <div className="container_cards_data_countries">
        <Cards
        key={"cases"}
        card_resum_style={"card_data_countries_tracker2"}
        card_resum_title={"Total Cases"}
        card_resum_number_value={data?.cases}
        card_resum_number_style={"card_data_countries_tracker2_blue"}
        img_flags_value={tracker2TotalCases}
        img_country_style={"img_cards_tracker2"}
        ></Cards>
      </div>
    </div>
  )
}

export default DropDownDivsTracker2;