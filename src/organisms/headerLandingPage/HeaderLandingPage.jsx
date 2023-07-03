import NavAtom from "../../atoms/navAtom/NavAtom";
import Button from "../../atoms/Cards/button/Button";
import './_headerLandingPage.css'
import logo from "../../assets/img/logo-white.png";

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
    <div className="nav">
    <NavAtom logo={logoData}></NavAtom>
    <Button  button_content="Tracker"></Button>
    </div>
    
    </>
)
}

export default HeaderLandingPage;