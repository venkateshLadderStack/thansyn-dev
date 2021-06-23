const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { paginate } = require('gatsby-awesome-pagination');

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allWpPage {
        edges {
          node {
            slug
            title
            template {
              templateName
            }
            id
            status
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      //const pageTemplate = path.resolve(`./src/templates/page.js`)

      // Only publish pages with a `status === 'publish'` in production. This
      // excludes drafts, future posts, etc. They will appear in development,
      // but not in a production build.

      const allPages = result.data.allWpPage.edges;
      const pages =
        process.env.NODE_ENV === 'production'
          ? getOnlyPublished(allPages)
          : allPages;

      // Call `createPage()` once per WordPress page
      _.each(pages, ({ node: page }) => {
        if (page.template.templateName === 'About Page') {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/aboutus.js`),
            context: {
              id: page.id,
            },
          });
        } else if (page.template.templateName === 'Home Page') {
          createPage({
            path: `/`,
            component: path.resolve(`./src/templates/index.js`),
            context: {
              id: page.id,
            },
          });
        } else if (page.template.templateName === 'Service Page') {
          createPage({
            path: `/service`,
            component: path.resolve(`./src/templates/service.js`),
            context: {
              id: page.id,
            },
          });
        } else {
          createPage({
            path: `/${page.slug}/`,
            component: path.resolve(`./src/templates/pages.js`),
            context: {
              id: page.id,
            },
          });
        }
      });
    })
    .then(() => {
      return graphql(`
        {
          allWpCategory {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      `);
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const categoriesTemplate = path.resolve(`./src/templates/category.js`);

      // Create a Gatsby page for each WordPress Category
      _.each(result.data.allWpCategory.edges, ({ node: cat }) => {
        createPage({
          path: `/categories/${cat.slug}/`,
          component: categoriesTemplate,
          context: {
            name: cat.name,
            slug: cat.slug,
          },
        });
      });
    })
    .then(() => {
      return graphql(`
        {
          allWpPost {
            edges {
              node {
                id
                slug
                status
                template {
                  templateName
                }
                author {
                  node {
                    id
                  }
                }
              }
            }
          }
        }
      `);
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const postTemplate = path.resolve(`./src/templates/post.js`);
      const postSidebarTemplate = path.resolve(
        `./src/templates/post-sidebar.js`
      );

      // In production builds, filter for only published posts.
      const allPosts = result.data.allWpPost.edges;
      const posts = allPosts;

      // Iterate over the array of posts
      _.each(posts, ({ node: post }) => {
        // Create the Gatsby page for this WordPress post

        if (post.template.templateName === 'sidebar Post') {
          createPage({
            path: `/${post.slug}/`,
            component: postSidebarTemplate,
            context: {
              id: post.id,
              authorId: post.author.node.id,
            },
          });
        } else {
          createPage({
            path: `/${post.slug}/`,
            component: postTemplate,
            context: {
              id: post.id,
              authorId: post.author.node.id,
            },
          });
        }
      });

      // Create a paginated blog, e.g., /, /page/2, /page/3
      paginate({
        createPage,
        items: posts,
        itemsPerPage: 10,
        pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/test` : `/page`),
        component: blogTemplate,
      });
    })

    .then(() => {
      return graphql(`
        {
          allWordpressTag(filter: { count: { gt: 0 } }) {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      `);
    })

    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const tagsTemplate = path.resolve(`./src/templates/tag.js`);

      // Create a Gatsby page for each WordPress tag
      _.each(result.data.allWordpressTag.edges, ({ node: tag }) => {
        createPage({
          path: `/tags/${tag.slug}/`,
          component: tagsTemplate,
          context: {
            name: tag.name,
            slug: tag.slug,
          },
        });
      });
    })
    .then(() => {
      return graphql(`
        {
          allWpUser {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `);
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const authorTemplate = path.resolve(`./src/templates/author.js`);

      _.each(result.data.allWpUser.edges, ({ node: author }) => {
        createPage({
          path: `/author/${author.slug}`,
          component: authorTemplate,
          context: {
            id: author.id,
          },
        });
      });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
