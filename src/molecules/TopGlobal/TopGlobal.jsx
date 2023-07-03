import UseFetch from "../../services/UseFetch";
import Cards from "../../atoms/Cards/Cards";
import "./_topGlobal.css";

function TopGlobal() {
  const url = "https://disease.sh/v3/covid-19/";
  const { data } = UseFetch(url + "all");

  if (data === null) {
    return <> Loading </>;
  }
  return (
    <div className="container_top_global">
      <Cards
        key={"cases"}
        img_country_style={"img_empty"}
        card_resum_title={"Total Case"}
        card_resum_number_value={data.cases}
        card_resum_number_style={"card_resum_number_red"}
        card_resum_chip_value={"+ " + data.todayCases}
        card_resum_chip_style={"card_resum_chip"}
        card_resum_style={"card_resum_red"}
      ></Cards>

      <Cards
        key={"active"}
        img_country_style={"img_empty"}
        card_resum_title={"Active Case"}
        card_resum_number_value={data.active}
        card_resum_number_style={"card_resum_number_orange"}
        card_resum_style={"card_resum_orange"}
      ></Cards>

      <Cards
        key={"recovered"}
        img_country_style={"img_empty"}
        card_resum_title={"Recovered Case"}
        card_resum_number_value={data.recovered}
        card_resum_number_style={"card_resum_number_green"}
        card_resum_chip_value={"+" + data.todayRecovered}
        card_resum_chip_style={"card_resum_chip"}
        card_resum_style={"card_resum_green"}
      ></Cards>

      <Cards
        key={"deaths"}
        img_country_style={"img_empty"}
        card_resum_title={"Death Case"}
        card_resum_number_value={data.deaths}
        card_resum_number_style={"card_resum_number_blue"}
        card_resum_chip_value={"+ " + data.todayDeaths}
        card_resum_chip_style={"card_resum_chip"}
        card_resum_style={"card_resum_blue"}
      ></Cards>
    </div>
  );
}

export default TopGlobal;
