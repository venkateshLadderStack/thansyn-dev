import React from 'react';
import AboutCard from '../components/AboutCard';
import AboutFuture from '../components/AboutFuture';
import Layout from '../components/layout';
import image1 from '../components/assets/img/about/1.png';
import image2 from '../components/assets/img/about/2.png';
import ConnectUs from '../components/ConnectUs';
import { graphql } from 'gatsby';
import TitleCard from '../components/TitleCard';
import { Link } from 'gatsby';
import Seo from '../components/seo';

const AboutUs = ({ data }) => {
  return (
    <Layout>
      <Seo title="About us" />
      <div className="about-area">
        <div className="container">
          <TitleCard>
            About <br />
            the company
          </TitleCard>

          <div className="row">
            {data.wpPage.aboutPage.aboutCompany.map(item => {
              return <AboutCard data={item} key={item.id} />;
            })}
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              {}
              <div
                className="about-future"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <h4>Who we are</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.wpPage.aboutPage.whoAreWe[0].whoAreWe1,
                  }}
                />
              </div>
              <div
                className="about-bg"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <img
                  src={
                    data.wpPage.aboutPage.founders[0].image.localFile
                      .childImageSharp.fluid.src
                  }
                  alt="about-us"
                />
                <div className="about-bg-content">
                  <h3>Founder 1</h3>
                  <ul className="social-list d-flex">
                    <li>
                      <Link
                        to={`${data.wpPage.aboutPage.founders[0]?.facebook}`}
                      >
                        <i className="fab fa-facebook-f facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={`${data.wpPage.aboutPage.founders[0]?.insta}`}>
                        <i className="fab fa-instagram instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${data.wpPage.aboutPage.founders[0]?.twitter}`}
                      >
                        <i className="fab fa-twitter twitter"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="about-contact">
                <h4>Contacts</h4>
                <div className="contact-list d-flex ">
                  <i className="fas fa-phone-square"></i>
                  <div className="contact-tab">
                    <p>{data.wpPage.aboutPage.founders[0]?.contact}</p>
                  </div>
                </div>
                <div className="contact-list d-flex">
                  <i className="fas fa-envelope"></i>
                  <div className="contact-tab">
                    <p>{data.wpPage.aboutPage.founders[0]?.mailId}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="about-future"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <h4>Who we are</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.wpPage.aboutPage.whoAreWe[0]?.whoAreWe2,
                  }}
                />
              </div>
              <div
                className="about-bg"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <img
                  src={
                    data.wpPage.aboutPage.founders[1]?.image?.localFile
                      .childImageSharp.fluid.src
                  }
                  alt="about-us"
                />
                <div className="about-bg-content">
                  <h3>{}</h3>
                  <ul className="social-list d-flex">
                    <li>
                      <Link
                        to={`${data.wpPage.aboutPage.founders[1]?.facebook}`}
                      >
                        <i className="fab fa-facebook-f facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={`${data.wpPage.aboutPage.founders[1]?.insta}`}>
                        <i className="fab fa-instagram instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${data.wpPage.aboutPage.founders[1]?.twitter}`}
                      >
                        <i className="fab fa-twitter twitter"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="about-contact">
                <h4>Contacts</h4>
                <div className="contact-list d-flex ">
                  <i className="fas fa-phone-square"></i>
                  <div className="contact-tab">
                    <p>{data.wpPage.aboutPage.founders[1].contact}</p>
                  </div>
                </div>
                <div className="contact-list d-flex">
                  <i className="fas fa-envelope"></i>
                  <div className="contact-tab">
                    <p>{data.wpPage.aboutPage.founders[1].mailId}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConnectUs heading={'Have a query? Get in touch.'} />
    </Layout>
  );
};
export default AboutUs;

export const pageQuery = graphql`
  query aboutUs($id: String!) {
    wpPage(id: { eq: $id }) {
      aboutPage {
        aboutCompany {
          title
          description
          color
        }
        whoAreWe {
          whoAreWe1
          whoAreWe2
        }
        founders {
          facebook
          insta
          twitter
          contact
          mailId
          name
          image {
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
`;
