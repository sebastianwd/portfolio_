import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { bp, spacing } from '@theme'
import NextParticle from '../../../../lib/next-particle'

interface Props {
  src: string
}

const ParticleCanvas = (props: Props) => {
  const { src } = props

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
        data-width={1200}
        data-height={1200}
        data-min-width="250"
        data-max-width="180"
        data-max-height="180"
        data-mouse-force="40"
        data-noise="40"
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
