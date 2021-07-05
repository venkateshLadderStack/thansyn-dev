import React from 'react';
import TopHeading from '../components/TopHeading';
import Layout from '../components/layout';
import ConnectUs from '../components/ConnectUs';
import { graphql } from 'gatsby';
import EventCard from '../components/EventCard';
import Seo from '../components/seo';

const PastEvent = ({ data }) => {
  return (
    <Layout>
       <Seo title="Past events" />
      <div className="upcoming-events pt_45 overflow-hidden">
        <div className="container">
          <div className="row">
            <TopHeading title="Past events <br />(virtual)" />
          </div>
          <div className="row">
            {data.allWpEvent.nodes.map((item, index) => (
              <EventCard data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <ConnectUs heading="Connect with an analyst." />
    </Layout>
  );
};

export default PastEvent;

export const EventsQuery = graphql`
  query events {
    allWpEvent(
      sort: { fields: date, order: DESC }
      filter: { events: { presentPast: { eq: "past" } } }
    ) {
      nodes {
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
