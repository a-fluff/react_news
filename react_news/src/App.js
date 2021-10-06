import { useState } from 'react';

import Header from './components/Header/Header';
import WrapperNews from './components/WrapperNews/WrapperNews';
import AddNews from './components/AddNews/AddNews';

import './App.css';
import content from './content';

function App() {
  const [news, setNews] = useState(content);

  const [isAuth, setIsAuth] = useState(false);

  function toggleAuth() {
    setIsAuth(!isAuth)
  };

  return (
    <div className="App">
      <Header isAuth={isAuth} handleAuth={toggleAuth}/>
      <AddNews isAuth={isAuth}/>
      <WrapperNews newsList={news}/>
    </div>
  );
}

export default App;