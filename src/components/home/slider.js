import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./slider.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const showGallery = ({ slider }) => {
  if (slider) {
    return (
      <Slider {...settings}>
        {slider.map(item => {
          const imageUrl = require(`../../images/galleries/${
            item.images[0].img
          }`);
          return (
            <Link
              to={`/galleries/${item.id}`}
              key={item.id}
              className="slider-item"
            >
              <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                <h3>{item.artist}</h3>
              </div>
            </Link>
          );
        })}
      </Slider>
    );
  } else {
    return <div>lol no gallery xd</div>;
  }
};

const Gallery = props => {
  return (
    <div className="home-gallery">
      <h2>Gallery</h2>
      {showGallery(props)}
    </div>
  );
};

export default Gallery;
