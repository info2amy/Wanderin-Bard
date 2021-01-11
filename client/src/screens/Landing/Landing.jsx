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
      "Percussions",
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
                    <img src={photo.url} className="carousel-image" />
                  </div>
                  <div>
                    <p>{photo.info}</p>
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
            Saved my cats from having to find a new home. I tried every brand
            and home remedy I could find, nothing deterred my little beasties
            from doing their best to ruin my carpet.
          </div>
          <div className="second-marketing">
            BEST PET ODOR AND STAIN REMOVER I have found - and I have bought and
            used MANY! This by far works the best at removing odor and getting
            rid of stains. 
          </div>
          <div className="third-marketing">
            My next door neighbor got a new puppy, brought it over to visit our
            yorkie, and it peed on my white dining room rug! Ever since then I
            caught my yorkie going to the same spot.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
