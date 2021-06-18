import React from "react"
const AnalystContent = ({ name, socialIcon, aboutAnalyst,insightTitle,insightText,serviceTitle,serviceText,callBtn}) => {
  return (
    <div class="analust-content">
      <p dangerouslySetInnerHTML={{ __html: aboutAnalyst }} />
      <h4>{insightTitle}</h4>
      <p dangerouslySetInnerHTML={{ __html: insightText }} />
      <h4>{serviceTitle}</h4>
      <p dangerouslySetInnerHTML={{__html:serviceText}}/>
      {callBtn ? (
        <div class="anylust-btn text-center mt_40">
          <a href="#" class="btn bg-succes btn-lg radius-0">
            <img
              class="mr-2"
              src="./assets/img/insight detail/phone.png"
              alt=""
            />
            SCHEDULE A CALL
          </a>
        </div>
      ) : (
        <div class="anylust-btn d-flex align-items-center justify-content-between mt_55">
          <a href="#" class="btn bg-succes btn-group-lg radius-0">
            CONNECT
          </a>
          <a href="" class="btn-line">
            VIEW PROFILE
          </a>
        </div>
      )}
    </div>
  )
}
export default AnalystContent
