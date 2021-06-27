import React from 'react';

const CommunityCard = ({ badge, imageUrl, title, slug }) => {
  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos="fade-right"
      data-aos-duration="900"
    >
      <div className="what-new-item">
        <div className="whats-top">
          <span className="tags">{badge}</span>
          <a href="">
            <img src={imageUrl} alt="" />
          </a>
        </div>
        <div className="whats-bottom">
          <div className="whats-text">
            <a href="">
              <h4>{title}</h4>
            </a>
            <a className="btn-line line-black" href="">
              REQUEST TO JOIN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
