import React from "react"
import TopHeading from "../components/TopHeading"
import PostItem from "../components/PostItem"
import EventInfo from "../components/EventInfo"
import Layout from "../components/layout"
import eventImage from "../components/assets/img/upcoming events/1.png"
import ConnectUs from "../components/ConnectUs"
const UpcomingEvent = () => {
  const eventData = [
    {
      newItem: {
        tags: "WEBINAR, 9 APR 2021",
        image: eventImage,
      },
      event: {
        title: "Masterclass:<br />About this webinar",
        subTitle:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
        date: "Date: 15th Apr 2021",
        time: "Time:<strong>3 PM - 4:30 PM, PDT",
        duration: "Duration: 90 minutes",
        speaker: "Speaker: John Doe, Dave Matthews",
        audience: "Audience: All business users",
      },
    },
    {
      newItem: {
        tags: "WEBINAR, 9 APR 2021",
        image: eventImage,
      },
      event: {
        title: "Masterclass:<br />About this webinar",
        subTitle:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
        date: "Date: 15th Apr 2021",
        time: "Time:<strong>3 PM - 4:30 PM, PDT",
        duration: "Duration: 90 minutes",
        speaker: "Speaker: John Doe, Dave Matthews",
        audience: "Audience: All business users",
      },
    },
    {
      newItem: {
        tags: "WEBINAR, 9 APR 2021",
        image: eventImage,
      },
      event: {
        title: "Masterclass:<br />About this webinar",
        subTitle:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
        date: "Date: 15th Apr 2021",
        time: "Time:<strong>3 PM - 4:30 PM, PDT",
        duration: "Duration: 90 minutes",
        speaker: "Speaker: John Doe, Dave Matthews",
        audience: "Audience: All business users",
      },
    },
    {
      newItem: {
        tags: "WEBINAR, 9 APR 2021",
        image: eventImage,
      },
      event: {
        title: "Masterclass:<br />About this webinar",
        subTitle:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
        date: "Date: 15th Apr 2021",
        time: "Time:<strong>3 PM - 4:30 PM, PDT",
        duration: "Duration: 90 minutes",
        speaker: "Speaker: John Doe, Dave Matthews",
        audience: "Audience: All business users",
      },
    },
  ]
  return (
    <Layout>
      <div class="upcoming-events pt_45 overflow-hidden">
        <div class="container">
          <div class="row">
            <TopHeading title="Upcoming events <br />(virtual)" />
          </div>
          <div class="row">
            {eventData.map((item, index) => (
              <>
                <div
                  class="col-xl-6 col-lg-12 col-md-12 mb-lg-2 mb-4"
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <PostItem
                    event
                    tags={item.newItem.tags}
                    image={item.newItem.image}
                  />
                </div>
                <div
                  class="col-xl-6 col-lg-12 col-md-12 mb-lg-2 mb-4"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <EventInfo
                    title={item.event.title}
                    subTitle={item.event.subTitle}
                    date={item.event.date}
                    time={item.event.time}
                    duration={item.event.duration}
                    speaker={item.event.speaker}
                    audience={item.event.audience}
                  />
                </div>
              </>
            ))}
          </div>
          <div class="common-btn-enent pt_40" data-aos="fade-left">
            <a href="/past-events" class="analyst-connect">
              See past events
            </a>
          </div>
        </div>
      </div>
      <ConnectUs heading="Connect with an analyst." />
    </Layout>
  )
}

export default UpcomingEvent
