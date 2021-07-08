import React from 'react';
import TopHeading from '../components/TopHeading';
import Layout from '../components/layout';
import ConnectUs from '../components/ConnectUs';
import { graphql, Link } from 'gatsby';
import EventCard from '../components/EventCard';
import Seo from '../components/seo';

const UpcomingEvent = ({ data }) => {
  return (
    <Layout>
       <Seo title="upcoming events" />
      <div className="upcoming-events pt_45 overflow-hidden">
        <div className="container">
          <div className="row">
            <TopHeading title="Upcoming events <br />(virtual)" />
          </div>
          <div className="row">
            {data.allWpEvent.nodes.map((item, index) => (
              <EventCard data={item} key={item.id} />
            ))}
          </div>
          <div className="common-btn-enent pt_40" data-aos="fade-left">
            <Link to="/past-events" className="analyst-connect">
              See past events
            </Link>
          </div>
        </div>
      </div>
      <ConnectUs heading="Connect with an analyst." />
    </Layout>
  );
};

export default UpcomingEvent;

export const EventsQuery = graphql`
  query PastEvents {
    allWpEvent(
      sort: { fields: date, order: DESC }
      filter: { events: { presentPast: { eq: "present" } } }
    ) {
      nodes {
        date
        events {
          audeience
          endDate
          presentPast
          register
          speaker
          startDate
          startTime
          endTime
          timeFormat
        }
        id
        title
        date
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
