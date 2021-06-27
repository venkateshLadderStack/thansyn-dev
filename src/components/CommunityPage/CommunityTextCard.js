import React from 'react';

const CommunityTextCard = ({ title, content }) => {
  return (
    <div
      className="col-lg-6 col-md-6"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="card-item car-item-three">
        <div className="card-content">
          <h4>{title}</h4>
          <p
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityTextCard;
