import React from 'react';
import { Link } from 'gatsby';

const Linkscard = ({ linksOfWork }) => {
  return (
    <div className="col-lg-6 col-md-12 grid-item" data-aos="fade-up">
      <div className="about-future content-future-two mt-0 mb-4">
        <div className="area-title  link-social site-area-titel d-flex justify-content-between">
          <h4>Links</h4>
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
        {linksOfWork.map(item => (
          <div className="detail-link">
            <p>{item.nameOfInsight}:</p>
            <Link to={item.link1}>{item.link1}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Linkscard;
