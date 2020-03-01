import React from 'react'
import { SEO } from '@components'
import { HomePage, AboutPage, ProjectsPage } from '@components/pages'

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
    </>
  )
}

export default IndexPage
