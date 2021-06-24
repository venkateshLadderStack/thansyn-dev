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
                        src={
                          data.wpPost.author.node.about_author_insights
                            .displayPicture?.sourceUrl
                        }
                        alt=""
                      />
                    </li>
                    <li>by</li>
                    <li>
                      <a className="btn-line line-black" href="#">
                        {data.wpPost.author.node.about_author_insights.name}
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
      <div className="insight-clint overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="clint-content d-flex">
                <img
                  style={{ borderRadius: '25%' }}
                  className="px-4"
                  src={
                    data.wpPost.author.node.about_author_insights.displayPicture
                      ?.sourceUrl
                  }
                  alt=""
                />
                <div className="clint-ditiels pl-4">
                  <div className="clint-name pl-4">
                    <div className="insight-point">
                      <span>by</span>
                      <a href="#">
                        {data.wpPost.author?.node?.about_author_insights?.name}
                      </a>
                    </div>
                  </div>
                  <p className="pl-4">
                    {data.wpPost.author?.node?.description}
                  </p>
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
            {data.allWpPost.nodes
              .reverse()
              .slice(0, 3)
              .map((item, index) => (
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  {console.log(item, 'from insights')}
                  {console.log(
                    item.author.node.posts.nodes[0].featuredImage.node.localFile
                      .childImageSharp.fluid.src
                  )}
                  <div className="what-new-item">
                    <div className="whats-top">
                      <span className="tags">
                        {item.author.node.posts.nodes[
                          index
                        ].categories.nodes[0].name.toUpperCase()}
                      </span>
                      <a href="">
                        <img
                          src={
                            item.author.node.posts.nodes[index].featuredImage
                              .node.localFile.childImageSharp.fluid.src
                          }
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="whats-bottom">
                      <ul className="post-info">
                        <li>
                          <a href="">
                            {item.author.node.posts.nodes[index].date}
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fal fa-clock"></i>2 Mins
                          </a>
                        </li>
                      </ul>
                      <div className="whats-text">
                        <Link
                          to={`/${item.author.node.posts.nodes[index].slug}`}
                        >
                          <h4>{item.author.node.posts.nodes[index].title}</h4>
                        </Link>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.author.node.posts.nodes[index].excerpt,
                          }}
                        />

                        <Link
                          className="btn-line line-black"
                          to={`/${item.author.node.posts.nodes[index].slug}`}
                        >
                          READ INSIGHT
                        </Link>
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
