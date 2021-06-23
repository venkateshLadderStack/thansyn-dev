import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import InsightTabs from '../components/InsightSidePost/InsightTabs';
import InsightTextCard from '../components/InsightSidePost/InsightTextCard';
import ConnectUs from '../components/ConnectUs';

const InsightsListing = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div className="insights-category pt_45">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="area-title text-center">
                <h2>{data.allWpPost.nodes[0].categories.nodes[0].name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="category-area pt_20 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              {data.allWpPost.nodes.slice(0, 3).map((item, index) => (
                <div
                  className="what-new-item"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  <div className="whats-top">
                    <span className="tags">
                      {item.categories.nodes[0].name.toUpperCase()}
                    </span>
                    <a href="">
                      <img
                        src={
                          item.featuredImage.node.localFile.childImageSharp
                            .fluid.src
                        }
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="whats-bottom info-list">
                    <div className="whats-text">
                      <a href="#0">
                        <h4>{item.title}</h4>
                      </a>
                    </div>
                    <ul className="post-info">
                      <li>
                        <img
                          width="60px"
                          src={
                            item.author.node.about_author_insights
                              .displayPicture?.sourceUrl
                          }
                          alt=""
                        />
                      </li>
                      <li>by</li>
                      <li>
                        <a>{item.author.node.about_author_insights.name}</a>
                      </li>
                      <li>
                        <a href="#">{item.date}</a>
                      </li>
                    </ul>
                    <div className="whats-text">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.excerpt,
                        }}
                      />

                      <Link
                        className="btn-line line-black"
                        to={`/${item.slug}`}
                      >
                        Continue reading
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <InsightTabs />
              <InsightTextCard />
            </div>
          </div>
        </div>
      </div>
      <ConnectUs heading={'Connect Us'} />
    </Layout>
  );
};

export default InsightsListing;

export const query = graphql`
  query Posts($slug: String!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
    ) {
      nodes {
        title
        slug
        content
        excerpt
        date(formatString: "DD MMMM yyyy")
        categories {
          nodes {
            name
          }
        }
        author {
          node {
            about_author_insights {
              name
              displayPicture {
                sourceUrl
              }
            }
          }
        }
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
      }
    }
  }
`;
