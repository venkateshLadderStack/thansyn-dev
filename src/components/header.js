import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <div className="header-top-area">
    <div className="container-fluid">
      <div className="row align-items-center form-row">
        <div className="col-lg-3 col-md-3 col-3">
          <div className="social-icon">
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-7">
          <div className="header-top-txt text-center">
            <h4>THE ANALYST SYNDICATE</h4>
          </div>
        </div>
        <div className="col-2 toggle-position d-md-none">
          <div className="menu-trigger text-right">
            <i className="fal fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
    <a href="#" className="talk-btn d-none d-md-flex">
      <i className="fal fa-comment-alt-lines"></i>LET’S TALK
    </a>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
