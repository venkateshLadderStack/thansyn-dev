import React from 'react';
import { Link } from 'gatsby';
import Moment from 'moment';

const CategoriesPost = ({ data, forBadge }) => {
  const sortedData = data.reverse();

  return (
    <div className="col-xl-6 col-lg-6 col-md-12">
      {data.map((item, index) => (
        <div
          className="what-new-item"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <div className="whats-top">
            {forBadge.map(item => (
              <span className="tags"> {item.name.toUpperCase()}</span>
            ))}

            <Link to={`/${item.slug}`}>
              <img
                src={
                  item.featuredImage.node.localFile?.childImageSharp?.fluid.src
                }
                alt=""
                // item.author.node.posts.nodes[0].featuredImage.node?.localFile
                //   .childImageSharp.fluid.src
              />
            </Link>
          </div>
          <div className="whats-bottom info-list">
            <div className="whats-text">
              <Link to={`/${item.slug}`}>
                <h4>{item.title}</h4>
              </Link>
            </div>
            <ul className="post-info">
              <li>
                <img width="60px" src={item.author.node.avatar?.url} alt="" />
              </li>
              <li>by</li>
              <li>
                <div>{item.author.node.name}</div>
              </li>
              <li>
                <div>{item.date}</div>
              </li>
            </ul>
            <div className="whats-text">
              <p
                dangerouslySetInnerHTML={{
                  __html: item.excerpt,
                }}
              />

              <Link className="btn-line line-black" to={`/${item.slug}`}>
                Continue Reading
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesPost;
