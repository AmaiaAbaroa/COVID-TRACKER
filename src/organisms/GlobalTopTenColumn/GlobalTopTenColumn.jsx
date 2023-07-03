import TopTen from "../../molecules/TopTen/TopTen";
import TopGlobal from "../../molecules/TopGlobal/TopGlobal";
import "./_globalTopTenColumn.css"

function GlobalTopTenColumn() {
  return (
    <>
      <div className="container_global_top_ten_column">
        <h3>COVID-19 Tracker</h3>
        <TopGlobal></TopGlobal>
        <h5 className="container_top_ten_10title">Top 10 Country</h5>
        <TopTen></TopTen>
      </div>
    </>
  );
}

export default GlobalTopTenColumn;
