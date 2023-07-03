import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Tracker3 from "../pages/tracker3/Tracker3";
import Tracker2 from "../pages/tracker2/Tracker2";
import Landingpage from "../pages/landingpage/Landingpage";


const RouterItem = () => {
  //console.log("Router");
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element= {<Landingpage/>}></Route>
            <Route path="/tracker2" element= {<Tracker2/>}></Route>
            <Route path="/tracker3" element= {<Tracker3/>}></Route>

          </Routes>
        </BrowserRouter>
    )
}

export default RouterItem;