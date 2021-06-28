import React from 'react';
import CategoryListBitmap from '../../assets/img/category listing/Bitmap.png';
import { useStaticQuery, graphql, Link } from 'gatsby';

const InsightsFeaturedSidePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(
        limit: 3
        filter: { postDuration: { featured: { eq: "Featured" } } }
      ) {
        edges {
          node {
            id
            slug
            author {
              node {
                slug
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
                  name
                }
              }
            }
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      {data.allWpPost.edges.map((edge, index) => (
        <>
          {console.log(edge.node.author.node.name)}
          <div className="row" key={edge.node.id}>
            <div
              className="col-lg-4 col-md-4 col-4"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="insight-img">
                <img src={edge.node?.featuredImage?.node?.sourceUrl} alt="" />
              </div>
            </div>
            <div
              className="col-lg-8 col-md-8 col-8"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="insight-content-area">
                <Link to={`/${edge.node.slug}/`}>
                  <h4>{edge.node.title}</h4>
                </Link>
                <div className="insight-item d-flex justify-content-between align-items-center">
                  <div className="insight-list-item d-flex align-items-center">
                    <img
                      className="mr-3"
                      width="60px"
                      src={edge.node?.author.node?.avatar.url}
                      alt=""
                    />
                    <div className="insight-point px-2">
                      <span>by</span>
                      <Link to={`/author/${edge.node.author.node.slug}`}>
                        {edge.node.author.node.about_author_insights?.name}
                      </Link>
                    </div>
                  </div>
                  <div className="insight-data">
                    <img src={CategoryListBitmap} alt="" />
                    <a href="#">1.2k views</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {index < 2 && <div class="border-bottom"></div>}
        </>
      ))}
    </div>
  );
};

export default InsightsFeaturedSidePosts;
