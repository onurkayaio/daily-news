import React, { Component } from "react";
import { connect } from "react-redux";
import { latestNews, otherNews, latestGallery } from "../actions";
import { bindActionCreators } from "redux";

//components
import LatestNews from "../components/home/latest";
import OtherNews from "../components/home/other_news";
import Gallery from "../components/home/slider";

class Home extends Component {
  componentWillMount() {
    this.props.latestNews();
    this.props.otherNews();
    this.props.latestGallery();
  }

  render() {
    return (
      <div>
        <LatestNews latest={this.props.articles.latest} />
        <OtherNews others={this.props.articles.others} />
        <Gallery slider={this.props.gallery.latestGallery} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    gallery: state.gallery
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ latestNews, otherNews, latestGallery }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
