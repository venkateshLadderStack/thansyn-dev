import React from 'react';

const TitleCard = ({ LinkedIn, name }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="area-title  site-area-titel d-flex">
          <h2>{name} </h2>
          <ul className="social-list">
            <li>
              <a href="#">
                <img src={LinkedIn} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
