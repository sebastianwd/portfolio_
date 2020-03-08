import React, { useCallback, useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import Parallax from 'parallax-js'
import { Nav } from '@components'
import { useEventListener } from '@hooks'
import circles from '@images/parallax-1.png'
import triangles from '@images/parallax-2.png'
import { css } from '@emotion/core'

interface Props {
  children: React.ReactNode
}

const DefaultLayout = (props: Props) => {
  const { children } = props

  const sceneRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(({ clientX, clientY }: MouseEvent) => {
    console.log(clientX, clientY)
  }, [])

  useEventListener('mousemove', handleMouseMove)

  useEffect(() => {
    const parallax = new Parallax(sceneRef.current) as any

    return () => parallax.disable()
  }, [])

  return (
    <Wrapper>
      <Scene ref={sceneRef}>
        <Circles data-depth="0.2" />
        <Triangles data-depth="0.6" />
      </Scene>
      <Container>{children}</Container>
      <Nav />
    </Wrapper>
  )
}

const fullHeight = css`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Container = styled.main`
  grid-area: main;
  min-height: 100%;
`

const Scene = styled.div`
  ${fullHeight}
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
  display: grid;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  grid-template-areas:
    'nav main'
    'nav main'
    'nav main';
  grid-template-columns: auto minmax(0, 1fr);
`

export default DefaultLayout
