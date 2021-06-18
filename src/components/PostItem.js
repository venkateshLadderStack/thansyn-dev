import React from "react"
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
  registerBtn
}) => {
  return (
    <div class="what-new-item">
      <div class="whats-top">
        <span class="tags">{tags}</span>
        <a href="">
          <img src={image} alt="" />
        </a>
      </div>
      <div class="whats-bottom">
        {event ? (
          <div class="event-more-btn text-center">
            <a href="#">Subscribe to updates </a>
            <a class="bg-Dark" href="#">
              Register on event website{" "}
            </a>
          </div>
        ) : (
          <>
            <ul class="post-info">
              <li>
                <a href="">{date}</a>
              </li>
              <li>
                <a href="">
                  <i class={icon}></i>
                  {time}
                </a>
              </li>
            </ul>
            {eventInfo?
            <div class="event-info">
            <div class="event-txt">
                <h4>{registerDate}</h4> 
                <span>{registerText}</span>
            </div>
            <div class="event-btn">
                <a class="btn-line" href="">{registerBtn}</a>
            </div>
         </div>:
            <div class="whats-text">
              <a href="">
                <h4>{heading}</h4>
              </a>
              <p>{description} </p>

              <a class="btn-line line-black" href="">
                {readBtn}
              </a>
            </div>
}
          </>
        )}
      </div>
    </div>
  )
}

export default PostItem
