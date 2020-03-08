import React from 'react'
import home from '@images/home.svg'
import about from '@images/about.svg'
import portfolio from '@images/portfolio.svg'
import contact from '@images/contact.svg'
import styled from '@emotion/styled'
import { times, random, floor } from 'lodash'
import { Link } from 'gatsby'
import { lighten } from 'polished'
import { Typograhy } from '@components'
import { StyledComponent, spacing, bp } from '@theme'
import { keyframes } from '@emotion/core'
import WavyBackground from './wavy-background'

interface StyledLink extends StyledComponent {
  activeClassName?: string
  to: string
}

const Nav = () => {
  return (
    <NavContainer>
      <Desktop>
        <WavyBackground />
        <Circle />
        <ul>
          <NavItem>
            <NavLink to="/" activeClassName="active-link">
              <img src={home} alt="home" />
              <Title as="span" data-text="HOME" weight="light" size={3}>
                home
              </Title>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" activeClassName="active-link">
              <img src={about} alt="about" />
              <Title as="span" weight="light" size={3}>
                about
              </Title>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects" activeClassName="active-link">
              <img src={portfolio} alt="portfolio" />
              <Title as="span" weight="light" size={3}>
                portfolio
              </Title>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" activeClassName="active-link">
              <img src={contact} alt="contact" />
              <Title as="span" weight="light" size={3}>
                contact
              </Title>
            </NavLink>
          </NavItem>
        </ul>
        <Circle />
      </Desktop>
      <Mobile>
        <ul>
          <NavItem>
            <NavLink to="/" activeClassName="active-link">
              <img src={home} alt="home" />
              <Title as="span" data-text="HOME" weight="light" size={3}>
                home
              </Title>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" activeClassName="active-link">
              <img src={about} alt="about" />
              <Title as="span" weight="light" size={3}>
                about
              </Title>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects" activeClassName="active-link">
              <img src={portfolio} alt="portfolio" />
              <Title as="span" weight="light" size={3}>
                portfolio
              </Title>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" activeClassName="active-link">
              <img src={contact} alt="contact" />
              <Title as="span" weight="light" size={3}>
                contact
              </Title>
            </NavLink>
          </NavItem>
        </ul>
      </Mobile>
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

const Mobile = styled.div<StyledComponent>`
  background: ${props => props.theme.surface};
  display: flex;
  flex: 1 0 100%;

  ${bp.from('sm')} {
    display: none;
  }

  & > ul {
    display: flex;
    padding-top: ${spacing(1)};
    margin: 0;
    flex: 1 0 100%;
    justify-content: space-around;
    align-items: center;

    & li {
      margin-bottom: 1.5rem;
    }
  }
`

const NavItem = styled.li<StyledComponent>`
  background: ${props => props.theme.surface};
  cursor: pointer;
  margin-bottom: ${spacing(3.2)};
  list-style: none;
`

const Circle = styled.div<StyledComponent>`
  border: 2px solid ${props => props.theme.primary};
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-right: 31%;
  align-self: center;
`

const Desktop = styled.div<StyledComponent>`
  display: flex;
  flex-direction: column;
  align-self: center;
  clip-path: url(#svg-blob__clip);
  background-color: ${props => props.theme.surface};
  padding: 20px 20px;
  padding-left: 5px;

  ${bp.to('sm')} {
    display: none;
  }

  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    #svg-blob__clip {
      transform: scale(0.22, 0.48);
    }
  }

  & > ul {
    position: relative;
    margin-bottom: 0;

    & li:first-of-type {
      margin-top: ${spacing(4)};
    }

    &::before {
      content: '';
      height: 100%;
      position: absolute;
      left: 20%;
      background: ${props => props.theme.primary};
      width: 2px;
      z-index: -1;
    }
  }
`

const NavContainer = styled.nav<StyledComponent>`
  position: sticky;
  grid-area: nav;
  display: flex;
  padding-left: ${spacing(2.4)};
  top: 0;
  max-height: 100%;
  overflow: hidden;
  right: 0;

  ${bp.to('sm')} {
    padding: 0;
  }
`

const Title = styled(Typograhy)<StyledComponent>`
  text-transform: uppercase;
  margin-left: 8px;
  color: ${props => props.theme.primary};
  position: relative;

  ${bp.to('sm')} {
    margin: 0;
  }

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
    visibility: hidden;
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

const NavLink = styled(Link)<StyledLink>`
  display: flex;
  align-items: center;
  transition: filter 0.2s;
  justify-content: flex-start;
  position: relative;

  ${bp.to('sm')} {
    flex-direction: column;
  }

  & img {
    padding: 4px 0;
    z-index: 1;
    height: 48px;
  }

  &:hover,
  &.active-link {
    filter: drop-shadow(0 0 12px ${props => props.theme.primary});

    ${Title} {
      &::before {
        visibility: visible;
      }

      &::after {
        transform: scaleX(1);
      }
    }
  }
`

export default Nav
