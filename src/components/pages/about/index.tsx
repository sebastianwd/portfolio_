import React from 'react'
import { Typograhy } from '@components'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { rhythm } from '@theme/typography'
import { StyledComponent, Theme } from '@theme'
import { Link as AnchorLink, Element } from 'react-scroll'
import { keyframes } from '@emotion/core'
import reactIcon from '@images/react-icon-big.svg'
import graphqlIcon from '@images/graphql-icon-big.png'
import nodejsIcon from '@images/nodejs-icon-big.svg'

const HomePage = () => {
  const theme: Theme = useTheme()

  return (
    <Container name="about">
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

const Container = styled(Element)`
  max-width: ${rhythm(100)};
  margin: 0 auto;
  padding: 0 ${rhythm(5.5)};
  display: flex;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
`

const LeftContent = styled.div`
  margin-bottom: 16%;
  max-width: 50%;
`

const RightContent = styled.div`
  margin-bottom: 16%;
  width: 36%;
  position: relative;
  align-items: center;
  justify-content: center;
`

const ExternalLink = styled(Typograhy)<StyledComponent>`
  margin-bottom: 18%;
  color: ${props => props.theme.primary};
`

const Pyramid = styled.div`
  position: absolute;
  left: 50%;
  margin-left: 120px;
  top: 50%;
  margin-top: -250px;
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

    &:first-child {
      border-color: transparent transparent transparent rgba(50, 50, 50, 0.6);
      transform: rotateY(-19.5deg) rotateX(180deg) translateY(-400px);
      &::after {
        position: absolute;
        content: url(${reactIcon});
      }
    }
    &:nth-child(2) {
      border-color: transparent transparent transparent rgba(50, 50, 50, 0.6);
      transform: rotateY(90deg) rotateZ(60deg) rotateX(180deg)
        translateY(-400px);
      &::after {
        position: absolute;
        content: url(${graphqlIcon});
      }
    }
    &:nth-child(3) {
      border-color: transparent transparent transparent rgba(50, 50, 50, 0.9);
      transform: rotateX(60deg) rotateY(19.5deg);
      &::after {
        position: absolute;
        content: url(${nodejsIcon});
      }
    }
    &:nth-child(4) {
      border-color: transparent transparent transparent rgba(50, 50, 50, 0.8);
      transform: rotateX(-60deg) rotateY(19.5deg) translateX(-116px)
        translateY(-200px) translateZ(326px);
      &::after {
        position: absolute;
        width: 150px;
        content: url(https://www.shareicon.net/data/128x128/2016/07/08/117367_logo_512x512.png);
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

export default HomePage
