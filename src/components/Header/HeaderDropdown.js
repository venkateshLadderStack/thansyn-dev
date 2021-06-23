import React from 'react';
import { Link } from 'gatsby';

const HeaderDropdown = ({ menus }) => {
  return (
    <div className="dropdown-menu multi-level">
      <div className="d-flex justify-content-between accordion accor2">
        {menus.map((data, index) => (
          <div className="header_menu">
            <h5
              className="collapse_title"
              data-toggle="collapse"
              data-target="#pre"
              aria-expanded="true"
              key={index}
            >
              <Link to={data.path}>{data.title}</Link>
            </h5>
            <ul className="collapse show" id="pre" data-parent=".accor2">
              {data.subItems.map((item, index) => (
                <li>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderDropdown;
