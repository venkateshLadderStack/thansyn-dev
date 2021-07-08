import React from 'react';
import SliderComponent from '../UI/slider/SliderComponent';
import styled from 'styled-components';
import { Link } from 'gatsby';

const TestimonialSlider = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    customPaging: i => <div classNameName="slick__dots--custom"></div>,
  };
  return (
    <SliderComponent {...settings} className={'testmonial-area'}>
      {data.map(item => {
        return (
          <div className="testmonial-item">
            <div className="container">
              <div className="row testmonial-warp align-items-center">
                <div className="col-lg-3 col-md-3">
                  <div className="testmonial-pro">
                    <img
                      src={
                        item.featuredImage?.node?.localFile?.childImageSharp
                          .fluid.src
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-md-9">
                  <div className="testmonial-text">
                    <h3>{item.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                    <Link className="btn-line" to="/connect-with-an-analyst">
                      CONNECT WITH AN ANALYST
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </SliderComponent>
  );
};
export default TestimonialSlider;
