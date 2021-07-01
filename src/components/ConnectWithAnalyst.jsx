import React from 'react';
import { Link } from 'gatsby';

const ConnectWithAnalyst = () => {
  return (
    <div className="analyst-connect-area">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="analyst-connect">
              <h2>Connect with an analyst.</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
              <br />
              <Link
                to="/connect-with-an-analyst"
                className="common-btn with-bg"
              >
                Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithAnalyst;
