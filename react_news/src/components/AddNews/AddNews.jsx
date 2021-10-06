import './addNews.css';

function AddNews({isAuth}) {
  const auth = isAuth ? 'Admin' : 'Not Admin';

  return (
    <div className="add-news">
      {auth}
    </div>
  )
};

export default AddNews;