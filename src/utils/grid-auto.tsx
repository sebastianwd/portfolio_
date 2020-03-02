import { css } from '@emotion/core'

const gridAuto = (minWidth: number, gap = 25) => css`
  display: grid;
  grid-column-gap: ${gap}px;
  grid-row-gap: ${gap}px;
  grid-template-columns: repeat(auto-fit, minmax(${minWidth}px, 1fr));

  > * {
    width: auto;
  }
`

export default gridAuto
