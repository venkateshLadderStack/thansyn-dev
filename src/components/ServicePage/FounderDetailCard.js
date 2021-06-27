import React from 'react';

const FounderDetailCard = ({ name, imageUrl, title, content }) => {
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
              <a href="#">
                <i className="fab fa-facebook-f facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FounderDetailCard;
