import React from "react"
const AboutFuture = ({ data,class1 }) => {
  return (
    <>
      {data.map((item, index) => (
        <div class={`col-lg-6 col-md-6 ${class1}`}>
          <div
            class="about-future"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <h4>{item.heading}</h4>
            <p>{item.description}</p>
          </div>

          <div class="about-bg" data-aos="fade-right" data-aos-duration="900">
            <img src={item.image} alt="about-us" />
            <div class="about-bg-content">
              <h3>{item.founder}</h3>
              <ul class="social-list d-flex">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="about-contact">
            <h4>{item.contactHeading}</h4>
            <div class="contact-list d-flex ">
              <i class="fas fa-phone-square"></i>
              <div class="contact-tab">
                <p>{item.contactNo}</p>
              </div>
            </div>
            <div class="contact-list d-flex">
              <i class="fas fa-envelope"></i>
              <div class="contact-tab">
                <p>{item.email}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default AboutFuture
