import React from 'react';
import { Link } from 'gatsby';

const BottomInsightPosts = ({ data }) => {
  return (
    <div className="what-new-area overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="area-title"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2>Insights by this author</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {data.slice(0, 3).map((item, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {console.log(item, 'from insights')}
              {console.log(
                item.author.node.posts.nodes[0].featuredImage.node?.localFile
                  .childImageSharp.fluid.src
              )}
              <div className="what-new-item">
                <div className="whats-top">
                  <Link
                    to={`/categories/${item.author.node.posts.nodes[index].categories.nodes[0].slug}`}
                  >
                    <span className="tags">
                      {item.author.node.posts.nodes[
                        index
                      ].categories.nodes[0].name.toUpperCase()}
                    </span>
                  </Link>
                  <a href="">
                    <img
                      src={
                        item.author.node.posts.nodes[index].featuredImage.node
                          ?.localFile.childImageSharp.fluid.src
                      }
                      alt=""
                    />
                  </a>
                </div>
                <div className="whats-bottom">
                  <ul className="post-info">
                    <li>
                      <a href="">{item.author.node.posts.nodes[index].date}</a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fal fa-clock"></i>2 Mins
                      </a>
                    </li>
                  </ul>
                  <div className="whats-text">
                    <Link to={`/${item.author.node.posts.nodes[index].slug}`}>
                      <h4>{item.author.node.posts.nodes[index].title}</h4>
                    </Link>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.author.node.posts.nodes[index].excerpt,
                      }}
                    />

                    <Link
                      className="btn-line line-black"
                      to={`/${item.author.node.posts.nodes[index].slug}`}
                    >
                      READ INSIGHT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomInsightPosts;
