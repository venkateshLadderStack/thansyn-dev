import React from 'react';
import { Link } from 'gatsby';

const AuthorDescription = ({ data }) => {
  return (
    <div className="insight-clint overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="clint-content d-flex">
              <img
                style={{
                  height: '250px',
                  width: '250px',
                  objectFit: 'cover',
                }}
                className="px-4"
                src={data.node.avatar?.url}
                alt=""
              />
              <div className="clint-ditiels pl-4">
                <div className="clint-name pl-4">
                  <div className="insight-point">
                    <span>by</span>
                    <Link to={`/author/${data.node?.slug}`}>
                      {data?.node?.about_author_insights?.name}
                    </Link>
                  </div>
                </div>
                <p className="pl-4">{data?.node?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDescription;
