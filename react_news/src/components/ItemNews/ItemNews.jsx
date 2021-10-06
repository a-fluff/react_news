import './itemNews.css';

function ItemNews({img, title, content, date}) { //можно деструтуризировать объект props, записав {img, title, content, date}
  return (
    <div className="item-news">
      <div className="item-news__img-wrapper">
        <img className="item-news__img" src={img}/>
      </div>
      <div className="item-news__wrapper">
        <p className="item-news__title">{title}</p>
        <p className="item-news__content">
          {content}
          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Hic dicta aliquam dolor eaque, dolorem, libero molestias quod laboriosam nisi modi fuga sed nihil id iusto? Officiis ea omnis illo fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet delectus sed, dolorum iste nemo, pariatur voluptatum enim rerum ex quasi dolor, eum accusamus sit repellendus optio. Obcaecati corporis alias deleniti. */}
          </p>
        <p className="item-news__date">
          {/* 20-10-2020 */}
          {date}
          </p>
      </div>
    </div>
  )
};

export default ItemNews