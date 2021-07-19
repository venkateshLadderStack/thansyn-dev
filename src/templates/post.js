import * as React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Img from 'gatsby-image';
import moment from 'moment';

import Layout from '../components/layout';
import InsightTabs from '../components/InsightSidePost/InsightTabs';
import InsightTextCard from '../components/InsightSidePost/InsightTextCard';
import ConnectUs from '../components/ConnectUs';
import PostItem from '../components/PostItem';
import TopHeading from '../components/TopHeading';
import BottomInsightPosts from '../components/BottomInsightPosts';
import AuthorDescription from '../components/AnalystPage/AuthorDescription';
import Seo from '../components/seo';

const post = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <Seo title="Insights" />
      <div className="insight-detail-area pt_55 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 p-4">
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
                        src={data.wpPost.author.node.avatar.url}
                        alt=""
                      />
                    </li>
                    <li>by</li>
                    <li>
                      <Link
                        className="btn-line line-black"
                        to={`/author/${data.wpPost.author.node.slug}`}
                      >
                        {data.wpPost.author.node.name}
                      </Link>
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
                    data.wpPost?.featuredImage?.node?.localFile?.childImageSharp
                      ?.fluid.src
                  }
                  alt=""
                />
                <div
                  className="insight-content"
                  dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthorDescription data={data.wpPost.author} />
      <BottomInsightPosts data={data.allWpPost.nodes} />
      <ConnectUs heading={'Connect with us'} />
    </Layout>
  );
};

export default post;

export const query = graphql`
  query Post($id: String!, $authorId: String!) {
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
          slug
          name
          avatar {
            default
            url
            width
          }
          about_author_insights {
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
        postDuration {
          readtime
        }
        author {
          node {
            name
            about_author_insights {
              displayPicture {
                sourceUrl
              }
            }
            posts {
              nodes {
                categories {
                  nodes {
                    name
                    slug
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
