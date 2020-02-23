module.exports = {
  client: {
    name: 'gatsby-essential-starter',
    tagName: 'graphql',
    includes: [
      './src/**/*.{ts,tsx}',
      './src/__generated__/gatsby-plugin-documents.graphql',
    ],
    service: {
      name: 'GatsbyJS',
      url: ' http://localhost:8000/___graphql',
      localSchemaFile: './src/__generated__/gatsby-schema.graphql',
      skipSSLValidation: true,
    },
  },
}
