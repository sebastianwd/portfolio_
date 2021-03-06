/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projects = await graphql(`
    {
      allPrismicProject {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const template = path.resolve('src/templates/project.tsx')

  projects.data.allPrismicProject.edges.forEach(edge => {
    createPage({
      path: `/project/${edge.node.uid}`,
      component: template,
      context: {
        layout: 'project',
        uid: edge.node.uid,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // this allows to load custom libraries with  no es6 module config

  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /lib/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
