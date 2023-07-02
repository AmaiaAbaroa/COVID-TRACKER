import NavAtom from "../../atoms/navbarLanding/NavbarLanding";

const HeaderLandingPage = () => {
    const logoData = {
        img: '../../assets/img/logo-white', 
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
        text13: 'Tracker',
        link: '#',

      }

return(
    <>
    <NavAtom logo={logoData}></NavAtom>
    </>
)
}

export default HeaderLandingPage;