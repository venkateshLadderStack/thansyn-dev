import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import ConnectUs from '../components/ConnectUs';
import TitleCard from '../components/TitleCard';
import LeftAlignCard from '../components/ServicePage/LeftAlignCard';
import RightAlignCard from '../components/ServicePage/RightAlignCard';
import FounderDetailCard from '../components/ServicePage/FounderDetailCard';
import DelayPopup from '../components/DelayPopup';
import ConnectWithAnalyst from '../components/ConnectWithAnalyst';

const Service = ({ data }) => {
  const [popupVisibilty, setPopupVisibility] = useState(false);

  useEffect(() => {
    setTimeout(() => setPopupVisibility(true), 5000);
  }, []);

  return (
    <Layout>
      <DelayPopup
        visibility={popupVisibilty}
        hidePopup={() => setPopupVisibility(false)}
      />
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
              content={data.wpPage.servicePageAcf?.aboutWhoAreWe}
              imageUrl={
                data.wpPage.servicePageAcf.founderData[0]?.foundersImage
                  ?.sourceUrl
              }
              name={
                data.wpPage.servicePageAcf?.founderData[0].name || 'Founder-1'
              }
              facebook={data.wpPage.servicePageAcf?.founderData[0]?.facebook}
              twitter={data.wpPage.servicePageAcf?.founderData[0]?.twitter}
              insta={data.wpPage.servicePageAcf?.founderData[0]?.instagram}
            />
            <FounderDetailCard
              title="The future shift"
              content={data.wpPage.servicePageAcf?.futureShift}
              imageUrl={
                data.wpPage.servicePageAcf?.founderData[1]?.foundersImage
                  ?.sourceUrl
              }
              name={
                data.wpPage.servicePageAcf?.founderData[1].name || 'Founder-2'
              }
              facebook={data.wpPage.servicePageAcf?.founderData[1]?.facebook}
              twitter={data.wpPage.servicePageAcf?.founderData[1]?.twitter}
              insta={data.wpPage.servicePageAcf?.founderData[1]?.instagram}
            />
          </div>
        </div>
      </div>
      <ConnectWithAnalyst />
    </Layout>
  );
};

export default Service;

export const query = graphql`
  query ServicePage($id: String!) {
    wpPage(id: { eq: $id }) {
      servicePageAcf {
        aboutWhoAreWe
        futureShift
        founderData {
          name
          facebook
          instagram
          twitter
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
