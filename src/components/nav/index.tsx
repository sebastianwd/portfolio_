import React from 'react'
import home from '@images/home.svg'
import about from '@images/about.svg'
import portfolio from '@images/portfolio.svg'
import contact from '@images/contact.svg'
import styled from '@emotion/styled'
import { times, random, floor } from 'lodash'
import { Link } from 'react-scroll'
import { rhythm } from '@theme/typography'
import { lighten } from 'polished'
import { Typograhy } from '@components'
import { StyledComponent } from '@theme'
import { keyframes } from '@emotion/core'

const Nav = () => {
  return (
    <NavContainer>
      <Circle />
      <ul>
        <NavItem>
          <NavLink to="home" smooth containerId="scroller">
            <Title as="span" data-text="HOME" weight="light" size={3}>
              home
            </Title>
            <img src={home} alt="home" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Title as="span" weight="light" size={3}>
              portfolio
            </Title>
            <img src={portfolio} alt="portfolio" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="about" smooth containerId="scroller">
            <Title as="span" weight="light" size={3}>
              about
            </Title>
            <img src={about} alt="about" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Title as="span" weight="light" size={3}>
              contact
            </Title>
            <img src={contact} alt="contact" />
          </NavLink>
        </NavItem>
      </ul>
      <Circle />
    </NavContainer>
  )
}

const generate = () => {
  const steps: string[] = []

  times(20, index => {
    const step = `${floor(index * 5)}% {
  clip:   rect(${random(0, 100)}px, 9999px, ${random(0, 100)}px, 0);
} `

    steps.push(step)
  })

  return steps.join(' ')
}

const glitch = keyframes`
${generate()}
`

const NavItem = styled.li<StyledComponent>`
  background: ${props => props.theme.background};
  cursor: pointer;
  margin-bottom: ${rhythm(1.2)};
  list-style: none;
`

const Circle = styled.div<StyledComponent>`
  border: 2px solid ${props => props.theme.primary};
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-left: 80%;
`

const NavContainer = styled.nav<StyledComponent>`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  top: 0;
  right: 48px;
  height: 100%;

  & > ul {
    position: relative;
    margin-bottom: 0;

    & li:first-child {
      margin-top: ${rhythm(1.3)};
    }

    &::before {
      content: '';
      height: 100%;
      position: absolute;
      right: 20%;
      background: ${props => props.theme.primary};
      width: 2px;
      z-index: -1;
    }
  }
`

const Title = styled(Typograhy)<StyledComponent>`
  text-transform: uppercase;
  margin-right: 8px;
  color: ${props => props.theme.primary};
  position: relative;
  &::before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: 10px 0 #2541bd;
    top: 0;
    color: ${props => lighten(0.2, props.theme.primary)};
    background: transparent;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: ${glitch} 3s linear infinite alternate-reverse;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.primary};
    transform: scaleX(0);
    transition: all 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
`

const NavLink = styled(Link)<StyledComponent>`
  display: flex;
  align-items: center;
  transition: filter 0.2s;
  justify-content: flex-end;
  position: relative;

  & img {
    padding: 4px 0;
    z-index: 1;
  }

  &:hover {
    filter: drop-shadow(0 0 12px ${props => props.theme.primary});

    ${Title} {
      &::after {
        transform: scaleX(1);
      }
    }
  }
`

export default Nav
