import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ConnectUs from '../components/ConnectUs';
import Layout from '../components/layout';

const Community = () => {
  const data = useStaticQuery(graphql`
    {
      allWpCommunity {
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
          <div className="row">
            <div className="col-lg-12">
              <div className="area-title text-center">
                <h2>
                  Join our community of <br />
                  thought leaders
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {data.allWpCommunity.nodes.map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <div className="what-new-item">
                  <div className="whats-top">
                    <span className="tags">{item.community.badge}</span>
                    <a href="">
                      <img
                        src={
                          item.featuredImage?.node?.localFile?.childImageSharp
                            ?.fluid.src
                        }
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="whats-bottom">
                    <div className="whats-text">
                      <a href="">
                        <h4>{item.title}</h4>
                      </a>
                      <a className="btn-line line-black" href="">
                        REQUEST TO JOIN
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="card-item car-item-three">
                <div className="card-content">
                  <h4>Our responsibility</h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        data.wpPage.communityPage.communityPageData[0]
                          .ourResponsibilities,
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="card-item car-item-two">
                <div className="card-content">
                  <h4>Our values</h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        data.wpPage.communityPage.communityPageData[0]
                          .ourValues,
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="card-images-box mb-4">
                <img
                  src={
                    data.wpPage.communityPage.communityPageData[0]
                      ?.communityImage1?.sourceUrl
                  }
                  alt=""
                />
                <div className="shap"></div>
                <div className="card-body-content">
                  <h4>
                    {
                      data.wpPage.communityPage.communityPageData[0]
                        ?.image1Label
                    }
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="card-images-box">
                <img
                  src={
                    data.wpPage.communityPage.communityPageData[0]
                      ?.communityImage2?.sourceUrl
                  }
                  alt=""
                />
                <div className="shap"></div>
                <div className="card-body-content">
                  <h4>
                    {
                      data.wpPage.communityPage.communityPageData[0]
                        ?.image2Label
                    }
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConnectUs heading={'Need an Analyst'} />
    </Layout>
  );
};

export default Community;
