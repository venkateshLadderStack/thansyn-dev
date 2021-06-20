import React from 'react';
import AboutCard from '../components/AboutCard';
import AboutFuture from '../components/AboutFuture';
import Layout from '../components/layout';
import image1 from '../components/assets/img/about/1.png';
import image2 from '../components/assets/img/about/2.png';
import ConnectUs from '../components/ConnectUs';
import { graphql } from 'gatsby';

const AboutUs = ({ data }) => {
  console.log(data);
  const aboutData = [
    {
      heading: 'Leadership',
      description:
        'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled.',
    },
    {
      heading: 'Leadership',
      description:
        'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled.',
    },
  ];
  const aboutFuture = [
    {
      heading: 'Leadership',
      description:
        'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled.',
      image: image1,
      founder: 'Founder 1',
      contactHeading: 'Contacts',
      contactNo: '+92 312 7524',
      email: 'Info@company.com',
    },
    {
      heading: 'Leadership',
      description:
        'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled.',
      image: image2,
      founder: 'Founder 1',
      contactHeading: 'Contacts',
      contactNo: '+92 312 7524',
      email: 'Info@company.com',
    },
  ];
  return (
    <Layout>
      <div className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="area-title text-center">
                <h2>
                  About <br />
                  the company
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {data.wpPage.aboutPage.aboutCompany.map(item => {
              return <AboutCard data={item} key={item.id} />;
            })}
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div
                className="about-future"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <h4>Who we are</h4>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled.
                </p>
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
              <div className="about-contact">
                <h4>Contacts</h4>
                <div className="contact-list d-flex ">
                  <i className="fas fa-phone-square"></i>
                  <div className="contact-tab">
                    <p>+92 312 7524</p>
                  </div>
                </div>
                <div className="contact-list d-flex">
                  <i className="fas fa-envelope"></i>
                  <div className="contact-tab">
                    <p>Info@company.com</p>
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
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled.
                </p>
              </div>
              <div
                className="about-bg"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <img
                  src={
                    data.wpPage.aboutPage.founders[1].image.localFile
                      .childImageSharp.fluid.src
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
              <div className="about-contact">
                <h4>Contacts</h4>
                <div className="contact-list d-flex ">
                  <i className="fas fa-phone-square"></i>
                  <div className="contact-tab">
                    <p>+92 312 7524</p>
                  </div>
                </div>
                <div className="contact-list d-flex">
                  <i className="fas fa-envelope"></i>
                  <div className="contact-tab">
                    <p>Info@company.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConnectUs />
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
        founders {
          facebook
          insta
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
