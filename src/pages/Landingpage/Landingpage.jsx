import Navbar from "../../molecules/Navbar/Navbar";
import GlobalTopTenColumn from "../../organisms/GlobalTopTenColumn/GlobalTopTenColumn";
import "./_landinpage.css"
import Table from "../../atoms/tables/Table";

function Landingpage() {
  return (
    <>
      <div className="body_style_flex">

        <Navbar></Navbar>

        <main>
          <GlobalTopTenColumn></GlobalTopTenColumn>
          <Table></Table>
        </main>

      </div>
    </>
    
  );
}

export default Landingpage;
