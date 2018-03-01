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
