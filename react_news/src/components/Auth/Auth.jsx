import './auth.css';

function Auth({handleAuth, isAuth, logout}) {
  function auth() {
    if(isAuth) logout()
    else handleAuth()
  }

  return (
    <div className="auth">
      <button className="button" onClick={auth}>
        {isAuth ? 'Log out' : 'Log in'}
      </button>
    </div>
  )
};

export default Auth;