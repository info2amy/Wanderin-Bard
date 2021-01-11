import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Landing.css";
import { NavLink } from "react-router-dom";

const photos = [
  {
    info:
      "Everyone that uses our products, come back for more. We must be doing something right!",
    url:
      "https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    info:
      "We use national fulfillment centers to ship your order.",
    url:
      "http://www.simpleimageresizer.com/_uploads/photos/620b9642/travel_800x400.jpg",
  },
  {
    info:
      "Brand new fresh products, we make fresh batches every week, so your product has not been sitting on a shelf for long by the time you receive it",
    url:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];
const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  arrows: false,
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
                    <img src={photos[0].url} className="carousel-image" />
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
          <button class="btn green">
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
