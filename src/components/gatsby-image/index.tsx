import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { find } from 'lodash'
import Img, { FluidObject, GatsbyImageProps } from 'gatsby-image'
import { GatsbyFluidImageQuery } from '@generated/gatsby-types'

interface Props extends GatsbyImageProps {
  filename: string
  style?: React.CSSProperties
  alt?: string
  [x: string]: any
}

const GatsbyImage = (props: Props) => {
  const { filename, style, alt, ...other } = props

  const data = useStaticQuery<GatsbyFluidImageQuery>(graphql`
    query GatsbyFluidImage {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = find(data.images.edges, edge =>
    edge.node.relativePath.includes(filename)
  )

  if (!image) {
    return null
  }

  const fluid = image.node.childImageSharp?.fluid as FluidObject

  return <Img style={style} alt={alt} fluid={fluid} {...other} />
}

export default GatsbyImage
