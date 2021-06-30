import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import InsightTabs from '../components/InsightSidePost/InsightTabs';
import InsightTextCard from '../components/InsightSidePost/InsightTextCard';
import ConnectUs from '../components/ConnectUs';
import TitleCard from '../components/TitleCard';
import CategoriesPost from '../components/CategoryPage/categoriesPost';

const InsightsListing = ({ data }) => {
  console.log(data);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    const lastLevelLocation = pathArray[pathArray.length - 1];
    setTitle(lastLevelLocation);
  }, []);

  const categoryData = data.allWpPost.nodes[0].categories.nodes.filter(
    item => item.slug === title
  );

  console.log(categoryData, 'categoryDATA');

  return (
    <Layout>
      <div className="insights-category pt_45">
        <div className="container">
          {categoryData.map(item => (
            <TitleCard>{item.name}</TitleCard>
          ))}
        </div>
      </div>
      <div className="category-area pt_20 overflow-hidden">
        <div className="container">
          <div className="row">
            <CategoriesPost
              data={data.allWpPost.nodes}
              forBadge={categoryData}
            />
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
      sort: { fields: date, order: DESC }
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
            slug
          }
        }
        author {
          node {
            avatar {
              default
              url
              width
            }
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
