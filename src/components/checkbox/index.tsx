import React from 'react'
import styled from '@emotion/styled'
import { StyledComponent } from '@theme'
import { rhythm } from '@theme/typography'

interface Props {
  id?: string
}

const Checkbox: React.FC<Props> = props => {
  const { id, children } = props

  return (
    <Wrapper>
      <Input type="checkbox" id={id} />
      <Label htmlFor={id}>{children}</Label>
    </Wrapper>
  )
}

const Wrapper = styled.div<StyledComponent>`
  position: relative;
  margin: ${rhythm(0.5)};
  text-align: left;
`

const Label = styled.label<StyledComponent>`
  cursor: pointer;
  display: inline;
  line-height: 1.25em;
  vertical-align: top;
  clear: both;
  padding-left: 1px;

  &:not(:empty) {
    padding-left: 0.75em;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
  }

  &::before {
    width: 1.25em;
    height: 1.25em;
    background: ${props => props.theme.background};
    border: 2px solid ${props => props.theme.primary};
    border-radius: 0.125em;
    cursor: pointer;
    transition: background 0.3s;
  }

  &::after {
  }
`

const Input = styled.input<StyledComponent>`
  outline: 0;
  user-select: none;
  visibility: hidden;
  margin: 0;
  width: ${rhythm(1)};
  display: block;
  float: left;
  font-size: inherit;
  &:checked {
    + label::before {
      background: ${props => props.theme.primary};
      border: none;
    }
    + label::after {
      transform: translate(0.25em, 0.33em) rotate(-45deg);
      width: 0.75em;
      height: 0.375em;
      border: 0.125em solid ${props => props.theme.background};
      border-top-style: none;
      border-right-style: none;
    }
  }

  &:disabled {
    + label::before {
      border-color: ${props => props.theme.textSecondary};
    }
    &:checked {
      + label::before {
        background: ${props => props.theme.textSecondary};
      }
    }
  }
`

export default Checkbox
