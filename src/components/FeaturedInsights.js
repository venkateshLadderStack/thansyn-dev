import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import TitleCard from './TitleCard';

const FeaturedInsights = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(
        limit: 4
        filter: { postDuration: { featured: { eq: "Featured" } } }
        sort: { fields: date, order: DESC }
      ) {
        edges {
          node {
            id
            slug
            author {
              node {
                slug
                avatar {
                  default
                  url
                  width
                }
                about_author_insights {
                  displayPicture {
                    sourceUrl
                  }
                }
              }
            }
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className="features-area">
      <div className="container">
        <TitleCard>Featured Insights</TitleCard>
        <div className="row align-items-end">
          <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
            <div className="recent-features">
              {data.allWpPost.edges.slice(1, 4).map((item, index) => (
                <div
                  className="recent-fitem"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <div className="row">
                    <div className="col-6">
                      <div className="fpost-thumb">
                        <img
                          width="100%"
                          src={item.node.featuredImage?.node?.sourceUrl}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="fpost-text">
                        <h4>{item.node.title}</h4>
                        <Link to={`/${item.node.slug}`}>READ INSIGHT</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
            <div
              className="features-big"
              style={{
                backgroundImage: `url(${data.allWpPost.edges[0].node.featuredImage?.node?.sourceUrl})`,
              }}
            >
              <div className="big-features-text" data-aos="zoom-in">
                <h2>
                  {data.allWpPost.edges[0].node.title
                    .split(' ')
                    .slice(0, 10)
                    .join(' ')}
                </h2>
                <Link
                  to={`/${data.allWpPost.edges[0].node.slug}`}
                  className="btn-line"
                >
                  READ INSIGHT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInsights;
