/* eslint-disable react/no-danger */
import React from 'react'
import { graphql } from 'gatsby'
import { ProjectBySlugQuery } from '@generated/gatsby-types'

interface Props {
  data: ProjectBySlugQuery
}

const Post = (props: Props) => {
  const {
    data: { prismicProject },
  } = props

  const data = prismicProject?.data

  return (
    <>
      <h1>{data?.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: data?.content?.html as string }}
      />
    </>
  )
}

export default Post

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        title
        content {
          html
        }
      }
    }
  }
`
