import Landingpage from "../pages/Landingpage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const RouterItem = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element= {<Landingpage/>}>

            </Route>

          </Routes>
        </BrowserRouter>
    )
}

export default RouterItem;