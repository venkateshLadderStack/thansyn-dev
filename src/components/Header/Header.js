import React, { useState, useEffect } from 'react';
import close from '../../assets/img/close.svg';
import { Link } from 'gatsby';
import { insights, services, community, events } from './headerData';
import HeaderDropdown from './HeaderInsightsDropdown';
import HeaderListDropdown from './HeaderListDropdown';
import Logo from '../../assets/img/logoANA.png';

const Header = () => {
  const [showSidemenu, setShowSideMenu] = useState(false);

  const handleShow = e => {
    e.preventDefault();
    setShowSideMenu(true);
  };

  const handleHide = e => {
    e.preventDefault();
    setShowSideMenu(false);
  };

  useEffect(() => {
    setShowSideMenu(false);
  }, []);

  return (
    <>
      {/* <!-- Header-Top-Area Start  --> */}
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
                <img src={Logo} alt="logo" style={{ height: '60px' }} />
              </div>
            </div>
            <div className="col-2 toggle-position d-md-none">
              <div className="menu-trigger" onClick={handleShow}>
                <i className="fal fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
        <Link to="/contact-us" className="talk-btn d-none d-md-flex">
          <i className="fal fa-comment-alt-lines"></i>LET’S TALK
        </Link>
      </div>
      {/* <!-- Header-Top-Area End  -->

    <!-- Mainmenu-Area Start --> */}
      <div className="mainmenu-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-1 col-2 toggle-position d-none d-md-block">
              <div className="menu-trigger">
                <i className="fal fa-bars"></i>
              </div>
            </div>
            <div className="col-lg-8 col-md-10 col-10">
              <div className={`mainmenu ${showSidemenu && 'show-menu'}`}>
                <ul>
                  {/* home */}
                  <li>
                    <Link activeClassName="active" to="/">
                      Home
                    </Link>
                  </li>

                  {/* insights */}
                  <li className="dropdown drop_main">
                    <Link
                      to="/insight-categories"
                      activeClassName="active"
                      data-toggle="dropdown"
                    >
                      Insights
                    </Link>
                    <HeaderDropdown />
                  </li>

                  {/* services */}
                  <li className="dropdown drop_main">
                    <Link
                      to="/service"
                      activeClassName="active"
                      data-toggle="dropdown"
                    >
                      Services
                    </Link>
                    <HeaderListDropdown menus={services} />
                  </li>

                  {/* community */}
                  <li className="dropdown drop_main">
                    <Link
                      to="/community"
                      activeClassName="active"
                      data-toggle="dropdown"
                    >
                      Community
                    </Link>
                    <HeaderListDropdown menus={community} />
                  </li>

                  {/* events */}
                  <li className="dropdown drop_main">
                    <Link
                      to="/upcoming-events"
                      activeClassName="active"
                      data-toggle="dropdown"
                    >
                      Events
                    </Link>
                    <HeaderListDropdown menus={events} />
                  </li>

                  {/* about us */}
                  <li>
                    <Link activeClassName="active" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="d-md-none">
                    <Link to="/connect-with-an-analyst">Let's Talk</Link>
                  </li>
                </ul>
                <div className="close-menu" onClick={handleHide}>
                  <img src={close} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
