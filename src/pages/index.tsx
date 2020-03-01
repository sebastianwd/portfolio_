import React from 'react'
import { SEO } from '@components'
import { HomePage, AboutPage } from '@components/pages'

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <HomePage />
      <AboutPage />
    </>
  )
}

export default IndexPage
