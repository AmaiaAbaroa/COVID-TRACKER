import Cards from "../../atoms/Cards/Cards";
import UseFetch from "../../services/UseFetch"
import "./_dropDownDivsTracker2";



function DropDownDivsTracker2() {

const url = "https://disease.sh/v3/covid-19/";
  const { data } = UseFetch(url + "all");

  if (data === null) {
    return <> Loading </>;
  }
  return (
    <Cards
    key={"cases"}
    card_resum_title={"Total Case"}
    card_resum_number_value={data.cases}
    card_resum_number_style={"card_resum_number_red"}
    card_resum_chip_value={"+ " + data.todayCases}
    card_resum_chip_style={"card_resum_chip"}
    card_resum_style={"card_resum_red"}></Cards>
  )
}

export default DropDownDivsTracker2;