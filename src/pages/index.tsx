import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { SEO, GatsbyImage } from '@components'
import { ThemesContext } from '@context'

const IndexPage = () => {
  const { setTheme } = useContext(ThemesContext)

  return (
    <>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <GatsbyImage filename="gatsby-astronaut.png" />
      </div>
      <button onClick={() => setTheme('light')} type="button">
        Light theme
      </button>
      <Link to="/page-2/">Go to page 2</Link>
    </>
  )
}

export default IndexPage
