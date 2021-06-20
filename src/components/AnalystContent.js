import React from 'react';
const AnalystContent = ({
  name,
  socialIcon,
  aboutAnalyst,
  insightTitle,
  insightText,
  serviceTitle,
  serviceText,
  callBtn,
}) => {
  return (
    <div className="analust-content">
      <p dangerouslySetInnerHTML={{ __html: aboutAnalyst }} />
      <h4>{insightTitle}</h4>
      <p dangerouslySetInnerHTML={{ __html: insightText }} />
      <h4>{serviceTitle}</h4>
      <p dangerouslySetInnerHTML={{ __html: serviceText }} />
      {callBtn ? (
        <div className="anylust-btn text-center mt_40">
          <a href="#" className="btn bg-succes btn-lg radius-0">
            <img
              className="mr-2"
              src="./assets/img/insight detail/phone.png"
              alt=""
            />
            SCHEDULE A CALL
          </a>
        </div>
      ) : (
        <div className="anylust-btn d-flex align-items-center justify-content-between mt_55">
          <a href="#" className="btn bg-succes btn-group-lg radius-0">
            CONNECT
          </a>
          <a href="" className="btn-line">
            VIEW PROFILE
          </a>
        </div>
      )}
    </div>
  );
};
export default AnalystContent;
