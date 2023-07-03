import Navbar from "../../molecules/Navbar/Navbar";
import GlobalTopTenColumn from "../../organisms/GlobalTopTenColumn/GlobalTopTenColumn";
import "./_tracker3.css"
import TableTracker3 from "../../molecules/tables/Table";

function Tracker3() {
 
  return (
    <>
      <div className="body_style_flex">

        <Navbar></Navbar>

        <main>
          <GlobalTopTenColumn></GlobalTopTenColumn>
          <section className="section_table">
          <p className="table_title">Ajax Data Table - Covid-23 Country Wise State</p>
          <TableTracker3></TableTracker3>
          </section>
        </main>

      </div>
    </>
    
  );
}

export default Tracker3;
