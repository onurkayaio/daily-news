import React, { Component } from "react";
import { selectedGallery, clearSelectedGallery } from "./../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Slider from "react-slick";
import "./gallery.css";

//
import Likes from "./likes";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

class Gallery extends Component {
  componentWillMount() {
    this.props.selectedGallery(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearSelectedGallery();
  }

  renderGallery({ selectedGallery }) {
    if (selectedGallery) {
      const gallery = selectedGallery[0];
      return (
        <div>
          <h3>The best gallery of {gallery.artist}</h3>
          <Slider {...settings}>
            {gallery.images.map((item, index) => {
              const imageUrl = require(`./../images/galleries/${item.img}`);
              return (
                <div key={index} className="slide-item">
                  <div>
                    <div
                      className="image"
                      style={{ backgroundImage: `url(${imageUrl})` }}
                    />
                    <div className="description">
                      <span>{item.desc}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <Likes
            section="galleries"
            type="HANDLE_LIKES_GALLERY"
            articleId={gallery.id}
            likes={gallery.likes[0]}
            dislikes={gallery.likes[1]}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="slide-item-wrap">
        {this.renderGallery(this.props.gallery)}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    gallery: state.gallery
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectedGallery, clearSelectedGallery },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
