import React from 'react';
import { Link } from 'gatsby';

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
          <Link to="/contact-us">
            <img src={imageUrl} alt="" />
          </Link>
        </div>
        <div className="whats-bottom">
          <div className="whats-text">
            <div>
              <h4>{title}</h4>
            </div>
            <Link className="btn-line line-black" to="/contact-us">
              REQUEST TO JOIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
