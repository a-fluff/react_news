import ItemNews from '../ItemNews/ItemNews';

function WrapperNews({isAuth, newsList, deleteNews}) {
  return (
    newsList.map((news, index) => {
      return (
        <ItemNews
          key={news.id}
          img={news.img}
          title={news.title}
          content={news.content}
          date={news.date}
          isAuth={isAuth}
          id={news.id}
          deleteNews={deleteNews}
        />)
    })
  )
};

export default WrapperNews