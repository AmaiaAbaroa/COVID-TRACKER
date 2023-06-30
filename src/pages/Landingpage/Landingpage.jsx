import Dropdown from "../../atoms/Dropdown/Dropdown";
import Navbar from "../../molecules/Navbar/Navbar";
import GlobalTopTenColumn from "../../organisms/GlobalTopTenColumn/GlobalTopTenColumn";

function Landingpage() {
  return (
    <>
     <Navbar></Navbar>
     <GlobalTopTenColumn></GlobalTopTenColumn>
     <Dropdown></Dropdown>
    </>
  );
}

export default Landingpage;
