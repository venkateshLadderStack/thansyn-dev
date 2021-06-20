import React from 'react';

const EventCard = ({ data }) => {
  console.log(data);
  return (
    <React.Fragment>
      <div
        className="col-xl-6 col-lg-12 col-md-12 mb-lg-2 mb-4"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <div className="what-new-item">
          <div className="whats-top">
            <span className="tags">WEBINAR, 9 APR 2021</span>
            <a href="">
              <img
                src={
                  data.featuredImage.node?.localFile.childImageSharp.fluid.src
                }
                alt=""
              />
            </a>
          </div>
          <div className="whats-bottom">
            <div className="event-more-btn text-center">
              <a href="#">Subscribe to updates </a>
              <a className="bg-Dark" href="#">
                Register on event website{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-xl-6 col-lg-12 col-md-12 mb-lg-2 mb-4"
        data-aos="fade-left"
        data-aos-duration="700"
      >
        <div className="event-webiner">
          <h4>{data.title}</h4>
          <div
            className="sup-titel"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          <div className="event-web-data">
            <p>Date: {data.events.startDate}</p>
            <p>
              Time:<strong> {data.events.time}</strong>
            </p>
            <p>Duration: {data.events.duration}</p>
            <p>Speaker: {data.events.speaker}</p>
            <p>Audience: All business users</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventCard;
