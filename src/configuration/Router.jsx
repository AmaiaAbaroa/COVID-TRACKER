import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Landingpage from "../pages/Landingpage";
import Tracker2 from "../pages/tracker2/Tracker2";


const RouterItem = () => {
  console.log("Router");
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element= {<Landingpage/>}></Route>
            <Route path="/tracker2" element= {<Tracker2/>}></Route>
            

          </Routes>
        </BrowserRouter>
    )
}

export default RouterItem;