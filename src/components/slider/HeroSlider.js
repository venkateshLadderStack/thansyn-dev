import React from "react"
import SliderComponent from "../UI/slider/SliderComponent"
const HeroSlider = ({data}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => <div className="slick__dots--custom"></div>,
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
  }
  return (
    <SliderComponent {...settings}>
      {data.map((item, index) => (
        <div class="hero-slide-item">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="hero-text">
                  <h1 dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p dangerouslySetInnerHTML={{ __html: item.description }} />
                  <div class="hero-btn">
                    <a class="btn-bg" href="">
                      {item.serviceBtn}
                    </a>
                    <a href="">{item.researchBtn}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide-thumb">
            <div class="hero-bg"></div>
          </div>
        </div>
      ))}
    </SliderComponent>
  )
}
export default HeroSlider
