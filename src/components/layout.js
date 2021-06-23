/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from './Header/Header';
import '../assets/css/style.scss';
import Footer from './footer/Footer';
import NavBar from './NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/all.min.css';
import '../assets/css/fontawesome.css';
import '../assets/css/nice-select.css';
import '../assets/css/style.scss';
import '../assets/css/helper.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
