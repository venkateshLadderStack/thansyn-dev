import React, { useState } from 'react';
import Analyst from '../components/Analyst';
import Layout from '../components/layout';
import ConnectUs from '../components/ConnectUs';
import { graphql, useStaticQuery, Link } from 'gatsby';
import TitleCard from '../components/TitleCard';
import AnalystDetailsCard from '../components/AnalystPage/AnalystDetailsCard';

const AnalystListing = () => {
  const [showAnalystDetails, setShowAnalystDetails] = useState(null);

  const toggleShow = id => {
    if (showAnalystDetails === id) {
      return setShowAnalystDetails(null);
    }

    setShowAnalystDetails(id);
  };

  const data = useStaticQuery(graphql`
    {
      allWpUser {
        nodes {
          id
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
  const analyst = data.allWpUser.nodes;

  return (
    <Layout>
      <div className="analyst-listing pt_45 overflow-hidden">
        <div className="container">
          <TitleCard>Analysts</TitleCard>
          <div className="row">
            <div className="col-6">
              {analyst
                .slice(0, Math.round(analyst.length / 2))
                .map((item, index) => (
                  <div
                    className="analu-wrapp"
                    onClick={() => toggleShow(item.id)}
                  >
                    <Analyst
                      image={
                        item.about_author_insights.displayPicture?.sourceUrl
                      }
                      name={
                        showAnalystDetails !== item.id &&
                        item.about_author_insights.name
                      }
                    />

                    {showAnalystDetails === item.id && (
                      <AnalystDetailsCard
                        name={item.about_author_insights.name}
                        description={item.description}
                        wroteInsights={item.about_author_insights.wroteInsights}
                        services={item.about_author_insights.services}
                        slug={item.slug}
                      />
                    )}
                  </div>
                ))}
            </div>

            <div className="col-6">
              {analyst.slice(analyst.length - 1 / 2).map((item, index) => (
                <div
                  className="analu-wrapp"
                  onClick={() => toggleShow(item.id)}
                >
                  <Analyst
                    image={item.about_author_insights.displayPicture?.sourceUrl}
                    name={
                      showAnalystDetails !== item.id &&
                      item.about_author_insights.name
                    }
                  />

                  {showAnalystDetails === item.id && (
                    <AnalystDetailsCard
                      name={item.about_author_insights.name}
                      description={item.description}
                      wroteInsights={item.about_author_insights.wroteInsights}
                      services={item.about_author_insights.services}
                      slug={item.slug}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ConnectUs heading="Connect with an analyst." />
    </Layout>
  );
};
export default AnalystListing;
