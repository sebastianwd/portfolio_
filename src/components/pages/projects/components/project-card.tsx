import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { map } from 'lodash'
import { FluidObject } from 'gatsby-image'
import { keyframes, css } from '@emotion/core'
import { StyledComponent, Theme, spacing } from '@theme'
import { GatsbyImage, Typograhy } from '@components'
import { rgba, lighten, darken } from 'polished'
import { useTheme } from 'emotion-theming'
import eyeIcon from '@images/eye-icon.svg'

interface Props {
  animationDelay?: number
  title: string
  description?: string
  slug: string
  categoryNames?: (string | undefined)[]
  fluidImage?: FluidObject | FluidObject[]
}

interface StyledCardProps extends StyledComponent {
  animationDelay?: number
}

const ProjectCard = (props: Props) => {
  const {
    slug,
    fluidImage,
    title,
    description,
    categoryNames,
    animationDelay,
  } = props

  const theme: Theme = useTheme()

  return (
    <Article animationDelay={animationDelay}>
      <div>
        <Link to={`/project/${slug}/`} css={overlay} />
        <Overlay />
        <CardImage>
          {fluidImage && (
            <GatsbyImage fluid={fluidImage} css={backgroundImage} />
          )}
          <Icon src={eyeIcon} alt="view" />
        </CardImage>
        <CardHeader>
          <Title as="h4" size={4.5}>
            {title}
          </Title>
          <Description as="p" size={4} color={theme.textSecondary}>
            {description}
          </Description>
          <Tags>
            {map(categoryNames, (categoryName, index) => (
              <Typograhy as="span" key={index} css={transitionDelay(index)}>
                {categoryName}
              </Typograhy>
            ))}
          </Tags>
        </CardHeader>
      </div>
    </Article>
  )
}

const backgroundImage = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -99;
`

const transitionDelay = (delay: number) => css`
  transition-delay: ${delay * 0.15}s !important;
`

const overlay = css`
  ${backgroundImage}
  z-index: 99;
`

const scaleInCenter = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const Icon = styled.img`
  position: absolute;
  align-self: center;
`

const CardHeader = styled.div<StyledCardProps>`
  position: relative;
  background-color: ${props => darken(0.01, props.theme.background)};
  padding: ${spacing(1.8)} ${spacing(1.5)};
`

const Title = styled(Typograhy)`
  transition: all 0.3s ease-in-out 0.7s;
  font-family: 'Open Sans' !important;
  margin-bottom: ${spacing(1.2)};
`

const Description = styled(Typograhy)`
  margin: 0;
  transition: all 0.3s ease-out 0.7s;
`

const Tags = styled.div<StyledComponent>`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  top: 4%;
  width: 100%;
  height: 100%;
  padding-right: ${spacing(2)};

  & span {
    opacity: 0;
    transform: translateY(-80%);
    transition: all 0.3s ease-in-out;
    font-size: ${spacing(1.2)};
    padding: 6px 12px;
    font-family: 'Open Sans' !important;
    color: ${prop => prop.theme.primary};
    background-color: ${prop => lighten(0.04, prop.theme.background)};
    border-radius: 8px;

    &:not(:last-of-type) {
      margin-right: 0.25rem;
    }
  }
`

const Overlay = styled.div<StyledCardProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${props => rgba(props.theme.black, 0.5)};
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`

const CardImage = styled.div<StyledCardProps>`
  transition: transform 0.9s ease-out;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  position: relative;
  justify-content: center;
  height: 200px;

  ${Icon} {
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
`

const Article = styled.article<StyledCardProps>`
  position: relative;
  background-color: ${props => props.theme.background};
  transition: transform 0.5s ease-in-out;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0 10px 10px 1px ${props => rgba(props.theme.black, 0.3)};
  cursor: pointer;
  animation: ${scaleInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: ${props => props.animationDelay}s;

  &:hover {
    box-shadow: 0 10px 20px 10px rgba(black, 0.2);

    ${Overlay} {
      opacity: 1;
    }

    ${CardImage} {
      ${Icon} {
        opacity: 1;
        transform-origin: center center;
      }
    }

    ${Title} {
      transition-delay: 0s;
      opacity: 0;
      transform: translateY(10%);
    }

    ${Description} {
      transition-delay: 0s;
      opacity: 0;
      transform: translateY(30%);
    }

    ${Tags} {
      span {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`

export default ProjectCard
