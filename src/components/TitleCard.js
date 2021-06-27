import React from 'react';

const TitleCard = ({ children }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="area-title text-center">
          <h2>{children}</h2>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
