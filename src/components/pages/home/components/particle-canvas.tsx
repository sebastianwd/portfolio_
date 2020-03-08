import React, { useRef, useEffect } from 'react'
import NextParticle from '../../../../lib/next-particle'

interface Props {
  src: string
}

const windowGlobal = typeof window !== 'undefined' ? window : null

const ParticleCanvas = (props: Props) => {
  const { src } = props

  const particleRef = useRef<HTMLImageElement | null>(null)

  let canvasSize = '800'

  let nextParticle: any = null

  const windowWidth = Math.max(windowGlobal?.innerWidth || 0)

  if (windowWidth < 768) {
    canvasSize = '400'
  } else if (windowWidth >= 768) {
    canvasSize = '800'
  }

  const resizeCanvas = () => {
    if (!nextParticle) {
      return
    }

    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    )
    if (width < 768 && nextParticle.width !== 400) {
      nextParticle.width = '400'
      nextParticle.height = '400'
      nextParticle.start()
    } else if (width >= 768 && nextParticle.width !== 800) {
      nextParticle.width = '800'
      nextParticle.height = '900'
      nextParticle.start()
    }
  }

  useEffect(() => {
    nextParticle = new NextParticle(particleRef.current)

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      nextParticle.stop()
    }
  }, [])

  return (
    <div>
      <div>
        <img
          alt="logo"
          id="logo"
          className="d-none"
          data-renderer="webgl"
          ref={particleRef}
          data-width={canvasSize}
          data-height={100 + +canvasSize}
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
      </div>
    </div>
  )
}

export default ParticleCanvas
