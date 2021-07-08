import * as React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import InsightTabs from '../components/InsightSidePost/InsightTabs';
import InsightTextCard from '../components/InsightSidePost/InsightTextCard';
import ConnectUs from '../components/ConnectUs';
import PostItem from '../components/PostItem';
import TopHeading from '../components/TopHeading';
import BottomInsightPosts from '../components/BottomInsightPosts';
import AuthorDescription from '../components/AnalystPage/AuthorDescription';

const post = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <div className="insight-detail-area pt_55 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 p-4">
              <div className="category-text-detiles ">
                <h2
                  className="sub-title"
                  data-aos="fade-right"
                  data-aos-duration="500"
                  dangerouslySetInnerHTML={{ __html: data.wpPost.title }}
                />

                <div className="category-social-list d-flex">
                  <ul className="post-info mr-3">
                    <li>
                      <img
                        width="50px"
                        src={data.wpPost.author.node.avatar?.url}
                        alt=""
                      />
                    </li>
                    <li>by</li>
                    <li>
                      <a className="btn-line line-black" href="#">
                        {data.wpPost.author.node.name}
                      </a>
                    </li>
                    <li>
                      <a href="#">{data.wpPost.date}</a>
                    </li>
                  </ul>
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
                </div>
              </div>
              <div className="insight-wrapp">
                <img
                  data-aos="fade-right"
                  data-aos-duration="900"
                  src={
                    data.wpPost.featuredImage?.node.localFile.childImageSharp
                      .fluid.src
                  }
                  alt=""
                />
                <div
                  className="insight-content"
                  dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
                />
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 p-4">
              <InsightTabs />
              <InsightTextCard />
            </div>
          </div>
        </div>
      </div>
      <AuthorDescription data={data.wpPost.author} />
      <BottomInsightPosts data={data.allWpPost.nodes} />
      <ConnectUs heading={'Connect us'} />
    </Layout>
  );
};

export default post;

export const query = graphql`
  query SidePost($id: String!, $authorId: String!) {
    wpPost(id: { eq: $id }) {
      title
      id
      content
      slug
      date(formatString: "DD MMMM yyyy")
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
      author {
        node {
          name
          avatar {
            default
            url
            width
          }
          about_author_insights {
            name

            displayPicture {
              sourceUrl
              localFile {
                childrenImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          description
        }
      }
    }
    allWpPost(filter: { author: { node: { id: { eq: $authorId } } } }) {
      nodes {
        author {
          node {
            name
            about_author_insights {
              name
              displayPicture {
                sourceUrl
              }
            }
            posts {
              nodes {
                categories {
                  nodes {
                    name
                  }
                }
                title
                slug
                excerpt
                date(formatString: "DD MMM yyyy")
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        fluid(quality: 90) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
