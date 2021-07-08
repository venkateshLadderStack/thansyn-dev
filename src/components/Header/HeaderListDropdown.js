import React from 'react';
import { Link } from 'gatsby';

const HeaderListDropdown = ({ menus }) => {
  return (
    <ul className="dropdown-menu small_menu">
      {menus.map((menu, index) => (
        <li className="dropdown-submenu dropdown">
          <Link
            to={`/${menu.path}`}
            className="dropdown-toggle"
            data-toggle="dropdown"
            key={index}
          >
            <Link to={menu.path}>{menu.title}</Link>
            {menu.subItems && <i className="fal fa-angle-right"></i>}
          </Link>
          {menu.subItems && (
            <ul className="dropdown-menu">
              {menu.subItems &&
                menu.subItems.map((data, index) => (
                  <li key={index}>
                    <Link to={`/${data.path}`}>{data.title}</Link>
                  </li>
                ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default HeaderListDropdown;
