import React from 'react';
import { graphql } from 'gatsby';

const Author = ({ data }) => {
  return (
    <div>
      {console.log(data)}
      <h1>Text</h1>
    </div>
  );
};

export default Author;

export const query = graphql`
  query Author($id: String!) {
    wpUser(id: { eq: $id }) {
      about_author_insights {
        background
        name
        perspective
        services {
          services
        }
        whoAreWe
        twitterLink
        wroteInsights {
          insightName
        }
      }
    }
  }
`;
