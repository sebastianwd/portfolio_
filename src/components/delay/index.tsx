import React, { useState, useEffect } from 'react'

interface Props {
  waitBeforeShow: number
  children: React.ReactNode
}

const Delay = (props: Props) => {
  const { waitBeforeShow, children } = props

  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHidden(false)
    }, waitBeforeShow)

    return () => clearTimeout(timeout)
  }, [])

  return hidden ? null : <>{children}</>
}

export default Delay
