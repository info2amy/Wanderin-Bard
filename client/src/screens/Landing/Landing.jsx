import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Landing.css";

const photos = [
  {
    info:
      "Percussion",
    url:
      'https://i.imgur.com/rjqDKv6.png'
  },
  {
    info:
      "Strings...",
    url:
      'https://i.imgur.com/8bPn02K.png'
  },
  {
    info:
    "Electronics.....",
    url:
     'https://i.imgur.com/ODBPZ2R.png'
  },
  {
    info:
    "Wind.....",
    url:
     'https://i.imgur.com/2dAoWi8.png'
  },
];
const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  autoplay: true,
  arrows: true,
  slidesToScroll: 1,
  className: "slides",
};

const Landing = (props) => {
  return (
    <Layout user={props.user}>
      <div className="landing-screen">
        <div className="carousel">
          <Slider {...settings} className="slider">
            {photos.map((photo) => {
              return (
                <div className="photo-info">
                  <div>
                    <img src={photo.url} className="carousel-image" alt="products"/>
                  </div>
                  <div>
                    <p className="landing-photo-info">{photo.info}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <Link to='/products'><div className="btn-div">
          <button className="btn green">
            Shop Now
          </button>
        </div></Link>
        <div className="marketing">
          <div className="first-marketing">
            <em>Take a musical safari!</em>
            <p>Expand your musical horizons, with our carefully curated selection of exotic instruments from around the globe. Take your sonic palette to the next level!</p>
          </div>
          <div className="second-marketing">
            <em>The choice of professionals!</em>
            <p>Our products have been endorsed by famous musicians such as Stuey Offkilterson of the Inside-Outers, and Lil Crud. And who doesn't want to be like them?</p>
          </div>
          <div className="third-marketing">
            <em>Support local artisans!</em>
            <p>Our company is commited to fair trade business practices that support local artisans. We were the recipients of the 2020 Bloomberg Ethical Practices Grant.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
