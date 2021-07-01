import React, { useState, useEffect } from 'react';
import close from '../assets/img/close.svg';
import mask from './assets/img/mask-3.png';

const PopUp = (visibility, hidePopup) => {
  console.log(visibility.visibility);
  return (
    <>
      <div className="popup_wrapper">
        <div className="popup_box">
          <img src={mask} className="mask_3" alt="img" />
          <div className="container">
            <div className="header_content">
              <h4 className="m-0">THE ANALYST SYNDICATE</h4>
              <img
                src={close}
                className="popup_close"
                alt=""
                onClick={hidePopup}
              />
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
    </>
  );
};
export default PopUp;
