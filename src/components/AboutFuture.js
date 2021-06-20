import React from 'react';
const AboutFuture = ({ data, class1 }) => {
  return (
    <>
      {data.map((item, index) => (
        <div className={`col-lg-6 col-md-6 ${class1}`}>
          <div
            className="about-future"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <h4>{item.heading}</h4>
            <p>{item.description}</p>
          </div>

          <div
            className="about-bg"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <img src={item.image} alt="about-us" />
            <div className="about-bg-content">
              <h3>{item.founder}</h3>
              <ul className="social-list d-flex">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-contact">
            <h4>{item.contactHeading}</h4>
            <div className="contact-list d-flex ">
              <i className="fas fa-phone-square"></i>
              <div className="contact-tab">
                <p>{item.contactNo}</p>
              </div>
            </div>
            <div className="contact-list d-flex">
              <i className="fas fa-envelope"></i>
              <div className="contact-tab">
                <p>{item.email}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutFuture;
