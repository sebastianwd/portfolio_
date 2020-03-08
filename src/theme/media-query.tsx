const breakpoints = {
  xs: '600',
  sm: '900',
  md: '1200',
  lg: '1800',
}

const directions = {
  from: 'min',
  to: 'max',
}

export type Breakpoint = keyof typeof breakpoints

const mediaQueryGenerator = (
  breakpointName: Breakpoint,
  direction: keyof typeof directions
) => {
  const arr = Object.keys(breakpoints).map(key => [key, breakpoints[key]])

  const mediaQueryDirection = directions[direction]

  const [result] = arr.reduce((acc, [name, size]) => {
    if (breakpointName === name) {
      return [...acc, `@media (${mediaQueryDirection}-width: ${size}px)`]
    }

    return acc
  }, [])

  return result
}

export default mediaQueryGenerator
