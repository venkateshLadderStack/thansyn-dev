import React from 'react';

const Analyst = ({ image, name }) => {
  return (
    <div className="card-images-box mb-4">
      <img src={image} alt="" />
      <div className="shap"></div>
      <div className="card-body-content">
        <h4>{name}</h4>
      </div>
    </div>
  );
};
export default Analyst;
