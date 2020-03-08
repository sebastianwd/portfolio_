const breakpoints = {
  xs: '576',
  sm: '768',
  md: '992',
  lg: '1200',
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
