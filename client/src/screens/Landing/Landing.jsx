import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Landing.css";

const photos = [
  {
    info:
      "Everyone that uses our products, come back for more. We must be doing something right!",
    url:'https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'  },
  {
    info:
      "We use national fulfillment centers to ship your order. We have partnered with national fulfillment centers for all order fulfillment and have our products strategically placed in warehouses across the United States.",
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
  arrows: true,
  slidesToScroll: 1,
  className: "slides",
};

const Landing = (props) => {
  return (
    <Layout user={props.user}>
      <div className='landing-screen'>
      <div className="carousel">
        <Slider {...settings} className="slider">
          {photos.map((photo) => {
            return (
              <div className="photo-info">
                <div>
                  <img src={photo.url} className='carousel-image'/>
                </div>
                <div>
                  <p>{photo.info}</p>
                </div>
              </div>
            );
          })}
        
        </Slider>
      </div>
     <div className='btn-div'><a class="btn green" href="#">Shop Now</a></div>
      <div className="marketing">
        <div className="first-marketing">
          Saved my cats from having to find a new home. I tried every brand and
          home remedy I could find, nothing deterred my little beasties from
          doing their best to ruin my carpet. Then I stumbled upon Amaziing
          Solutions.
        </div>
        <div className="second-marketing">
          BEST PET ODOR AND STAIN REMOVER I have found - and I have bought and
          used MANY! This by far works the best at removing odor and getting rid
          of stains. It also helps to reduce repeat offenses by the animals. I
          would HIGHLY recommend this product to anyone who wants to eliminate
          pet odors and stains!!!!
        </div>
        <div className="third-marketing">
          My next door neighbor got a new puppy, brought it over to visit our
          yorkie, and it peed on my white dining room rug! Ever since then I
          caught my yorkie going to the same spot and marking her territory, and
          she kept going back.
        </div>
      </div>
      </div>
      
    </Layout>
  );
};

export default Landing;
