import { graphql } from 'gatsby';
import React from 'react';
import CommunityCard from '../components/CommunityPage/CommunityCard';
import CommunityImageCard from '../components/CommunityPage/CommunityImageCard';
import CommunityTextCard from '../components/CommunityPage/CommunityTextCard';
import TitleCard from '../components/TitleCard';
import ConnectUs from '../components/ConnectUs';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Community = ({ data }) => {
  return (
    <Layout>
      <SEO title="CXO Community" />
      <div className="community-wrapp pt_45 overflow-hidden">
        <div className="container">
          <TitleCard>
            Join our community of <br /> thought leaders
          </TitleCard>
          <div className="row">
            {data.allWpCommunity?.nodes.map((item, index) => (
              <CommunityCard
                key={index}
                title={item?.title}
                imageUrl={
                  item.featuredImage?.node?.localFile?.childImageSharp?.fluid
                    .src
                }
                badge={item.community?.badge}
              />
            ))}
          </div>
          <div className="row">
            <CommunityTextCard
              title="Our responsibilties"
              content={
                data.wpPage?.communityPage?.communityPageData[0]
                  .ourResponsibilities
              }
            />
            <CommunityTextCard
              title="Our values"
              content={
                data.wpPage?.communityPage?.communityPageData[0].ourValues
              }
            />
          </div>
          <div className="row">
            <CommunityImageCard
              imageUrl={
                data.wpPage?.communityPage?.communityPageData[0]
                  ?.communityImage1?.sourceUrl
              }
              label={
                data.wpPage?.communityPage?.communityPageData[0]?.image1Label
              }
            />
            <CommunityImageCard
              imageUrl={
                data.wpPage?.communityPage?.communityPageData[0]
                  ?.communityImage2?.sourceUrl
              }
              label={
                data.wpPage?.communityPage?.communityPageData[0]?.image2Label
              }
            />
          </div>
        </div>
      </div>
      <ConnectUs heading={'Need an Analyst'} />
    </Layout>
  );
};

export default Community;

export const query = graphql`
  query communityPosts {
    allWpCommunity(sort: { fields: date, order: DESC }) {
      nodes {
        title
        community {
          fieldGroupName
          badge
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    wpPage {
      communityPage {
        communityPageData {
          image1Label
          image2Label
          ourResponsibilities
          ourResponsibilitiesBackground
          ourValues
          ourValuesBackground
          communityImage1 {
            sourceUrl
          }
          communityImage2 {
            sourceUrl
          }
        }
      }
    }
  }
`;
