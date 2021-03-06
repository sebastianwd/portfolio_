import React, { useCallback, useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import Parallax from 'parallax-js'
import { RouteComponentProps } from '@reach/router'
import { Nav } from '@components'
import { useEventListener } from '@hooks'
import circles from '@images/parallax-1.png'
import triangles from '@images/parallax-2.png'
import { css } from '@emotion/core'
import { bp, spacing } from '@theme'
import linkedinIcon from '@images/linkedin-icon.svg'
import githubIcon from '@images/github-icon.svg'
import Transition from './transition'

interface Props extends RouteComponentProps {
  children: React.ReactNode
}

const DefaultLayout = (props: Props) => {
  const { children, location } = props

  const sceneRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(({ clientX, clientY }: MouseEvent) => {
    return null
  }, [])

  useEventListener('mousemove', handleMouseMove)

  useEffect(() => {
    const parallax = new Parallax(sceneRef.current) as any

    return () => parallax.disable()
  }, [])

  return (
    <>
      <Scene ref={sceneRef}>
        <Circles data-depth="0.2" />
        <Triangles data-depth="0.6" />
      </Scene>
      <Wrapper>
        <IconContainer>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sebastian-luque-891b90185/"
            rel="noopener noreferrer"
          >
            <Icon src={linkedinIcon} alt="linkedin" />
          </a>
          <a
            target="_blank"
            href="https://github.com/sebastianwd"
            rel="noopener noreferrer"
          >
            <Icon src={githubIcon} alt="github" />
          </a>
        </IconContainer>
        <Transition location={location}>{children}</Transition>
        <Nav />
      </Wrapper>
    </>
  )
}

const IconContainer = styled.div`
  position: absolute;
  right: 24px;
  top: 20px;
  z-index: 999;

  > :not(:last-child) {
    margin-right: 20px;
  }
`

const Icon = styled.img`
  height: ${spacing(4.5)};
  cursor: pointer;
`

const fullHeight = css`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Scene = styled.div`
  ${fullHeight}
  overflow: hidden;
`

const Circles = styled.div`
  background: url(${circles}) 0% 0% / cover transparent;
  opacity: 0.5;
  ${fullHeight}
`

const Triangles = styled.div`
  background: url(${triangles}) 0% 0% / cover transparent;
  opacity: 0.5;
  ${fullHeight}
`

const Wrapper = styled.div`
  perspective: 1200px;
  transform-style: preserve-3d;
  display: grid;
  height: 100%;
  overflow: hidden;
  grid-template-areas:
    'nav main'
    'nav main'
    'nav main';
  grid-template-columns: auto minmax(0, 1fr);

  ${bp.to('md')} {
    grid-template-areas:
      'main'
      'main'
      'nav';
    grid-template-columns: auto;
    grid-template-rows: minmax(0, 1fr) auto;
  }
`

export default DefaultLayout
