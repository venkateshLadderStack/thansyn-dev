import React from 'react';
import Layout from '../components/layout';
import ConnectUs from '../components/ConnectUs';
import Call from '../assets/img/insight detail/phone.png';
import { graphql, Link } from 'gatsby';
import Phone from '../assets/img/insight detail/phone.png';
import LinkedIn from '../assets/img/insight detail/linkedin .png';
import Approved from '../assets/img/insight detail/approved .png';
import Mask from '../assets/img/insight detail/Mask .png';

const Author = ({ data }) => {
  console.log(data, 'FROM AUTHOR');
  return (
    <Layout>
      {/* <div className="analyst-detail pt_45 overflow-hidden">
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
      </div> */}
      <div className="analyst-detail pt_45 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="area-title  site-area-titel d-flex">
                <h2>{data.wpUser.about_author_insights.name} </h2>
                <ul className="social-list">
                  <li>
                    <a href="#">
                      <img src={LinkedIn} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row  mas-grid-wrapper">
            <div className="col-lg-6 col-md-12 grid-item" data-aos="fade-up">
              <div className="analust-item-img mt-0 mb-4">
                <img
                  src={
                    data.wpUser.about_author_insights?.displayPicture?.sourceUrl
                  }
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 mb-lg-2 mb-4 grid-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="analust-content analyst-box mt-0 mb-4">
                <h4 className="item-titel">
                  Top {data.wpUser.about_author_insights.problemsISolve?.length}{' '}
                  problems I solve
                </h4>
                {data.wpUser.about_author_insights.problemsISolve?.map(
                  (item, index) => (
                    <div className="anylust-problem d-flex">
                      <div className="anylus-star">
                        <img src={Approved} alt="" />
                      </div>
                      <div className="anylus-problem-content">
                        <h4>Problem {index + 1}</h4>
                        <p>{item.problemISolve}</p>
                      </div>
                    </div>
                  )
                )}

                <p className="sub-title">Connect and explore opportunities</p>

                <div className="anylust-btn text-center mt_40">
                  <a href="#" className="btn bg-succes btn-lg radius-0">
                    <img className="mr-2" src={Phone} alt="" />
                    SCHEDULE A CALL
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12  grid-item" data-aos="fade-up">
              <div
                className="about-future anylist-two mt-0 mb-4"
                style={{
                  backgroundColor: `${data.wpUser.about_author_insights.highlights[0]?.backgroundColor}`,
                }}
              >
                <span className="shap-anylise">
                  <img
                    src={
                      data.wpUser.about_author_insights.highlights[0]?.bgImage
                        ?.sourceUrl || Mask
                    }
                    alt=""
                  />
                </span>
                <h4>Highlights</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpUser.about_author_insights.highlights[0]
                        .highlights,
                  }}
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 mb-4 grid-item"
              data-aos="fade-up"
            >
              <div className="about-future mt-0 mb-4">
                <h4>
                  {
                    data.wpUser.about_author_insights.credentials[0]
                      .credentialsTitle
                  }
                </h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      data.wpUser.about_author_insights.credentials[0]
                        .credentialsContent,
                  }}
                />
              </div>
              <div className="anylust-btn text-center mt_40">
                <a href="#" className="btn bg-succes btn-lg radius-0">
                  Connect with an analyst
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 grid-item" data-aos="fade-up">
              <div className="about-future content-future-two mt-0 mb-4">
                <div className="area-title  link-social site-area-titel d-flex justify-content-between">
                  <h4>Links</h4>
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
                {data.wpUser.about_author_insights.linksOfWork.map(item => (
                  <div className="detail-link">
                    <p>{item.nameOfInsight}:</p>
                    <Link to={item.link1}>{item.link1}</Link>
                  </div>
                ))}
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
        aboutAuthor
        background
        credentials {
          credentialsContent
          credentialsTitle
          fieldGroupName
        }
        displayPicture {
          sourceUrl
        }
        facebookLink
        fieldGroupName
        highlights {
          backgroundColor
          fieldGroupName
          highlights
          bgImage {
            sourceUrl
          }
        }
        instagramLink
        linksOfWork {
          fieldGroupName
          nameOfInsight
          link1
        }
        name
        perspective
        problemsISolve {
          fieldGroupName
          problemISolve
        }
        services {
          fieldGroupName
          services
        }
        twitterLink
        whoAreWe
        wroteInsights {
          insightName
          fieldGroupName
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
