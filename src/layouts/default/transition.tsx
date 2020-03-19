import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'
import { RouteComponentProps } from '@reach/router'
import styled from '@emotion/styled'

interface Props extends RouteComponentProps {
  children: React.ReactNode
}

const Transition = (props: Props) => {
  const { location, children } = props

  const timeout = 450

  const getTransitionStyles = {
    entering: {
      position: 'absolute',
      opacity: 0,
      transform: 'translateZ(-100px) translate3d(0, 0, 0)',
    },
    entered: {
      transition: `transform ${timeout}ms ease , opacity ${timeout}ms ease`,
      opacity: 1,
      transform: 'translateZ(0)',
    },
    exiting: {
      transition: `transform ${timeout}ms cubic-bezier(0.445, 0.050, 0.550, 0.950) , opacity ${timeout}ms ease`,
      opacity: 0,
      transform: 'translateZ(-200px) translateY(10px) translate3d(0, 0, 0)',
    },
  }
  return (
    <TransitionGroup component={null}>
      <ReactTransition
        key={location?.pathname}
        timeout={{
          enter: timeout,
          exit: timeout - 100,
        }}
      >
        {status => (
          <Container
            style={{
              ...getTransitionStyles[status],
              transformStyle: 'preserve-3d',
            }}
          >
            {children}
          </Container>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}

const Container = styled.main`
  grid-area: main;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
`

export default Transition
