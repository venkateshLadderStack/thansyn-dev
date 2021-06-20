import React from 'react';
const hadleLoad = () => {};
const PopUp = () => {
  return (
    <div className="popup_wrapper">
      <div className="popup_box">
        <img src="./assets/img/mask-3.png" className="mask_3" alt="img" />
        <div className="container">
          <div className="header_content">
            <h4 className="m-0">THE ANALYST SYNDICATE</h4>
            <img src="./assets/img/close.svg" className="popup_close" alt="" />
          </div>
          <div className="main_content">
            <h2>
              Get insights from <br /> the world’s leading analysts
            </h2>
            <div className="btn_group">
              <button type="submit" className="blue_btn popup_btn">
                Subscribe [Free]
              </button>
              <button type="submit" className="blue_btn popup_btn2">
                Connect now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopUp;
