import React from 'react';
import { Link } from 'gatsby';

const TitleCard = ({ LinkedIn, name, LinkedInLogo }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="area-title  site-area-titel d-flex">
          <h2>{name} </h2>
          <ul className="social-list">
            {LinkedIn && (
              <li>
                <Link to={LinkedIn}>
                  <img src={LinkedInLogo} alt="" />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
