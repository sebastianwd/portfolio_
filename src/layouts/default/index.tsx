import React, { useCallback, useState, useRef, useEffect } from 'react'
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

  const scrollerRef = useRef<HTMLDivElement>(null)

  const [isScrolled, setScrolled] = useState(false)

  const pathName = document.location.pathname

  const sessionKey = `scrollPosition_${pathName}`

  const handleMouseMove = useCallback(({ clientX, clientY }: MouseEvent) => {
    console.log(clientX, clientY)
  }, [])

  const handleScroll = useCallback(() => {
    if (isScrolled) {
      return
    }
    sessionStorage.setItem(sessionKey, '')

    setScrolled(true)
  }, [setScrolled])

  const handleBeforeUnload = () => {
    const scrollPosition = scrollerRef.current?.scrollTop

    sessionStorage.setItem(sessionKey, String(scrollPosition))
  }

  useEventListener('mousemove', handleMouseMove)

  useEventListener('scroll', handleScroll, scrollerRef.current)

  useEffect(() => {
    const parallax = new Parallax(sceneRef.current) as any

    const scrollPosition = sessionStorage.getItem(sessionKey)

    if (scrollPosition && scrollerRef.current) {
      scrollerRef.current.scrollTop = Number(scrollPosition)
    }

    return () => {
      handleBeforeUnload()

      parallax.disable()
    }
  }, [])

  return (
    <Wrapper id="scroller" ref={scrollerRef}>
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
    'main nav'
    'main nav'
    'main nav';
  grid-template-columns: minmax(0, 1fr) auto;
`

export default DefaultLayout
