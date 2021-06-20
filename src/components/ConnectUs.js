import React from 'react';
const ConnectUs = ({ heading }) => {
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
              <h2>{heading}</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
              <br />
              <a className="common-btn with-bg" href="">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConnectUs;
