import React from 'react';
import { Link } from 'gatsby';

const RightAlignCard = ({ item }) => {
  return (
    <>
      <div
        className="col-xl-6 col-lg-12 col-md-12 mb-lg-5 mb-4"
        data-aos="fade-right"
        data-aos-delay="600"
      >
        <div className="event-webiner servise-evnent ">
          <h4>{item.title}</h4>
          <p
            dangerouslySetInnerHTML={{
              __html: item.content,
            }}
          />
        </div>
      </div>
      <div
        className="col-xl-6 col-lg-12 col-md-12 mb-lg-5 mb-4"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <div className="what-new-item">
          <div className="whats-top">
            <a href="">
              <img src={item.image?.sourceUrl} alt="" />
            </a>
          </div>
          <div className="whats-bottom">
            <div className="event-more-btn text-center">
              <Link
                style={{
                  background: `${item.buttonColor}`,
                }}
                to={`/${item.buttonText.url}`}
              >
                {item.buttonText.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightAlignCard;
