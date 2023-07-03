import { useState } from 'react';
import Cards from "../../atoms/Cards/Cards";
import Dropdown from '../../atoms/Dropdown/Dropdown';
import UseFetch from "../../services/UseFetch"
import "./_dropDownDivsTracker2.css";
import tracker2TotalCases from "../../assets/img/coronavirus.png";




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
    <div>
      <Dropdown onChange={handleDropdownChange} />
      <Cards
      // country={selectedCountry} 
      key={"cases"}
      card_resum_style={"card_resum_red"}
      card_resum_title={"Total Case"}
      card_resum_number_value={data?.cases}
      card_resum_number_style={"card_resum_number_red"}
      img_flags_value={tracker2TotalCases}
      img_country_style={""}
      ></Cards>
    </div>
  )
}

export default DropDownDivsTracker2;