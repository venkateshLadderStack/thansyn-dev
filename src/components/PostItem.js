import React from 'react';
import { Link } from 'gatsby';
const PostItem = ({
  tags,
  image,
  date,
  time,
  icon,
  heading,
  description,
  readBtn,
  event,
  eventInfo,
  registerDate,
  registerText,
  registerBtn,
}) => {
  return (
    <div className="what-new-item">
      <div className="whats-top">
        <span className="tags">{tags.toUpperCase()}</span>
        <a href="">
          <img src={image} alt="" />
        </a>
      </div>
      <div className="whats-bottom">
        {event ? (
          <div className="event-more-btn text-center">
            <a href="#">Subscribe to updates </a>
            <a className="bg-Dark" href="#">
              Register on event website{' '}
            </a>
          </div>
        ) : (
          <>
            <ul className="post-info">
              <li>
                <a href="">{date}</a>
              </li>
              <li>
                <a href="">
                  <i className={icon}></i>
                  {time}
                </a>
              </li>
            </ul>
            {eventInfo ? (
              <div className="event-info">
                <div className="event-txt">
                  <h4>{registerDate}</h4>
                  <span>{registerText}</span>
                </div>
                <div className="event-btn">
                  <a className="btn-line" href="">
                    {registerBtn}
                  </a>
                </div>
              </div>
            ) : (
              <div className="whats-text">
                <Link to={readBtn}>
                  <h4>{heading}</h4>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: description }} />

                <Link className="btn-line line-black" to={readBtn}>
                  Read Insight
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PostItem;
