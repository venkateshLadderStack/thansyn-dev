import React from 'react';

const TopHeading = ({ title }) => {
  return (
    <div className="col-lg-12">
      <div className="area-title text-center">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </div>
  );
};

export default TopHeading;
