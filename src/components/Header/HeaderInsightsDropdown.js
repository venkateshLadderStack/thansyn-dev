import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const HeaderInsightsDropdown = () => {
  const data = useStaticQuery(graphql`
    {
      allWpCategory {
        nodes {
          ancestors {
            nodes {
              name
              link
              slug
              wpChildren {
                nodes {
                  name
                  link
                  slug
                }
              }
            }
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <ul className="dropdown-menu small_menu">
      {data.allWpCategory.nodes
        .filter(node => node.ancestors !== null)
        .map((menu, index) => (
          <li className="dropdown-submenu dropdown">
            <Link
              to={`/categories/${menu.ancestors?.nodes[0]?.slug}`}
              className="dropdown-toggle"
              data-toggle="dropdown"
              key={index}
            >
              {menu.ancestors?.nodes[0]?.name}
              {menu.ancestors?.nodes[0]?.wpChildren && (
                <i className="fal fa-angle-right"></i>
              )}
            </Link>
            {menu.ancestors?.nodes[0]?.wpChildren && (
              <ul className="dropdown-menu">
                {menu.ancestors?.nodes[0]?.wpChildren &&
                  menu.ancestors?.nodes[0]?.wpChildren?.nodes?.map(
                    (data, index) => (
                      <li key={index}>
                        <Link to={`/categories/${data?.slug}`}>
                          {data?.name}
                        </Link>
                      </li>
                    )
                  )}
              </ul>
            )}
          </li>
        ))}
    </ul>
  );
};

export default HeaderInsightsDropdown;
