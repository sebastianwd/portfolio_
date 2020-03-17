/* eslint-disable react/button-has-type */
import React from 'react'
import { spacing, StyledComponent } from '@theme'
import styled from '@emotion/styled'

interface Props extends React.ComponentProps<'button'> {
  children: React.ReactNode
}

const Button = (props: Props) => {
  const { children, type = 'button', ...rest } = props

  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button<StyledComponent>`
  position: relative;
  margin-bottom: ${spacing(1)};
  display: inline-flex;
  font-size: ${spacing(1.5)};
  text-transform: uppercase;
  letter-spacing: 4px;
  padding: ${spacing(0.6)} ${spacing(2)};
  border-radius: 4px;
  transition: 0.2s;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  border: 0.2em solid ${props => props.theme.primary};

  &:disabled {
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    box-shadow: 0 -1px 10px ${props => props.theme.primary};
  }

  &:active:not(:disabled) {
    opacity: 0.8;
    transform: translateY(1px);
  }

  &:link,
  &:visited {
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 1;
    border-radius: 4px;
    animation-fill-mode: both;
    letter-spacing: 2px;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 10%;
    background: #222;
    height: 0.3em;
    right: 20%;
    top: -0.21em;
    transform: skewX(-45deg);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 10%;
    background: #222;
    height: 0.3em;
    left: 20%;
    bottom: -0.25em;
    transform: skewX(45deg);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &:hover:not(:disabled) {
    &::before {
      right: 80%;
    }
    &::after {
      left: 80%;
    }
  }
`

export default Button
