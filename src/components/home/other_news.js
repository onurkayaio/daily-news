import React from "react";
import "./other_news.css";
import { Link } from "react-router-dom";

const renderOtherNews = ({ others }) => {
  if (others) {
    return others.map(article => {
      const imageUrl = require(`../../images/articles/${article.img}`);
      return (
        <Link to={`/news/${article.id}`} key={article.id} className="article">
          <div
            className="left"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="right">
            <h3>{article.title}</h3>
            <div className="category-tag">{article.category}</div>
          </div>
        </Link>
      );
    });
  } else {
    return <div>lol</div>;
  }
};

const OtherNews = props => {
  return (
    <div className="other-news">
      <h2>Other News</h2>
      <div className="other-news-articles">{renderOtherNews(props)}</div>
    </div>
  );
};

export default OtherNews;
