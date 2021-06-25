import React, { useState } from 'react';
import Analyst from '../components/Analyst';
import Layout from '../components/layout';
import ConnectUs from '../components/ConnectUs';
import { graphql, useStaticQuery, Link } from 'gatsby';

const AnalystListing = () => {
  const [showAnalystDetails, setShowAnalystDetails] = useState(null);

  const toggleShow = id => {
    if (showAnalystDetails === id) setShowAnalystDetails(null);

    setShowAnalystDetails(id);
  };

  const data = useStaticQuery(graphql`
    {
      allWpUser {
        nodes {
          about_author_insights {
            displayPicture {
              sourceUrl
            }
            name
            twitterLink
            wroteInsights {
              insightName
            }
            services {
              services
            }
            facebookLink
            instagramLink
          }
          name
          description
          slug
        }
      }
    }
  `);
  console.log(data);

  return (
    <Layout>
      <div className="analyst-listing pt_45 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="area-title  text-center ">
                <h2>Analysts</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {data.allWpUser.nodes?.map((item, index) => (
              <div
                className="col-xl-6 col-lg-12 col-md-12 mb-lg-4"
                data-aos="fade-up"
                data-aos-delay="400"
                onClick={() => toggleShow(index)}
              >
                <div className="analu-wrapp">
                  <Analyst
                    image={item.about_author_insights.displayPicture?.sourceUrl}
                    name={
                      showAnalystDetails !== index &&
                      item.about_author_insights.name
                    }
                  />
                  {showAnalystDetails === index && (
                    <div
                      className="analust-content"
                      style={{
                        marginTop: '-25px',
                        transition: '1s ease-out',
                      }}
                    >
                      <h2>{item.about_author_insights.name}</h2>
                      <ul className="social-list d-flex">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter twitter"></i>
                          </a>
                        </li>
                      </ul>
                      <p>{item.description}</p>
                      <h4>Wrote insights on</h4>
                      {item.about_author_insights.wroteInsights.map(
                        (data, index) => (
                          <p>{data.insightName}</p>
                        )
                      )}

                      <h4>Services</h4>
                      {item.about_author_insights.services.map(
                        (data, index) => (
                          <p>{data.services}</p>
                        )
                      )}

                      <div className="anylust-btn d-flex align-items-center justify-content-between mt_55">
                        <a
                          href="#"
                          className="btn bg-succes btn-group-lg radius-0"
                        >
                          CONNECT
                        </a>
                        <Link to={`/author/${item.slug}`} className="btn-line">
                          VIEW PROFILE
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ConnectUs heading="Connect with an analyst." />
    </Layout>
  );
};
export default AnalystListing;
