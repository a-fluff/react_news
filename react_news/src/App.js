import { useState } from 'react';

import Header from './components/Header/Header';
import WrapperNews from './components/WrapperNews/WrapperNews';
import AddNews from './components/AddNews/AddNews';
import Modal from './components/Modal/Modal';

import './App.css';
import content from './content';

function App() {
  const [news, setNews] = useState(content);

  const [isAuth, setIsAuth] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  function handleAuth() {
    setIsAuth(true)
  };

  function handleModal() {
    setOpenModal(!openModal)
  };

  function loginAuth() {
    setIsAuth(true);
  };

  function logoutAuth() {
    setIsAuth(false);
  };

  function deleteNews(id) {
    setNews(
      news.filter(el => {
        return el.id !== id
      })
    );
  };

  return (
    <div className="App">
      <Header
        isAuth={isAuth}
        handleAuth={handleModal}
        logout={logoutAuth}
      />
      <AddNews isAuth={isAuth}/>
      <WrapperNews
        isAuth={isAuth}
        newsList={news}
        deleteNews = {deleteNews}
      />
      <Modal
        loginAuth = {loginAuth}
        isOpenModal={openModal}
        handleAuth={handleModal}
      />
    </div>
  );
}

export default App;