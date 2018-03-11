const path = require('path');
const _ = require('lodash');
const loadYaml = require('./loadYaml')

const adminConfig = loadYaml('./static/admin/config.yml')

const adjustImagePath = nodePath => image => {
  if (_.isString(image)) {
    if (image.indexOf(adminConfig.public_folder) === 0) {
      const nextImage = path.relative(
        path.dirname(nodePath),
        path.join(
          __dirname,
          adminConfig.media_folder,
          image.substr(adminConfig.public_folder.length)
        )
      )
      console.log('Adjusted image path', nextImage)
      return nextImage
    }
  }
  return image
}


exports.onCreateNode = ({
  node,
  getNode,
  loadNodeContent,
  boundActionCreators,
}) => {
  const { frontmatter } = node
  if (frontmatter) {
    const adjust = adjustImagePath(node.fileAbsolutePath)
    const { thumbnail } = frontmatter
    if (thumbnail) {
      node.frontmatter.thumbnail = adjust(thumbnail)
    }
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: { eq: "page" } }}) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              category
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      const category = edge.node.frontmatter.category
      createPage({
        path: edge.node.frontmatter.category,
        component: path.resolve(
          `src/templates/page.js`
        ),
        // additional data can be passed via context
        context: {
          category,
        },
      })
    })
  })
}