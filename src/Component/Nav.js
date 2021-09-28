import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Nav() {
  const navstyle ={
    color: 'white'
    
  }

  const { t, i18n } = useTranslation();

  function handleClick(lang) {  
    i18n.changeLanguage(lang);

  }
  return (
    <nav>
        
        <ul className="nav-Links">
            <Link to="/"  className="nav-item"><li >{t('nav.homePage')}</li></Link>
            <Link to="/login" className="nav-item"><li >{t('nav.login')}</li></Link>
            <Link to="/about" className="nav-item"><li >{t('nav.about')}</li></Link>
            <li>
              <button onClick={() => handleClick('en')}>ENG</button>
              <button onClick={() => handleClick('chi')}>CHI</button>
            </li>
            
        </ul>
        
    </nav>
  );
}

export default Nav;
