import CovidData from "../atoms/TopTen"
import Navbar from "../molecules/Navbar"

function Landingpage(){
    return(
        <>
            <Navbar></Navbar>
            <h1>HOLA HOLITA</h1>
            <CovidData></CovidData>
        </>
    )
}

export default Landingpage