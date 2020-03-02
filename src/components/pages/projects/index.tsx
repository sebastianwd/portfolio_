import React from 'react'
import { Typograhy } from '@components'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { map, flatMap, get, assign } from 'lodash'
import { rhythm } from '@theme/typography'
import { Theme } from '@theme'
import Checkbox from '@components/checkbox'
import { useStaticQuery, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import { gridAuto } from '@utils'
import { css } from '@emotion/core'
import {
  PrismicProjectsAndCategoriesQuery,
  PrismicProjectDataCategoriesCategory,
  Maybe,
  PrismicCategoryData,
} from '@generated/gatsby-types'
import { ProjectCard } from './components'

const getProjectCategoryNames = (
  categories: Maybe<
    readonly Maybe<{
      readonly category: Maybe<
        Pick<PrismicProjectDataCategoriesCategory, 'id'> & {
          readonly document: Maybe<
            readonly Maybe<{
              readonly data: Maybe<Pick<PrismicCategoryData, 'name'>>
            }>[]
          >
        }
      >
    }>[]
  >
) => {
  return flatMap(categories, node =>
    map(node?.category?.document, item => item?.data?.name)
  )
}

const getCategoryNames = (data: PrismicProjectsAndCategoriesQuery) => {
  const { edges } = data.allPrismicCategory

  return edges.map(edge => edge.node.data?.name)
}

const getProjects = (data: PrismicProjectsAndCategoriesQuery) => {
  const { edges } = data.allPrismicProject

  return edges.map(edge => assign(edge.node.data, { uid: edge.node.uid }))
}

const ProjectsPage = () => {
  const theme: Theme = useTheme()

  const data = useStaticQuery<PrismicProjectsAndCategoriesQuery>(graphql`
    query PrismicProjectsAndCategories {
      allPrismicCategory {
        edges {
          node {
            data {
              name
            }
          }
        }
      }
      allPrismicProject {
        edges {
          node {
            uid
            data {
              title
              overview
              categories {
                category {
                  id
                  document {
                    data {
                      name
                    }
                  }
                }
              }
              preview_image {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const categoryNames = getCategoryNames(data)

  const projects = getProjects(data)

  return (
    <Container id="projects">
      <Inner>
        <LeftContent>
          <Typograhy
            as="h2"
            weight="bold"
            color={theme.primary}
            size={13}
            css={marginBottom}
          >
            Work /&gt;
          </Typograhy>
          {map(categoryNames, name => (
            <Checkbox id={name} key={name}>
              {name}
            </Checkbox>
          ))}
        </LeftContent>
        <RightContent>
          <Gallery css={gridAuto(260, 40)}>
            {map(projects, (project, index) => {
              if (!project) {
                return null
              }

              const {
                uid = '',
                title = '',
                categories,
                preview_image: previewImage,
                overview,
              } = project

              const names = getProjectCategoryNames(categories)

              const fluidImage = get(
                previewImage,
                'localFile.childImageSharp.fluid'
              ) as FluidObject

              return (
                <ProjectCard
                  key={title}
                  categoryNames={names}
                  title={title}
                  fluidImage={fluidImage}
                  description={overview}
                  slug={uid}
                  animationDelay={index * 0.2}
                />
              )
            })}
          </Gallery>
        </RightContent>
      </Inner>
    </Container>
  )
}

const marginBottom = css`
  margin-bottom: ${rhythm(4)};
`

const Container = styled.div`
  max-width: ${rhythm(70)};
  margin: 0 auto;
  padding-left: ${rhythm(5.5)};
  display: flex;
  align-items: center;
  min-height: 100%;
`

const Gallery = styled.div`
  max-width: ${rhythm(36)};
`

const Inner = styled.div`
  display: flex;
  flex-basis: 100%;
`

const LeftContent = styled.div`
  flex-basis: 30%;
  margin-bottom: 10%;
  height: 60vh;
`

const RightContent = styled.div`
  margin-bottom: 10%;
  flex-grow: 1;
`

export default ProjectsPage
