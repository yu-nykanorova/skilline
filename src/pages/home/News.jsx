import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { NewsMain } from "../../shared/components/NewsMain";
import { NewsListItem } from "../../shared/components/NewsListItem";
import { news } from "../../data/news";


export const News = () => {
  const newsList = news.filter((item) => item.isHomePage);
  const mainNews = newsList.find((item) => item.isMain);
  const [selectedNews, setSelectedNews] = useState(mainNews);

  useEffect(() => {
    if (mainNews) {
      setSelectedNews(mainNews);
    }
  });

  return (
    <div className="news">
      <div className="container mi">
        <div className="small-container news-container">
          <h3 className="title-color news__title">Lastest News and Resources</h3>
          <p className="desc news__desc">See the developments that have occurred to Skillines in the world</p>
          <div className="news__data">
            <div className="news__main">
              {selectedNews && <NewsMain news={selectedNews}/>}
              <Link to="/" className="desc news__read-more">Read more</Link>
            </div>
            <div className="news__list">
              {newsList.filter(item => !item.isMain).map((item) => (
                <div key={item.id}>
                  <NewsListItem news={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
