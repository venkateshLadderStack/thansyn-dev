import React from 'react';
import { Link } from 'gatsby';

const AnalystDetailsCard = ({
  name,
  description,
  wroteInsights,
  services,
  slug,
  facebook,
  twitter,
  instagram,
}) => {
  return (
    <div
      className="analust-content"
      style={{
        marginTop: '-25px',
        transition: '1s ease-out',
      }}
    >
      <h2>{name}</h2>
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
      <p>{description}</p>
      <h4>Wrote insights on</h4>
      {wroteInsights.map((data, index) => (
        <p>{data.insightName}</p>
      ))}

      <h4>Services</h4>
      {services.map((data, index) => (
        <p>{data.services}</p>
      ))}

      <div className="anylust-btn d-flex align-items-center justify-content-between mt_55">
        <a href="#" className="btn bg-succes btn-group-lg radius-0">
          CONNECT
        </a>
        <Link to={`/author/${slug}`} className="btn-line">
          VIEW PROFILE
        </Link>
      </div>
    </div>
  );
};

export default AnalystDetailsCard;
