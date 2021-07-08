import React from 'react';

const ProfilePic = ({ imageUrl }) => {
  return (
    <div className="col-lg-6 col-md-12 grid-item" data-aos="fade-up">
      <div className="analust-item-img mt-0 mb-4">
        <img width="100%" height="100%" src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default ProfilePic;
