import React from 'react';

const HighlightsCard = ({ highlights, Mask }) => {
  return (
    <div className="col-lg-6 col-md-12  grid-item" data-aos="fade-up">
      <div
        className="about-future anylist-two mt-0 mb-4"
        style={{
          backgroundColor: `${highlights[0]?.backgroundColor}`,
        }}
      >
        <span className="shap-anylise">
          <img
            src={(highlights && highlights[0]?.bgImage?.sourceUrl) || Mask}
            alt=""
          />
        </span>
        <h4>Highlights</h4>
        <p
          dangerouslySetInnerHTML={{
            __html: highlights && highlights[0].highlights,
          }}
        />
      </div>
    </div>
  );
};

export default HighlightsCard;
