import './header.css';

import Auth from '../Auth/Auth';

function Header({handleAuth, isAuth}) {
  return (
    <div className="header">
      <p className="header__logo">
        Cats News
      </p>

      <Auth isAuth={isAuth} handleAuth={handleAuth}/>
    </div>
  )
};

export default Header;