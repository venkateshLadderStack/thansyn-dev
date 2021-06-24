import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import ConnectUs from '../components/ConnectUs';

const service = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div></div>
      <div className="home-services overflow-hidden pt_45">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="area-title text-center">
                <h2>
                  Opening the world to <br />
                  the world’s best
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {data.wpPage.servicePageAcf.serviceBlocks.map((item, index) => (
              <>
                {item.imagePlacement === 'left' ? (
                  <>
                    <div
                      className="col-xl-6 col-lg-12 col-md-12 mb-lg-5 mb-4"
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <div className="what-new-item">
                        <div className="whats-top">
                          <a href="">
                            <img src={item.image?.sourceUrl} alt="" />
                          </a>
                        </div>
                        <div className="whats-bottom">
                          <div className="event-more-btn text-center">
                            <Link
                              style={{
                                background: `${item.buttonColor}`,
                              }}
                              to={`/${item.buttonText.url}`}
                            >
                              {item.buttonText.title}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-6 col-lg-12 col-md-12 mb-lg-5 mb-4"
                      data-aos="fade-left"
                      data-aos-delay="600"
                    >
                      <div className="event-webiner servise-evnent ">
                        <h4>{item.title}</h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.content,
                          }}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="col-xl-6 col-lg-12 col-md-12 mb-lg-5 mb-4"
                      data-aos="fade-right"
                      data-aos-delay="600"
                    >
                      <div className="event-webiner servise-evnent ">
                        <h4>{item.title}</h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.content,
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="col-xl-6 col-lg-12 col-md-12 mb-lg-5 mb-4"
                      data-aos="fade-left"
                      data-aos-delay="300"
                    >
                      <div className="what-new-item">
                        <div className="whats-top">
                          <a href="">
                            <img src={item.image?.sourceUrl} alt="" />
                          </a>
                        </div>
                        <div className="whats-bottom">
                          <div className="event-more-btn text-center">
                            <Link
                              style={{
                                background: `${item.buttonColor}`,
                              }}
                              to={`/${item.buttonText.url}`}
                            >
                              {item.buttonText.title}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            ))}
            <div className="col-lg-6 col-md-6">
              <div
                className="about-future"
                data-aos="fade-right"
                data-aos-delay="800"
              >
                <h4>Who we are</h4>
                <p>{data.wpPage.servicePageAcf.whoAreWe}</p>
              </div>
              <div className="about-bg" data-aos="zoom-in" data-aos-delay="900">
                <img
                  src={
                    data.wpPage.servicePageAcf.founderData[0]?.foundersImage
                      ?.sourceUrl
                  }
                  alt="about-us"
                />
                <div className="about-bg-content">
                  <h3>Founder 1</h3>
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
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <div className="about-future">
                <h4>The future shift</h4>
                <p>{data.wpPage.servicePageAcf.futureShift}</p>
              </div>
              <div className="about-bg" data-aos="zoom-in" data-aos-delay="900">
                <img
                  src={
                    data.wpPage.servicePageAcf?.founderData[1]?.foundersImage
                      ?.sourceUrl
                  }
                  alt="about-us"
                />
                <div className="about-bg-content">
                  <h3>Founder 2</h3>
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
          </div>
        </div>
      </div>
      <ConnectUs heading={'contact us'} />
    </Layout>
  );
};

export default service;

export const query = graphql`
  query ServicePage($id: String!) {
    wpPage(id: { eq: $id }) {
      servicePageAcf {
        whoAreWe
        futureShift
        founderData {
          foundersImage {
            sourceUrl
          }
        }
        serviceBlocks {
          buttonColor
          content
          imagePlacement
          title
          buttonText {
            target
            title
            url
          }
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;
