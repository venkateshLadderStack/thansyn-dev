import React from 'react';
import Close from '../assets/img/close.svg';
import Mask from '../assets/img/mask-3.png';
import { Link } from 'gatsby';

const Popup = ({ visibility, hidePopup }) => {
  return (
    <div
      className="popup_wrapper"
      style={{ display: `${visibility ? 'block' : 'none'}` }}
    >
      <div className="popup_box">
        <img src={Mask} className="mask_3" alt="img" />
        <div className="container">
          <div className="header_content">
            <h4 className="m-0">THE ANALYST SYNDICATE</h4>
            <img
              src={Close}
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
                <Link to="/subscribe-to-insights-and-events">
                  Subscribe [Free]
                </Link>
              </button>
              <button type="submit" className="blue_btn popup_btn2">
                <Link to="/connect-with-an-analyst">Connect now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
