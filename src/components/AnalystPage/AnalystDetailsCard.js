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
      className="analust-content mb-3"
      style={{
        marginTop: '-25px',
        transition: '1s ease-out',
      }}
    >
      <h2>{name}</h2>
      <ul className="social-list d-flex">
        {facebook && (
          <li>
            <Link to={facebook}>
              <i className="fab fa-facebook-f facebook"></i>
            </Link>
          </li>
        )}
        {instagram && (
          <li>
            <Link to={instagram}>
              <i className="fab fa-instagram instagram"></i>
            </Link>
          </li>
        )}
        {twitter && (
          <li>
            <Link to={twitter}>
              <i className="fab fa-twitter twitter"></i>
            </Link>
          </li>
        )}
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
        <Link
          to="/connect-with-an-analyst"
          className="btn bg-succes btn-group-lg radius-0"
        >
          CONNECT
        </Link>
        <Link to={`/author/${slug}`} className="btn-line">
          VIEW PROFILE
        </Link>
      </div>
    </div>
  );
};

export default AnalystDetailsCard;
