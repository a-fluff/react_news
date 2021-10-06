import ItemNews from '../ItemNews/ItemNews';

function WrapperNews({newsList}) { //можно деструтуризировать объект props, записав {img, title, content, date}
  return (
    newsList.map((news, index) => {
      return (
        <ItemNews
          key={news.id}
          img={news.img}
          title={news.title}
          content={news.content}
          date={news.date}
        />)
    })
  )
};

export default WrapperNews