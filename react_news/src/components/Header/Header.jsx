import './header.css';

import Auth from '../Auth/Auth';

function Header({handleAuth, isAuth, logout}) {
  return (
    <div className="header">
      <p className="header__logo">
        Cats News
      </p>

      <Auth
        isAuth={isAuth}
        handleAuth={handleAuth}
        logout={logout}
      />
    </div>
  )
};

export default Header;