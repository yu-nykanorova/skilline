import PropTypes from "prop-types";

export const NewsMain = ({ className, news }) => {
  return (
    <div className={`main-news-item ${className}`}>
        <div className="main-news-item__image">
            <img src={news.image.src} alt={news.image.alt} />
        </div>
        <div className="main-news-item__category">{news.category}</div>
        <h4 className="main-news-item__title">{news.title}</h4>
        <div className="desc main-news-item__desc">{news.desc}</div>
    </div>
  )
}

NewsMain.propTypes = {
  className: PropTypes.string,
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
