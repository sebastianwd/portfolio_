import React from 'react'
import styled from '@emotion/styled'
import { StyledComponent } from '@theme'

interface Props {
  id?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  defaultChecked: boolean
  name: string
}

const Radio: React.FC<Props> = props => {
  const { id, children, onChange, defaultChecked, name } = props

  return (
    <Wrapper>
      <input
        type="radio"
        name={name}
        id={id}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={id}>{children}</label>
    </Wrapper>
  )
}

const Wrapper = styled.div<StyledComponent>`
  position: relative;
  margin: 0 0 12px;

  input {
    position: absolute;
    opacity: 0;
    z-index: 0;

    &:checked + label {
      &:before {
        border-color: ${props => props.theme.primary};
      }

      &:after {
        transform: scale(1, 1);
      }
    }
  }
  label {
    display: block;
    padding: 0 0 0 24px;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      top: 4px;
      left: 0;
      width: 16px;
      height: 16px;
      background-color: transparent;
      border: 2px solid ${props => props.theme.primary};
      border-radius: 14px;
      z-index: 1;
      transition: border-color 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:after {
      content: '';
      position: absolute;
      top: 8px;
      left: 4px;
      width: 8px;
      height: 8px;
      background-color: ${props => props.theme.primary};
      border-radius: 50%;
      z-index: 2;
      transform: scale(0, 0);
      transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`

export default Radio
