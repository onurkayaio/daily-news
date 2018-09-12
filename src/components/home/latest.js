import React from "react";
import "./latest.css";
import { Link } from "react-router-dom";

const showLatest = ({ latest }) => {
  if (latest) {
    return latest.map(article => {
      const imageUrl = require(`../../images/articles/${article.img}`);
      return (
        <Link to={`/news/${article.id}`} key={article.id} className="article">
          <div
            className="article-image-cover"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="article-description">
              <span>{article.category}</span>
              <div>{article.title}</div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    return <div>no latest news.</div>;
  }
};

const Latest = props => {
  return <div className="home-latest">{showLatest(props)}</div>;
};

export default Latest;
