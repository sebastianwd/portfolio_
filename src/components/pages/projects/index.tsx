import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { map, flatMap, get, assign } from 'lodash'
import { Theme, spacing, bp, StyledComponent } from '@theme'
import { Radio, Typograhy } from '@components'
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
import filterIcon from '@images/filter-icon.svg'
import { ProjectCard } from './components'

interface StyledContainer extends StyledComponent {
  isVisible: boolean
}

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

const getCategories = (data: PrismicProjectsAndCategoriesQuery) => {
  const { edges } = data.allPrismicCategory

  return edges.map(edge => assign(edge.node.data, { id: edge.node.prismicId }))
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
            prismicId
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
              repository
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

  const allCategories = {
    id: 'all',
    name: 'All',
  }

  const categories = getCategories(data).concat([allCategories])

  const projects = getProjects(data)

  const [categoryFilter, setCategoryFilter] = useState<string>(allCategories.id)

  const [showFilters, setShowFilters] = useState<boolean>(false)

  const handleChange = (categoryId: string) => {
    if (categoryId !== categoryFilter) {
      setCategoryFilter(categoryId)
    }
  }

  const handleClick = () => setShowFilters(!showFilters)

  return (
    <Section>
      <div className="container" style={{ paddingRight: 0, minHeight: '80vh' }}>
        <Row>
          <LeftContent className="col-md-12 col-lg-3">
            <Typograhy
              as="h2"
              weight="bold"
              color={theme.primary}
              size={13}
              css={marginBottom}
            >
              Work /&gt;
            </Typograhy>
            <Typograhy>Some of the personal projects I&apos;ve made.</Typograhy>
            <div style={{ position: 'relative' }}>
              <FilterButton onClick={handleClick}>
                <img src={filterIcon} alt="filter icon" />
              </FilterButton>
              <FiltersContainer isVisible={showFilters}>
                {map(categories, category => (
                  <Radio
                    id={category.id}
                    key={category.id}
                    onChange={() => handleChange(category.id as string)}
                    name="filters"
                    defaultChecked={category.id === 'all'}
                  >
                    {category.name}
                  </Radio>
                ))}
              </FiltersContainer>
            </div>
          </LeftContent>
          <RightContent className="col-md-12 col-lg-9">
            <Gallery css={gridAuto(320, 3.2)}>
              {map(projects, (project, index) => {
                if (!project) {
                  return null
                }

                const {
                  uid = '',
                  title = '',
                  categories: projectCategories,
                  preview_image: previewImage,
                  overview,
                  repository,
                } = project

                const projectCategoryIds = map(
                  projectCategories,
                  x => x?.category?.id
                )

                if (
                  !projectCategoryIds.includes(categoryFilter) &&
                  categoryFilter !== 'all'
                ) {
                  return null
                }

                const names = getProjectCategoryNames(projectCategories)

                const fluidImage = get(
                  previewImage,
                  'localFile.childImageSharp.fluid'
                ) as FluidObject

                return (
                  <ProjectCard
                    key={uid}
                    categoryNames={names}
                    title={title}
                    fluidImage={fluidImage}
                    link={repository}
                    description={overview}
                    slug={uid}
                    animationDelay={index * 0.18}
                  />
                )
              })}
            </Gallery>
          </RightContent>
        </Row>
      </div>
    </Section>
  )
}

const marginBottom = css`
  margin-bottom: ${spacing(4)};
`

const Section = styled.section`
  max-width: ${spacing(200)};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100%;

  ${bp.to('sm')} {
    justify-content: flex-start;
  }
`

const FiltersContainer = styled.div<StyledContainer>`
  ${bp.to('md')} {
    > * {
      display: ${props => (props.isVisible ? 'block' : 'none')};
    }

    position: absolute;
    right: 1rem;
    top: 4rem;
    z-index: 99;
    background-color: ${props => props.theme.surface};
    padding: ${props => (props.isVisible ? '12px 16px' : '0')};
  }
`

const FilterButton = styled.button<StyledComponent>`
  background-color: ${props => props.theme.surface};
  padding: 8px 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  margin-left: auto;
  display: none;

  ${bp.to('md')} {
    display: block;
  }

  &:active {
    box-shadow: inset 0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
  }
`

const Gallery = styled.div`
  max-width: ${spacing(100)};
`

const Row = styled.div`
  display: flex;
  padding-top: 8%;

  ${bp.to('md')} {
    flex-direction: column;
  }
`

const LeftContent = styled.div`
  display: flex;

  flex-direction: column;
  min-height: 40vh;

  ${bp.to('md')} {
    min-height: 0;
    margin-bottom: ${spacing(4)};
  }
`

const RightContent = styled.div`
  margin-bottom: 10%;
  flex-grow: 1;
`

export default ProjectsPage
