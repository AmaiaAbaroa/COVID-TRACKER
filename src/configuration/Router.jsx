import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Landingpage from "../pages/Landingpage/Landingpage";





const RouterItem = () => {
  //console.log("Router");
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element= {<Landingpage/>}></Route>
           
            

          </Routes>
        </BrowserRouter>
    )
}

export default RouterItem;