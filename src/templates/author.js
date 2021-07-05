import React from 'react';
import Layout from '../components/layout';
import ConnectUs from '../components/ConnectUs';
import Call from '../assets/img/insight detail/phone.png';
import { graphql, Link } from 'gatsby';
import Phone from '../assets/img/insight detail/phone.png';
import LinkedIn from '../assets/img/insight detail/linkedin .png';
import Approved from '../assets/img/insight detail/approved .png';
import Mask from '../assets/img/insight detail/Mask .png';
import TitleCard from '../components/AuthorPage/TitleCard';
import ProfilePic from '../components/AuthorPage/ProfilePic';
import ProblemSolveCard from '../components/AuthorPage/ProblemSolveCard';
import HighlightsCard from '../components/AuthorPage/HighlightsCard';
import CredentialsCard from '../components/AuthorPage/CredentialsCard';
import LinksCard from '../components/AuthorPage/LinksCard';
import BottomInsightPosts from '../components/BottomInsightPosts';
import Seo from '../components/seo';

const Author = ({ data }) => {
  console.log(data, 'FROM AUTHOR');
  return (
    <Layout>
      <Seo title={`${data.wpUser.name}`} />
      <div className="analyst-detail pt_45 overflow-hidden">
        <div className="container">
          <TitleCard
            LinkedIn={data.wpUser.about_author_insights?.linkedIn}
            LinkedInLogo={LinkedIn}
            name={data.wpUser.name}
          />
          <div className="row  mas-grid-wrapper">
            <ProfilePic
              imageUrl={
                data.wpUser.about_author_insights?.displayPicture?.sourceUrl
              }
            />

            <ProblemSolveCard
              problems={data.wpUser.about_author_insights.problemsISolve}
              Phone={Phone}
              Approved={Approved}
            />

            <HighlightsCard
              highlights={data.wpUser.about_author_insights.highlights}
              Mask={Mask}
            />

            <CredentialsCard
              credentials={data.wpUser.about_author_insights.credentials}
            />

            <LinksCard
              linksOfWork={data.wpUser.about_author_insights.linksOfWork}
              facebook={data.about_author_insights?.facebookLink}
              twitter={data.about_author_insights?.twitterLink}
              instagram={data.about_author_insights?.instagramLink}
            />
          </div>
        </div>
      </div>
      <BottomInsightPosts data={data.allWpPost.nodes} />

      <ConnectUs heading={'contact us'} />
    </Layout>
  );
};

export default Author;

export const query = graphql`
  query Author($id: String!) {
    wpUser(id: { eq: $id }) {
      name
      about_author_insights {
        aboutAuthor
        linkedIn
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
