import React from 'react';
const CommunityBox = ({ title, subTitle, image, color }) => {
  return (
    <div className="community-box" style={{ background: color }}>
      <h3>{title}</h3>
      <a href="">
        {' '}
        <h4 dangerouslySetInnerHTML={{ __html: subTitle }} />
      </a>
      <img className="mask" src={image} alt="" />
    </div>
  );
};

export default CommunityBox;
