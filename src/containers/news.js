import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedNew, clearSelectedNew } from "../actions";
import { bindActionCreators } from "redux";

// css.
import "./news.css";

// containers.
import Likes from "./likes";

class News extends Component {
  componentDidMount() {
    this.props.selectedNew(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearSelectedNew();
  }

  renderNews({ selected }) {
    if (selected) {
      return selected.map(item => {
        const imageUrl = require(`../images/articles/${item.img}`);

        return (
          <div key={item.id}>
            <div className="tag">
              <span>{item.views}</span>
              <span>{item.likes[0]}</span>
              <span>{item.likes[1]}</span>
            </div>
            <div className="top">
              <h2>
                {item.title}
                <br />
                <span>
                  Article by: <strong>{item.author}</strong>
                </span>
              </h2>
            </div>

            <img alt={item.title} src={`${imageUrl}`} />
            <div className="news-body">{item.body}</div>
            <div>
              <Likes
                section="articles"
                type="HANDLE_LIKES_ARTICLE"
                articleId={item.id}
                likes={item.likes[0]}
                dislikes={item.likes[1]}
              />
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="news-container">
        {this.renderNews(this.props.articles)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectedNew, clearSelectedNew }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
