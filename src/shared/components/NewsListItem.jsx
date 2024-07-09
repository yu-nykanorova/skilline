import PropTypes from "prop-types";

export const NewsListItem = ({ news }) => {
  return (
    <div className="news-list-item">
      <div className="news-list-item__image">
        <img src={news.image.src} alt={news.image.alt} />
        <div className="news-list-item__category">{news.category}</div>
      </div>
      <div className="news-list-item__info">
        <h4 className="news-list-item__title">{news.title}</h4>
        <p className="desc news-list-item__desc">{news.desc}</p>
      </div>
    </div>
  )
}

NewsListItem.propTypes = {
  news: PropTypes.shape({
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }).isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired
};
