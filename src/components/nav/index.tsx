import React from 'react'
import home from '@images/home.svg'
import about from '@images/about.svg'
import portfolio from '@images/portfolio.svg'
import contact from '@images/contact.svg'
import styled from '@emotion/styled'
import { rhythm } from '@theme/typography'
import { Typograhy } from '@components'
import { StyledComponent } from '@theme'

const Nav = () => {
  return (
    <NavContainer>
      <ul>
        <NavItem>
          <ItemContent>
            <Title as="span" weight="light" size={3}>
              home
            </Title>
            <img src={home} alt="home" />
          </ItemContent>
        </NavItem>
        <NavItem>
          <ItemContent>
            <Title as="span" weight="light" size={3}>
              portfolio
            </Title>
            <img src={portfolio} alt="portfolio" />
          </ItemContent>
        </NavItem>
        <NavItem>
          <ItemContent>
            <Title as="span" weight="light" size={3}>
              about
            </Title>
            <img src={about} alt="about" />
          </ItemContent>
        </NavItem>
        <NavItem>
          <ItemContent>
            <Title as="span" weight="light" size={3}>
              contact
            </Title>
            <img src={contact} alt="contact" />
          </ItemContent>
        </NavItem>
      </ul>
    </NavContainer>
  )
}

const NavItem = styled.li<StyledComponent>`
  background: ${props => props.theme.background};
  cursor: pointer;
  margin-bottom: ${rhythm(1.2)};
  list-style: none;
`

const NavContainer = styled.nav<StyledComponent>`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  top: 0;
  right: 36px;
  height: 100%;

  & > ul {
    position: relative;

    & li:first-child {
      margin-top: ${rhythm(1.3)};
    }

    &::before {
      content: '';
      height: 100%;
      position: absolute;
      right: 20%;
      background: ${props => props.theme.primary};
      width: 1px;
      z-index: -1;
    }
  }
`

const Title = styled(Typograhy)<StyledComponent>`
  text-transform: uppercase;
  margin-right: 8px;
  color: ${props => props.theme.primary};
`

const ItemContent = styled.div<StyledComponent>`
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
  }
`

export default Nav
