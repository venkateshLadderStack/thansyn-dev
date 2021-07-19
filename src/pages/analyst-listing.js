import React, { useState } from 'react';
import Analyst from '../components/Analyst';
import Layout from '../components/layout';
import ConnectUs from '../components/ConnectUs';
import { graphql, useStaticQuery, Link } from 'gatsby';
import TitleCard from '../components/TitleCard';
import AnalystDetailsCard from '../components/AnalystPage/AnalystDetailsCard';
import SEO from '../components/seo';

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
          name
          about_author_insights {
            displayPicture {
              sourceUrl
            }

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
  const analyst = data.allWpUser.nodes;

  const leftAnalysts = analyst.slice(0, Math.round(analyst.length / 2));
  const rightSide = analyst.slice(analyst.length / 2);
  const rightOne = rightSide[0];
  const rightAnalysts =
    leftAnalysts[leftAnalysts.length - 1] === rightOne
      ? rightSide.filter(arr => arr !== rightOne)
      : rightSide;

  return (
    <Layout>
      <SEO title="Our analysts" />
      <div className="analyst-listing pt_45 overflow-hidden">
        <div className="container">
          <TitleCard>Analysts</TitleCard>
          <div className="row">
            <div className="col-6">
              {leftAnalysts.map((item, index) => (
                <div
                  className="analu-wrapp"
                  onClick={() => setTimeout(() => toggleShow(item.id), 200)}
                >
                  <Analyst
                    image={item.about_author_insights.displayPicture?.sourceUrl}
                    name={showAnalystDetails !== item.id && item.name}
                  />

                  {showAnalystDetails === item.id && (
                    <AnalystDetailsCard
                      name={item.name}
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
              {rightAnalysts.map((item, index) => (
                <div
                  className="analu-wrapp"
                  onClick={() => setTimeout(() => toggleShow(item.id), 200)}
                >
                  <Analyst
                    image={item.about_author_insights.displayPicture?.sourceUrl}
                    name={showAnalystDetails !== item.id && item.name}
                  />

                  {showAnalystDetails === item.id && (
                    <AnalystDetailsCard
                      name={item.name}
                      description={item.description}
                      wroteInsights={item.about_author_insights.wroteInsights}
                      services={item.about_author_insights.services}
                      slug={item.slug}
                      facebook={item.about_author_insights?.facebookLink}
                      twitter={item.about_author_insights?.twitterLink}
                      instagram={item.about_author_insights?.instagramLink}
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
