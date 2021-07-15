import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import moment from 'moment';

const _ = require('lodash');

const InsightsLatestSidePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(sort: { fields: date, order: DESC }, limit: 3) {
        edges {
          node {
            id
            slug
            date
            author {
              node {
                name

                avatar {
                  default
                  url
                  width
                }
                slug
                about_author_insights {
                  displayPicture {
                    sourceUrl
                  }
                  name
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
    <div>
      {data.allWpPost.edges?.slice(0, 3).map((edge, index) => (
        <>
          <div className="row" key={edge.node.id}>
            <div
              className="col-lg-4 col-md-4 col-4"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="insight-img">
                <img src={edge.node?.featuredImage?.node?.sourceUrl} alt="" />
              </div>
            </div>
            <div
              className="col-lg-8 col-md-8 col-8"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="insight-content-area">
                <Link to={`/${edge?.node?.slug}/`}>
                  <h4>{edge.node?.title}</h4>
                </Link>
                <div className="insight-item d-flex justify-content-between align-items-center">
                  <div className="insight-list-item d-flex align-items-center">
                    <img
                      className="mr-3"
                      width="60px"
                      src={edge.node?.author?.node?.avatar.url}
                      alt=""
                    />
                    <div className="insight-point px-2">
                      <span>by</span>
                      <Link to={`/author/${edge.node?.author?.node?.slug}`}>
                        {edge.node?.author?.node?.name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {index < 2 && <div class="border-bottom"></div>}
        </>
      ))}
    </div>
  );
};

export default InsightsLatestSidePosts;
