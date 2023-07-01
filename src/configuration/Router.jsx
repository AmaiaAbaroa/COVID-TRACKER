import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Landingpage from "../pages/Landingpage/Landingpage";
import Tracker2 from "../pages/tracker2/Tracker2";

import PruebaLandingpageGood from "../pages/landingpageGood/PruebaLandingpageGood";


const RouterItem = () => {
  //console.log("Router");
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element= {<Landingpage/>}></Route>
            <Route path="/tracker2" element= {<Tracker2/>}></Route>
            <Route path="/prueba" element= {<PruebaLandingpageGood/>}></Route>

          </Routes>
        </BrowserRouter>
    )
}

export default RouterItem;