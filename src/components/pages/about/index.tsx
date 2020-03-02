import React from 'react'
import { Typograhy } from '@components'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { rhythm } from '@theme/typography'
import { StyledComponent, Theme } from '@theme'
import { keyframes } from '@emotion/core'
import reactIcon from '@images/react-icon-big.svg'
import graphqlIcon from '@images/graphql-icon-big.png'
import nodejsIcon from '@images/nodejs-icon-big.svg'
import csharpIcon from '@images/c-sharp-logo-big.svg'

const AboutPage = () => {
  const theme: Theme = useTheme()

  return (
    <Container id="about">
      <Inner>
        <LeftContent>
          <Typograhy as="h2" weight="bold" color={theme.primary} size={13}>
            About me /&gt;
          </Typograhy>
          <Typograhy as="p">
            I am Sebastian. A full stack web developer based in Lima, Peru.
            <br /> I like to create cool stuff using my web development skills.
          </Typograhy>
          <Typograhy as="p">
            Over the years, I have gained a lot of experience with designing
            <br /> and developing websites, web services and mobile apps.
          </Typograhy>
          <Typograhy as="p">
            Currently I’m mainly developing with{' '}
            <ExternalLink as="a" href="https://reactjs.org/">
              React
            </ExternalLink>{' '}
            and{' '}
            <ExternalLink as="a" href="https://graphql.org/">
              GraphQL
            </ExternalLink>{' '}
            at work,
            <br /> but I like to experiment with different kind of languages and
            programming tools.
            <br /> Some other things I’ve dealt with are:
          </Typograhy>
          <ul>
            <li>
              <ExternalLink as="a" href="https://www.docker.com/">
                Docker
              </ExternalLink>{' '}
              containers
            </li>
            <li>Setting up CI/CD pipelines</li>
            <li>
              UI design with{' '}
              <ExternalLink as="a" href="https://www.figma.com/">
                Figma{' '}
              </ExternalLink>
            </li>
          </ul>
        </LeftContent>
        <RightContent>
          <Pyramid>
            <div />
            <div />
            <div />
            <div />
          </Pyramid>
        </RightContent>
      </Inner>
    </Container>
  )
}

const spin = keyframes`
 from {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    to {
        transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
`

const Container = styled.div`
  max-width: ${rhythm(70)};
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
  max-width: 50%;
`

const RightContent = styled.div`
  flex-basis: 40%;
  position: relative;
`

const ExternalLink = styled(Typograhy)<StyledComponent>`
  margin-bottom: 18%;
  color: ${props => props.theme.primary};
`

const Pyramid = styled.div`
  position: absolute;
  left: 50%;
  height: 500px;
  width: 100px;
  transform-style: preserve-3d;
  animation: ${spin} 10s linear infinite;
  transform-origin: 116px 200px 116px;

  & > div {
    position: absolute;
    border-style: solid;
    border-width: 200px 0 200px 346px;
    transform-origin: 0 0;

    &:first-of-type {
      border-color: transparent transparent transparent rgba(50, 50, 50, 0.6);
      transform: rotateY(-19.5deg) rotateX(180deg) translateY(-400px);
      &::after {
        position: absolute;
        content: url(${reactIcon});
      }
    }
    &:nth-of-type(2) {
      border-color: transparent transparent transparent rgba(50, 50, 50, 0.6);
      transform: rotateY(90deg) rotateZ(60deg) rotateX(180deg)
        translateY(-400px);
      &::after {
        position: absolute;
        content: url(${graphqlIcon});
      }
    }
    &:nth-of-type(3) {
      border-color: transparent transparent transparent rgba(50, 50, 50, 0.9);
      transform: rotateX(60deg) rotateY(19.5deg);
      &::after {
        position: absolute;
        content: url(${nodejsIcon});
      }
    }
    &:nth-of-type(4) {
      border-color: transparent transparent transparent rgba(50, 50, 50, 0.8);
      transform: rotateX(-60deg) rotateY(19.5deg) translateX(-116px)
        translateY(-200px) translateZ(326px);
      &::after {
        position: absolute;
        width: 150px;
        content: url(${csharpIcon});
        left: -315px;
        top: -91px;
      }
    }

    &::after {
      position: absolute;
      color: #fff;
      left: -311px;
      top: -69px;
      text-align: center;
      opacity: 0.6;
    }
  }
`

export default AboutPage
