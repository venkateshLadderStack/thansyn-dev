import React from 'react';

const CredentialsCard = ({ credentials }) => {
  return (
    <div className="col-lg-6 col-md-12 mb-4 grid-item" data-aos="fade-up">
      <div className="about-future mt-0 mb-4">
        <h4>{credentials[0].credentialsTitle}</h4>
        <p
          dangerouslySetInnerHTML={{
            __html: credentials[0].credentialsContent,
          }}
        />
      </div>
      <div className="anylust-btn text-center mt_40">
        <a href="#" className="btn bg-succes btn-lg radius-0">
          Connect with an analyst
        </a>
      </div>
    </div>
  );
};

export default CredentialsCard;
