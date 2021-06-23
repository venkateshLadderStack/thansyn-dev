import React from 'react';
import { Link } from 'gatsby';

const HeaderListDropdown = ({ menus }) => {
  return (
    <ul className="dropdown-menu small_menu">
      {menus.map((menu, index) => (
        <li className="dropdown-submenu dropdown">
          <a
            href="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            key={index}
          >
            <Link to={menu.path}>{menu.title}</Link>
            <i className="fal fa-angle-right"></i>
          </a>
          <ul className="dropdown-menu">
            {menu.subItems.map((data, index) => (
              <li>
                <a href="#">{data}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default HeaderListDropdown;
