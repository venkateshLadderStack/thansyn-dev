import React from 'react';
import { Link } from 'gatsby';

const FounderDetailCard = ({
  name,
  imageUrl,
  title,
  content,
  twitter,
  insta,
  facebook,
}) => {
  return (
    <div className="col-lg-6 col-md-6">
      <div className="about-future" data-aos="fade-right" data-aos-delay="800">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
      <div className="about-bg" data-aos="zoom-in" data-aos-delay="900">
        <img src={imageUrl} alt="about-us" />
        <div className="about-bg-content">
          <h3>{name}</h3>
          <ul className="social-list d-flex">
            <li>
              <Link to={facebook}>
                <i className="fab fa-facebook-f facebook"></i>
              </Link>
            </li>
            <li>
              <Link to={insta}>
                <i className="fab fa-instagram instagram"></i>
              </Link>
            </li>
            <li>
              <Link to={twitter}>
                <i className="fab fa-twitter twitter"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FounderDetailCard;
