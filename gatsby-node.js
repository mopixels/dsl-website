/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark` && node.frontmatter.image) {
    const path = `../news/${node.frontmatter.image}`

    createNodeField({
      node,
      name: "image",
      value: path,
    })
  }
}
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark` && node.frontmatter.image) {
//     const path = `../images${node.frontmatter.image}`

//     createNodeField({
//       node,
//       name: "image",
//       value: path,
//     })
//   }
// }

// project dir/src/photos/markdown files
// project dir/static/img/image files

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   const { frontmatter } = node
//   if (frontmatter) {
//     const { image } = frontmatter
//     if (image) {
//       if (image.indexOf("/img") === 0) {
//         frontmatter.image = path.relative(
//           path.dirname(node.fileAbsolutePath),
//           path.join(__dirname, "/static/", image)
//         )
//       }
//     }
//   }

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
