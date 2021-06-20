import React from 'react';
import WidgetBox from './WidgetBox';
const Footer = () => {
  const data = {
    business: {
      title: 'FOR BUSINESS LEADERS',
      items: [
        {
          path: '#',
          label: 'Get advice & evaluations',
        },
        {
          path: '#',
          label: 'Get advice on future shifts',
        },
        {
          path: '#',
          label: 'Get advice on technology',
        },
        {
          path: '#',
          label: 'Assess cost of new investments',
        },
        {
          path: '#',
          label: 'Join the CIO/CISO success council',
        },
        {
          path: '#',
          label: 'Other ..',
        },
      ],
    },
    service: {
      title: 'FOR SERVICE PROVIDERS',
      items: [
        {
          path: '#',
          label: 'Give a brief',
        },
        {
          path: '#',
          label: 'Connect with analysts',
        },
        {
          path: '#',
          label: 'Engage analyst-influencers',
        },
        {
          path: '#',
          label: 'Assess cost of new investments',
        },
        {
          path: '#',
          label: 'Sponsor an event (webinar/podcast)',
        },
        {
          path: '#',
          label: 'Join the CMO success council',
        },
        {
          path: '#',
          label: 'Other ..',
        },
      ],
    },
    analyst: {
      title: 'FOR ANALYSTS',
      items: [
        {
          path: '#',
          label: 'Build your brand',
        },
        {
          path: '#',
          label: 'Contribute insights',
        },
        {
          path: '#',
          label: 'Collaborate on research',
        },
        {
          path: '#',
          label: 'Join the community',
        },
        {
          path: '#',
          label: 'Get opportunities',
        },
        {
          path: '#',
          label: 'Other ..',
        },
      ],
    },
  };
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-12">
              <div className="footer-left pb-5">
                <h4>THE ANALYST SYNDICATE</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="social-icon">
                  <ul>
                    <li>
                      <a href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 pl-xl-5 col-md-12">
              <div className="row justify-content-between footer_row">
                <div className="col-lg-4 col-md-4 col-sm-6 footer-link footer_gap_1">
                  <WidgetBox
                    title={data.business.title}
                    items={data.business.items}
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 footer-link footer_gap_2">
                  <WidgetBox
                    title={data.service.title}
                    items={data.service.items}
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 footer-link footer_gap_3">
                  <WidgetBox
                    title={data.analyst.title}
                    items={data.analyst.items}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mt-3">
              <ul className="footer-menu">
                <li>
                  <a href="">Privacy Policy </a>
                </li>
                <li>
                  <a href="">Terms Conditions</a>
                </li>
                <li>
                  <a href="">Disclaimers</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8 pl-xl-5 mt-3">
              <p className="copyright">
                Copyright @2021. The Analyst Syndicate. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
