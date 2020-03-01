import React from 'react'
import { Typograhy } from '@components'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { map } from 'lodash'
import { rhythm } from '@theme/typography'
import { Theme } from '@theme'
import Checkbox from '@components/checkbox'
import { useStaticQuery, graphql } from 'gatsby'
import { PrismicCategoriesQuery } from '@generated/gatsby-types'
import { css } from '@emotion/core'

const ProjectsPage = () => {
  const theme: Theme = useTheme()

  const data = useStaticQuery<PrismicCategoriesQuery>(graphql`
    query PrismicCategories {
      allPrismicCategory {
        edges {
          node {
            data {
              name
            }
          }
        }
      }
    }
  `)

  const { edges } = data.allPrismicCategory

  const categoryNames = edges.map(edge => edge.node.data?.name)

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
          {map(categoryNames, name => {
            return <Checkbox id={name}>{name}</Checkbox>
          })}
        </LeftContent>
        <RightContent>asd</RightContent>
      </Inner>
    </Container>
  )
}

const marginBottom = css`
  margin-bottom: ${rhythm(4)};
`

const Container = styled.div`
  max-width: ${rhythm(90)};
  margin: 0 auto;
  padding: 0 ${rhythm(5.5)};
  display: flex;
  align-items: center;
  min-height: 100%;
`

const Inner = styled.div`
  display: flex;
  flex-basis: 100%;
`

const LeftContent = styled.div`
  flex-basis: 50%;
  margin-bottom: 16%;
`

const RightContent = styled.div`
  margin-bottom: 16%;
  flex-basis: 36%;
`

export default ProjectsPage
