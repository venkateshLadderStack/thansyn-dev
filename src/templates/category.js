import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const InsightsListing = ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allWpPosts.edges.map(egde => (
          <h1>{edge.node.title}</h1>
        ))}
      </div>
    </Layout>
  );
};

export default InsightsListing;

export const query = graphql`
  query Posts($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          categories {
            nodes {
              name
            }
          }
          title
          content
        }
      }
    }
  }
`;
