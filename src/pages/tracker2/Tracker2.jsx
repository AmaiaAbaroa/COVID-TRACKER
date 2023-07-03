import Navbar from "../../molecules/Navbar/Navbar";
import GlobalTopTenColumn from "../../organisms/GlobalTopTenColumn/GlobalTopTenColumn";
import DropDownDivsTracker2 from "../../organisms/DropDownDivsTracker2/DropDownDivsTracker2";
import MapTracker2 from "../../atoms/mapTracker2/MapTracker2";

function Tracker2(){

    return(
        <>      
     <Navbar></Navbar>
     <GlobalTopTenColumn></GlobalTopTenColumn>
     <DropDownDivsTracker2></DropDownDivsTracker2>   
        </>
    )
}


export default Tracker2