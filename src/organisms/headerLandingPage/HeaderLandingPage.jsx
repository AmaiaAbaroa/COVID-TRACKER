import NavAtom from "../../atoms/navAtom/NavAtom";
import Button from "../../atoms/Cards/button/Button";
import './_headerLandingPage.css'
import logo from "../../assets/img/logo-white.png";
import coronawomen from "../../assets/img/banner-right-image1.png";

const HeaderLandingPage = () => {
    const logoData = {
        img: logo, 
        text1: 'Home', 
        text2: '#', 
        text3: '#', 
        text4: '#', 
        text5: 'Prevention', 
        text6: 'Qurantine', 
        text7: 'Pages', 
        text8: '#', 
        text9: '#', 
        text10: '#', 
        text11: 'About', 
        text12: 'Help',
      }

return(
    <>
        <header>
            <div className="nav">
                <NavAtom logo={logoData}></NavAtom>
            </div>
        </header>

        <body>
            <div className="container">
                <div className="text_container banner">
                    <h1>Stay Home, And Prayer For Victim Of Corona virus</h1>
                    <h3>Human coronaviruses are common and are typically associated with mild illnesses, similar to the  common cold. The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances.</h3>
                </div>

                <div className="banner">
                    < img className="img_banner" src={coronawomen} alt="logo"/>
                </div>
            </div>
        </body>

     
    
    </>
)
}

export default HeaderLandingPage;