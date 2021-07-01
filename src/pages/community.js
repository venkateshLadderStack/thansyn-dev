import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import CommunityCard from '../components/CommunityPage/CommunityCard';
import CommunityImageCard from '../components/CommunityPage/CommunityImageCard';
import CommunityTextCard from '../components/CommunityPage/CommunityTextCard';
import TitleCard from '../components/TitleCard';
import ConnectUs from '../components/ConnectUs';
import Layout from '../components/layout';

const Community = () => {
  const data = useStaticQuery(graphql`
    {
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
      wpPage(id: { eq: "cG9zdDozODA=" }) {
        title
        communityPage {
          communityPageData {
            ourResponsibilities
            ourResponsibilitiesBackground
            ourValues
            ourValuesBackground
            image1Label
            image2Label
            communityImage2 {
              sourceUrl
            }
            communityImage1 {
              sourceUrl
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="community-wrapp pt_45 overflow-hidden">
        <div className="container">
          <TitleCard>
            Join our community of <br /> thought leaders
          </TitleCard>
          <div className="row">
            {data.allWpCommunity.nodes.map((item, index) => (
              <CommunityCard
                title={item.title}
                imageUrl={
                  item.featuredImage?.node?.localFile?.childImageSharp?.fluid
                    .src
                }
                badge={item.community.badge}
                key={index}
              />
            ))}

            <CommunityTextCard
              title="Our responsibilties"
              content={
                data.wpPage.communityPage.communityPageData[0]
                  .ourResponsibilities
              }
            />
            <CommunityTextCard
              title="Our values"
              content={data.wpPage.communityPage.communityPageData[0].ourValues}
            />

            <CommunityImageCard
              imageUrl={
                data.wpPage.communityPage.communityPageData[0]?.communityImage1
                  ?.sourceUrl
              }
              label={
                data.wpPage.communityPage.communityPageData[0]?.image1Label
              }
            />
            <CommunityImageCard
              imageUrl={
                data.wpPage.communityPage.communityPageData[0]?.communityImage2
                  ?.sourceUrl
              }
              label={
                data.wpPage.communityPage.communityPageData[0]?.image2Label
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
