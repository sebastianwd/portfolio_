import React from 'react'
import { Link } from 'gatsby'
import { SEO } from '@components'

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the ho me p age</Link>
  </>
)

export default SecondPage
