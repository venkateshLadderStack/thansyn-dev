import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import HeroSlider from '../components/slider/HeroSlider';
import PostItem from '../components/PostItem';
import Post1 from '../components/assets/img/w-1.jpg';
import Post2 from '../components/assets/img/w-2.jpg';
import Post3 from '../components/assets/img/w-3.jpg';
import TopHeading from '../components/TopHeading';
import CommunityBox from '../components/CommunityBox';
import ConnectWithAnalyst from '../components/ConnectWithAnalyst';
import { graphql, Link } from 'gatsby';
import TestimonialSlider from '../components/slider/TestimonialSlider';
import moment from 'moment';
import FeaturedInsights from '../components/FeaturedInsights';
import DelayPopup from '../components/DelayPopup';
import FloatingSubscribeBox from '../components/FloatingSubscribeBox';
import Seo from '../components/seo';

const IndexPage = ({ data }) => {
  const [popupVisibilty, setPopupVisibility] = useState(false);
  const [subscribeVisibilty, setSubscribeVisibility] = useState(false);

  useEffect(() => {
    setTimeout(() => setPopupVisibility(true), 10000);
    setTimeout(() => setSubscribeVisibility(true), 3000);
  }, []);

  return (
    <Layout>
      <Seo title="Home" />
      <DelayPopup
        visibility={popupVisibilty}
        hidePopup={() => setPopupVisibility(false)}
      />
      <FloatingSubscribeBox
        visibility={subscribeVisibilty}
        hidePopup={() => setSubscribeVisibility(false)}
      />
      <div className="home_wrapper postion-relative">
        <div className="hero-area">
          <HeroSlider data={data.allWpSlider.nodes} />
        </div>
      </div>
      <div className="community-area">
        <div className="container">
          <div className="row">
            <TopHeading title="Engage with our community" />
          </div>
          <div className="row">
            {data.wpPage.home.communityBox.map((item, index) => (
              <div
                className="col-lg-4 col-md-4 mt_50"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <CommunityBox
                  title={item.title}
                  subTitle={item.description}
                  image={item.image?.localFile.childImageSharp.fluid.src}
                  color={item.color}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="testi_wrapper position-relative">
          <img
            src="assets/img/dooted.svg"
            className="img-fluid dooted"
            alt=""
          />
          <h4 className="testi_title">TESTIMONIAL</h4>

          <TestimonialSlider data={data.allWpTestimonial.nodes} />
        </div>
      </div>
      <div className="what-new-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="area-title">
                <h2>What’s new</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {data.allWpPost.nodes.map(item => (
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
                key={item.id}
              >
                <PostItem
                  tags={item.categories.nodes[0].name}
                  image={
                    item?.featuredImage?.node?.localFile?.childImageSharp.fluid
                      .src
                  }
                  date={item.date}
                  time={item.postDuration.readtime}
                  heading={item.title}
                  description={item.excerpt}
                  readBtn={item.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FeaturedInsights />
      <div className="event-area">
        <div className="container">
          <div className="row">
            <TopHeading title="Upcoming events" />
          </div>
          <div className="row justify-content-center">
            {data.allWpEvent.nodes.map((item, index) => (
              <>
                <div
                  class="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div class="what-new-item" key={item.id}>
                    <div class="whats-top">
                      <span class="tags">
                        {item.categories.nodes[0]?.name?.toUpperCase() ||
                          'INSIGHT'}
                      </span>
                      <Link to="/upcoming-events">
                        <img
                          src={
                            item.featuredImage?.node.localFile.childImageSharp
                              .fluid.src
                          }
                          alt=""
                        />
                      </Link>
                    </div>
                    <div class="whats-bottom">
                      <ul class="post-info">
                        <li>
                          <Link href="/upcoming-events">{item.date}</Link>
                        </li>
                        <li>
                          <Link href="/upcoming-events">
                            <i class="fal fa-clock"></i>
                            {moment(
                              `${item.date}`,
                              'DDMMMMYYYY h:MM a'
                            ).fromNow()}{' '}
                          </Link>
                        </li>
                      </ul>
                      <div class="event-info">
                        <div class="event-txt">
                          <h4>{item.events?.startDate}</h4>
                          <span>{item.title}</span>
                        </div>
                        <div class="event-btn">
                          <Link class="btn-line" to="/upcoming-events">
                            REGISTER
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <ConnectWithAnalyst />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query HomePage($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      home {
        communityBox {
          color
          description
          title
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
    allWpSlider {
      nodes {
        title
        slider {
          ourResearch
          secondTitle
          viewService
        }
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
    allWpEvent(
      limit: 3
      filter: { events: { presentPast: { eq: "present" } } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title
        id
        content
        categories {
          nodes {
            name
          }
        }
        date(formatString: "DD MMMM YYYY")
        events {
          endDate
          fieldGroupName
          startDate
        }
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
    allWpTestimonial {
      nodes {
        title
        slug
        content
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
    allWpPost(limit: 3, sort: { fields: date, order: DESC }) {
      nodes {
        id
        title
        slug
        content
        date(formatString: "DD MMMM YYYY")
        excerpt
        categories {
          nodes {
            name
          }
        }
        postDuration {
          readtime
        }
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
`;
