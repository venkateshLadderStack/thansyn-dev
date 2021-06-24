import React from 'react';
import Layout from '../components/layout';
import ConnectUs from '../components/ConnectUs';
import Call from '../assets/img/insight detail/phone.png';
import { graphql, Link } from 'gatsby';

const Author = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div className="analyst-detail pt_45 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="area-title  site-area-titel d-flex">
                <h2>{data.wpUser.about_author_insights.name}</h2>
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
          </div>
          <div className="row mas-grid-wrapper">
            <div className="col-lg-6 col-md-12 grid-item" data-aos="fade-up">
              <div className="analust-item-img mt-0 mb-4">
                <img
                  width="90%"
                  src={
                    data.wpUser.about_author_insights.displayPicture?.sourceUrl
                  }
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 mb-lg-4 mb-4 grid-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="analu-wrapp mt-0 mb-4">
                <div className="analust-content">
                  <p>{data.wpUser.about_author_insights.aboutAuthor}</p>
                  <h4>Wrote insights on</h4>

                  {data.wpUser.about_author_insights.wroteInsights?.map(
                    insight => (
                      <p>{insight.insightName}</p>
                    )
                  )}

                  <h4>Services</h4>
                  {data.wpUser.about_author_insights.services?.map(service => (
                    <p>{service.services}</p>
                  ))}
                  <div className="anylust-btn text-center mt_40">
                    <a href="#" className="btn bg-succes btn-lg radius-0">
                      <img className="mr-2" src={Call} alt="" />
                      SCHEDULE A CALL
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 grid-item"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="about-future mt-0 mb-4">
                <h4>Who we are</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.wpUser.about_author_insights.whoAreWe,
                  }}
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 mb-4 grid-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="about-future mt-0 mb-4">
                <h4>Background</h4>
                <h6>Gartner, Inc.</h6>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.wpUser.about_author_insights.background,
                  }}
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 grid-item"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="about-future content-future-two mt-0 mb-4">
                <h4>Perspective</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.wpUser.about_author_insights.perspective,
                  }}
                />
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
            {data.allWpPost.nodes.slice(0, 3).map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {console.log(item, 'from insights')}
                {console.log(
                  item.author.node.posts.nodes[0].featuredImage.node?.localFile
                    .childImageSharp.fluid.src
                )}
                <div className="what-new-item">
                  <div className="whats-top">
                    <Link
                      to={`/categories/${item.author.node.posts.nodes[index].categories.nodes[0].slug}`}
                    >
                      <span className="tags">
                        {item.author.node.posts.nodes[
                          index
                        ].categories.nodes[0].name.toUpperCase()}
                      </span>
                    </Link>
                    <a href="">
                      <img
                        src={
                          item.author.node.posts.nodes[index].featuredImage.node
                            ?.localFile.childImageSharp.fluid.src
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
                      <Link to={`/${item.author.node.posts.nodes[index].slug}`}>
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
      <ConnectUs heading={'contact us'} />
    </Layout>
  );
};

export default Author;

export const query = graphql`
  query Author($id: String!) {
    wpUser(id: { eq: $id }) {
      about_author_insights {
        background
        name
        aboutAuthor
        perspective
        services {
          services
        }
        whoAreWe
        twitterLink
        wroteInsights {
          insightName
        }
        displayPicture {
          sourceUrl
        }
      }
    }
    allWpPost(filter: { author: { node: { id: { eq: $id } } } }) {
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
