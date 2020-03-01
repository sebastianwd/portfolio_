const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Essential Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@sebastianwd`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@context': path.resolve(__dirname, 'src/context'),
          '@theme': path.resolve(__dirname, 'src/theme'),
          '@generated': path.resolve(__dirname, 'src/__generated__'),
        },
        extensions: ['js', 'jsx'],
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/theme/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.tsx`),
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        outputPath: `src/__generated__/gatsby-types.ts`,
        emitSchema: {
          'src/__generated__/gatsby-schema.graphql': true,
          'src/__generated__/gatsby-introspection.json': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `sportfolio`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => doc => `/${doc.uid}`,
      },
    },
  ],
}
