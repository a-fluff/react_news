import './auth.css';

function Auth({handleAuth, isAuth}) {

  return (
    <div className="auth">
      <button className="button" onClick={() => handleAuth()}>
        {isAuth ? 'Logout' : 'Login'}
      </button>
    </div>
  )
};

export default Auth;