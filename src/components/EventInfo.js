import React from 'react';
const EventInfo = ({
  title,
  subTitle,
  date,
  time,
  duration,
  speaker,
  audience,
}) => {
  return (
    <div className="event-webiner">
      <h4 dangerouslySetInnerHTML={{ __html: title }} />
      <p className="sup-titel">{subTitle}</p>
      <div className="event-web-data">
        <p>{date}</p>
        <p dangerouslySetInnerHTML={{ __html: time }} />
        <p>{duration}</p>
        <p>{speaker}</p>
        <p>{audience}</p>
      </div>
    </div>
  );
};

export default EventInfo;
