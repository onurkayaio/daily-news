import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleLikes } from "./../actions";

//css.
import "./likes.css";

class Likes extends Component {
  addLikes = action => {
    const props = this.props;
    const newLikes =
      action === "ADD"
        ? [props.likes + 1, props.dislikes]
        : [props.likes, props.dislikes + 1];

    this.props.handleLikes(
      newLikes,
      props.articleId,
      props.section,
      props.type
    );
  };

  render() {
    return (
      <div className="addlikes-wrapper">
        <div className="addlikes-container">
          <div className="btn like" onClick={() => this.addLikes("ADD")}>
            <div className="hits">
              {this.props.likes}
              <br/>
              <p>like</p>
            </div>
          </div>
          <div className="btn dislike" onClick={() => this.addLikes("REMOVE")}>
            <div className="hits">
              {this.props.dislikes}
              <br/>
              <p>dislike</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ handleLikes }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Likes);
