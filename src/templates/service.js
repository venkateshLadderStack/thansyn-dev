import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import ConnectUs from '../components/ConnectUs';
import TitleCard from '../components/TitleCard';
import LeftAlignCard from '../components/ServicePage/LeftAlignCard';
import RightAlignCard from '../components/ServicePage/RightAlignCard';
import FounderDetailCard from '../components/ServicePage/FounderDetailCard';

const service = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div></div>
      <div className="home-services overflow-hidden pt_45">
        <div className="container">
          <TitleCard>
            Opening the world to <br />
            the world’s best
          </TitleCard>

          <div className="row">
            {data.wpPage.servicePageAcf.serviceBlocks.map((item, index) => (
              <>
                {item.imagePlacement === 'left' ? (
                  <LeftAlignCard item={item} key={index} />
                ) : (
                  <RightAlignCard item={item} key={index} />
                )}
              </>
            ))}
            <FounderDetailCard
              title="Who we are"
              content={data.wpPage.servicePageAcf.whoAreWe}
              imageUrl={
                data.wpPage.servicePageAcf.founderData[0]?.foundersImage
                  ?.sourceUrl
              }
              name={
                data.wpPage.servicePageAcf?.founderData[0].name || 'Founder-1'
              }
            />
            <FounderDetailCard
              title="The future shift"
              content={data.wpPage.servicePageAcf.futureShift}
              imageUrl={
                data.wpPage.servicePageAcf?.founderData[1]?.foundersImage
                  ?.sourceUrl
              }
              name={
                data.wpPage.servicePageAcf?.founderData[1].name || 'Founder-2'
              }
            />
          </div>
        </div>
      </div>
      <ConnectUs heading={'contact us'} />
    </Layout>
  );
};

export default service;

export const query = graphql`
  query ServicePage($id: String!) {
    wpPage(id: { eq: $id }) {
      servicePageAcf {
        whoAreWe
        futureShift
        founderData {
          name
          foundersImage {
            sourceUrl
          }
        }
        serviceBlocks {
          buttonColor
          content
          imagePlacement
          title
          buttonText {
            target
            title
            url
          }
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;
