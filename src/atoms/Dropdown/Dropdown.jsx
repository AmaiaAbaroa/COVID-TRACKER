import "./_dropDown.css";
import UseFetch from "../../services/UseFetch";



const Dropdown = () => {

    const url = "https://disease.sh/v3/covid-19/";
    const { data } = UseFetch(url + "countries");
  
    if (data === null) {
      return <> Loading </>;
    }
    return (
        <div >
          <select className="container_drop_down" name="countries">
            {data.map((country) => (
              <option key={country.id} 
              value={country.id}
              >
                {country.country}
              </option>
            ))}
          </select>
        </div>
      );  
  
    
}

export default Dropdown