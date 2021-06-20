import React from 'react';
import SliderComponent from '../UI/slider/SliderComponent';
import styled from 'styled-components';

const BGImage = styled.div`
  background-image: url(${props => (props.image ? `${props.image}` : null)});
`;
const HeroSlider = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => <div classNameName="slick__dots--custom"></div>,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <SliderComponent {...settings}>
      {data.map((item, index) => (
        <div className="hero-slide-item" key={index}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-text">
                  <h1 dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.slider.secondTitle,
                    }}
                  />
                  <div className="hero-btn">
                    <a className="btn-bg" href={item.slider.viewService}>
                      View Service
                    </a>
                    <a href={item.slider.ourResearch}>Our Research</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-thumb">
            <BGImage
              className="hero-bg"
              image={
                item.featuredImage?.node?.localFile?.childImageSharp.fluid.src
              }
            />
          </div>
        </div>
      ))}
    </SliderComponent>
  );
};
export default HeroSlider;
