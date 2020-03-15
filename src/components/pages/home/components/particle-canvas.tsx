import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { bp, spacing } from '@theme'
import { useMedia } from '@hooks'
import NextParticle from '../../../../lib/next-particle'

interface Props {
  src: string
}

const ParticleCanvas = (props: Props) => {
  const { src } = props

  const size = useMedia(['(max-width: 600px)'], [400], 900)

  const particleRef = useRef<HTMLImageElement | null>(null)

  let nextParticle: any = null

  useEffect(() => {
    nextParticle = new NextParticle(particleRef.current)

    return () => nextParticle.stop()
  }, [])

  return (
    <Wrapper>
      <img
        alt="logo"
        id="logo"
        className="d-none"
        data-renderer="webgl"
        ref={particleRef}
        data-width={size}
        data-height={size}
        data-min-width="250"
        data-max-width="180"
        data-max-height="180"
        data-mouse-force="40"
        data-noise="20"
        data-particle-size="3"
        data-particle-gap="3"
        data-min-height="250"
        src={src}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  z-index: -1;
  height: 100%;
  transform: translate3d(0, 0, 0);

  ${bp.to('xs')} {
    margin: 40px auto 0;
    height: calc(100vw - 80px);
    max-width: 150px;
    max-height: 150px;
    margin-bottom: 10%;
  }

  canvas {
    touch-action: none;
    cursor: inherit;
    max-width: 400%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    ${bp.to('sm')} {
      margin-top: 20%;
    }

    ${bp.to('xs')} {
      margin-top: 20%;
      height: ${spacing(80)} !important;
    }
  }
`

export default ParticleCanvas
