import PropTypes from 'prop-types';
function NavAtom({logo}) {

  const { img, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, link }  = logo

  return (
    <header>
        <nav className='nav'>
            <div className='logo'>
                <a href='#home'><img src={img} className='img_logo' alt='logo' id='logo'/></a>
            </div>
            <ul className="nav-list">
                <li htmlFor="dropdown" className="dropdown">  
                        <select id="dropdown" name="dropdown">
                          <option value="1">{text1}</option> 
                          <option value="2">{text2}</option>
                          <option value="3">{text3}</option> 
                          <option value="4">{text4}</option>
                        </select>                     
                </li>
                <li>
                    <a href="#description">{text5}</a>
                </li>
                <li>
                    <a href="#features">{text6}</a>
                </li>
                <li htmlFor="dropdown" className="dropdown">  
                        <select id="dropdown" name="dropdown">
                          <option value="1">{text7}</option> 
                          <option value="2">{text8}</option>
                          <option value="3">{text9}</option> 
                          <option value="4">{text10}</option>
                        </select>                     
                </li>
                <li>
                    <a href="#screens">{text11}</a>
                </li>
                <li>
                    <a href="#screens">{text12}</a>
                </li>               
                <li className="list_download">
                    <a className="btn" href={link}>
                    {text13}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

NavAtom.propTypes = {
    logo: PropTypes.shape({
            img: PropTypes.node.isRequired,
            text1: PropTypes.string.isRequired,
            text2: PropTypes.string.isRequired,
            text3: PropTypes.string.isRequired,
            text4: PropTypes.string.isRequired,
            text5: PropTypes.string.isRequired,
            text6: PropTypes.string.isRequired,
            text7: PropTypes.string.isRequired,
            text8: PropTypes.string.isRequired,
            text9: PropTypes.string.isRequired,
            text10: PropTypes.string.isRequired,
            text11: PropTypes.string.isRequired,
            text12: PropTypes.string.isRequired,
            text13: PropTypes.string.isRequired,
            link: PropTypes.node.isRequired,
        }),       
};

export default NavAtom;