import DropDownDivsTracker2 from "../../organisms/DropDownDivsTracker2/DropDownDivsTracker2";
import Navbar from "../../molecules/Navbar/Navbar";
import GlobalTopTenColumn from "../../organisms/GlobalTopTenColumn/GlobalTopTenColumn";

function Landingpage() {
  return (
    <>
     <Navbar></Navbar>
     <GlobalTopTenColumn></GlobalTopTenColumn>
     <DropDownDivsTracker2></DropDownDivsTracker2>
    </>
  );
}

export default Landingpage;
