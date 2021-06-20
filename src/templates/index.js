import * as React from 'react';
import Layout from '../components/layout';
import HeroSlider from '../components/slider/HeroSlider';
import PostItem from '../components/PostItem';
import Post1 from '../components/assets/img/w-1.jpg';
import Post2 from '../components/assets/img/w-2.jpg';
import Post3 from '../components/assets/img/w-3.jpg';
import TopHeading from '../components/TopHeading';
import CommunityBox from '../components/CommunityBox';
import ConnectWithAnalyst from '../components/ConnectWithAnalyst';
import { graphql } from 'gatsby';
import TestimonialSlider from '../components/slider/TestimonialSlider';
const IndexPage = ({ data }) => {
  console.log(data);

  const postData = [
    {
      tags: 'AUTOMATION',
      image: Post1,
      date: '24 November, 2020',
      time: '2 Mins',
      heading: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      readBtn: 'READ INSIGHT',
    },
    {
      tags: 'SOCIETY',
      image: Post2,
      date: '24 November, 2020',
      time: '2 Mins',
      heading: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      readBtn: 'READ INSIGHT',
    },
    {
      tags: 'FUTURE OF WORK',
      image: Post3,
      date: '24 November, 2020',
      time: '2 Mins',
      heading: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      readBtn: 'READ INSIGHT',
    },
  ];

  return (
    <Layout>
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
                    item.featuredImage.node.localFile.childImageSharp.fluid.src
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
      <div className="event-area">
        <div className="container">
          <div className="row">
            <TopHeading title="Upcoming events" />
          </div>
          <div className="row justify-content-center">
            {data.allWpEvent.nodes.map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
                key={item.id}
              >
                <PostItem
                  eventInfo
                  tags={'Automation'}
                  image={
                    item.featuredImage.node.localFile.childImageSharp.fluid.src
                  }
                  date={item.events.startDate}
                  time={item.events.duration}
                  registerDate={item.events.endDate}
                  registerText={item.title}
                  registerBtn={item.registerBtn}
                />
              </div>
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
    allWpEvent(limit: 3) {
      nodes {
        title
        id
        content
        events {
          duration
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
    allWpPost(limit: 3) {
      nodes {
        id
        title
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
