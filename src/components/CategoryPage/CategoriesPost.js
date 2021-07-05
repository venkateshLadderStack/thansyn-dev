import React from 'react';
import { Link } from 'gatsby';
import Moment from 'moment';

const CategoriesPost = ({ data, forBadge }) => {
  const sortedData = data.reverse();

  console.log(sortedData, data);

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

            <a href="">
              <img
                src={
                  item?.featuredImage?.node?.localFile?.childImageSharp.fluid
                    .src
                }
                alt=""
              />
            </a>
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
                <a>{item.author.node.name}</a>
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
