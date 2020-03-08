import mediaQueryGenerator, { Breakpoint } from './media-query'

export interface Theme {
  name: string
  background: string
  surface: string
  black: string
  primary: string
  secondary: string
  textPrimary: string
  textSecondary: string
}

export interface StyledComponent extends React.HTMLAttributes<HTMLElement> {
  [x: string]: any
  theme?: Theme
}

export const bp = {
  from: (breakpointName: Breakpoint) =>
    mediaQueryGenerator(breakpointName, 'from'),
  to: (breakpointName: Breakpoint) => mediaQueryGenerator(breakpointName, 'to'),
}

/**
 *
 * @param amount the multiplier of the base spacing
 * @returns the amount x10 in pixels
 */
export const spacing = (amount: number) => `${amount}rem`

const themes: Record<string, Theme> = {
  default: {
    name: 'default',
    background: '#17171A',
    surface: '#0E0E0F',
    black: '#0C0C0C',
    primary: '#00fff5',
    secondary: '#1D1D21',
    textPrimary: '#FAF3F3',
    textSecondary: '#BBBBBB',
  },
  light: {
    name: 'light',
    background: '#FFF',
    surface: '#1D1D21',
    black: '#0C0C0C ',
    primary: '#00fff5',
    secondary: '#2D2D2D',
    textPrimary: '#000',
    textSecondary: 'rgba(245, 245, 247, 0.8)',
  },
}

export default themes
