import Navbar from "../../molecules/Navbar/Navbar";
import GlobalTopTenColumn from "../../organisms/GlobalTopTenColumn/GlobalTopTenColumn";
import "./_landinpage.css"
//import TableAtom from "../../atoms/tableAtom/tableAtom";
import TableTracker3 from "../../molecules/tables/Table";

function Landingpage() {
  //const imgFlag = "countryInfo.flag";
  return (
    <>
      <div className="body_style_flex">

        <Navbar></Navbar>

        <main>
          <GlobalTopTenColumn></GlobalTopTenColumn>
          {/* <Table 
            title_column_1_table = {"Flags"}
            img_flag={imgFlag}
          >
          </Table> */}
          <TableTracker3></TableTracker3>
        </main>

      </div>
    </>
    
  );
}

export default Landingpage;
