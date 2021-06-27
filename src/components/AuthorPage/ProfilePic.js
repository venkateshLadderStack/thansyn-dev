import React from 'react';

const ProfilePic = ({ imageUrl }) => {
  return (
    <div className="col-lg-6 col-md-12 grid-item" data-aos="fade-up">
      <div className="analust-item-img mt-0 mb-4">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default ProfilePic;
