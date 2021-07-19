import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const HeaderInsightsDropdown = () => {
  const data = useStaticQuery(graphql`
    {
      allWpCategory {
        nodes {
          name
          slug
          wpChildren {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <ul className="dropdown-menu small_menu">
      {data.allWpCategory.nodes
        .filter(node => node.wpChildren.nodes.length !== 0)
        .concat({ name: 'Uncategorized', slug: 'uncategorized' })
        .map((menu, index) => (
          <li className="dropdown-submenu dropdown">
            <Link
              to={`/categories/${menu.slug}`}
              className="dropdown-toggle"
              data-toggle="dropdown"
              key={index}
            >
              {menu.name}
              {menu.wpChildren && <i className="fal fa-angle-right"></i>}
            </Link>
            {menu.wpChildren && (
              <ul className="dropdown-menu">
                {menu.wpChildren &&
                  menu.wpChildren?.nodes?.map((data, index) => (
                    <li key={index}>
                      <Link to={`/categories/${data?.slug}`}>{data?.name}</Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
    </ul>
  );
};

export default HeaderInsightsDropdown;
