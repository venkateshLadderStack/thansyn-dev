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

const post = ({ data }) => {
  const image = getImage(
    data.featuredImage?.node?.localFile.childImageSharp.fluid.src
  );

  return (
    <Layout>
      <div className="insight-detail-area pt_55 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="category-text-detiles ">
                <h2
                  dangerouslySetInnerHTML={{ __html: data.wpPost.title }}
                  data-aos="fade-right"
                  data-aos-duration="500"
                />

                <div className="category-social-list d-flex">
                  <ul className="post-info mr-3">
                    <li>
                      <img
                        width="50px"
                        src={
                          data.wpPost.author.node.about_author_insights
                            ?.displayPicture?.sourceUrl
                        }
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
                      <Link to="https://venkylad.netlify.app">
                        <i className="fab fa-facebook-f facebook"></i>
                      </Link>
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
                  src={
                    data.featuredImage?.node?.localFile.childImageSharp.fluid
                      .src
                  }
                  alt=""
                />
                <div
                  dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <InsightTabs />
              <InsightTextCard />
            </div>
          </div>
        </div>
      </div>
      <div className="insight-clint overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="clint-content d-flex">
                <img
                  src={
                    data.wpPost.author.node.about_author_insights
                      ?.displayPicture?.sourceUrl
                  }
                  alt=""
                />
                <div className="clint-ditiels">
                  <div className="clint-name">
                    <div className="insight-point">
                      <span>by</span>
                      <a href="#">{data.wpPost.author.node.name}</a>
                    </div>
                  </div>
                  <p>{data.wpPost.author.node.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="what-new-area overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="area-title"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h2>Insights by this author</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {data.allWpPost.nodes.map(item => (
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="what-new-item">
                  <div className="whats-top">
                    <span className="tags">AUTOMATION</span>
                    <a href="">
                      <img src="assets/img/w-1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="whats-bottom">
                    <ul className="post-info">
                      <li>
                        <a href="">24 November, 2020</a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fal fa-clock"></i>2 Mins
                        </a>
                      </li>
                    </ul>
                    <div className="whats-text">
                      <a href="">
                        <h4>{item.author.node.posts.nodes.title}</h4>
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna{' '}
                      </p>
                      <a className="btn-line line-black" href="">
                        READ INSIGHT
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ConnectUs heading={'Connect us'} />
    </Layout>
  );
};

export default post;

export const query = graphql`
  query Post($id: String!) {
    wpPost(id: { eq: $id }) {
      author {
        node {
          name
          description
          about_author_insights {
            name
            displayPicture {
              sourceUrl
            }
          }
        }
      }
      title
      date(formatString: "DD MMMM yyyy")
      slug
      content
      featuredImage {
        node {
          sourceUrl
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
    imageSharp {
      fixed {
        src
      }
      fluid {
        src
      }
    }
    allWpPost(filter: { authorId: { eq: "dXNlcjoz" } }) {
      nodes {
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
                title
                date(formatString: "DD MMM yyyy")
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        fluid {
                          src
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
