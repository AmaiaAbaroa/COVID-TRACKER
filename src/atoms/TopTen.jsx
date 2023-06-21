import { useEffect, useState } from 'react';
import axios from 'axios';
import './_topTen.css';

const TopTenGlobal = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://disease.sh/v3/covid-19/countries');
        const arrayCountries = response.data.sort((a, b) => b.cases - a.cases);
        const topTenArray = arrayCountries.slice(0, 10);
        setCountries(topTenArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='container'>
      {countries.length > 0 ? (
        countries.map((country) => (
          <div key={country.country} className="div_pais">
            <img className="img_country" src={Object.values(country.countryInfo)[5]} alt="" />
            <p>{country.country}</p>
            <h4 className="total_cases">{country.cases}</h4>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};
export default TopTenGlobal