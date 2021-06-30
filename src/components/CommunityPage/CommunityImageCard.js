import React from 'react';

const CommunityImageCard = ({ imageUrl, label }) => {
  return (
    <div
      className="col-lg-6 col-md-6"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="card-images-box mb-4">
        <img src={imageUrl} alt="" />
        <div className="shap"></div>
        <div className="card-body-content">
          <h4>{label}</h4>
        </div>
      </div>
    </div>
  );
};

export default CommunityImageCard;
