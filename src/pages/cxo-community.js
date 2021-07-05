import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import TitleCard from '../components/TitleCard';
import CommunityTextCard from '../components/CommunityPage/CommunityTextCard';
import CommunityImageCard from '../components/CommunityPage/CommunityImageCard';

const CxoCommunity = ({ data }) => {
  return (
    <Layout>
      <div className="community-wrapp pt_45 overflow-hidden">
        <div className="container">
          <TitleCard>
            Join our community of <br />
            thought leaders
          </TitleCard>

          <div className="row">
            {data.allWpCommunity.nodes.map(node => (
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <div className="what-new-item">
                  <div className="whats-top">
                    <span className="tags">
                      {node.community?.badge.toUpperCase()}
                    </span>
                    <Link to="/subscribe-to-insights-and-events">
                      <img
                        src={
                          node.featuredImage?.node?.localFile?.childImageSharp
                            ?.fluid.src
                        }
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="whats-bottom">
                    <div className="whats-text">
                      <div>
                        <h4>{node.title}</h4>
                      </div>
                      <Link
                        className="btn-line line-black"
                        to="/subscribe-to-insights-and-events"
                      >
                        REQUEST TO JOIN
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

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
      </div>
    </Layout>
  );
};

export default CxoCommunity;

export const query = graphql`
  query communitiesPosts {
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
`;
