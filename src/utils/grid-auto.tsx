import { css } from '@emotion/core'

const gridAuto = (minWidth: number, gap = 4) => css`
  display: grid;
  grid-column-gap: ${gap}rem;
  grid-row-gap: ${gap}rem;
  grid-template-columns: repeat(auto-fit, minmax(${minWidth}px, 1fr));

  > * {
    width: auto;
  }
`

export default gridAuto
