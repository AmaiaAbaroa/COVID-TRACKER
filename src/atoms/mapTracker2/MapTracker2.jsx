
import { useEffect, useState } from 'react';
import './_mapTracker2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactWorldCountriesMap } from 'react-world-countries-map';
import UseFetch from '../../services/UseFetch';

function MapTracker2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UseFetch('https://disease.sh/v3/covid-19/countries');
        const countriesData = response.map((country) => ({
          country: country.countryInfo.iso2,
          value: country.cases,
        }));
        setData(countriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <ReactWorldCountriesMap
        color="blue"
        tooltipBgColor="blue"
        tooltipTextColor="white"
        title="Top 10 Países con mayor PIB según el FMI"
        valueSuffix="MDD"
        valuePrefix="$"
        size="responsive"
        data={data}
      />
    </div>
  );
}

export default MapTracker2;
