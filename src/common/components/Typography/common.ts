import { css } from 'styled-components/macro'
import { BLACK_COLOR, SECONDARY_COLOR, WHITE_COLOR } from '../../constants/colors'

export const normalizeStyle = `
  letter-spacing: 0;
  font-style: normal;
  font-stretch: normal;
  text-transform: none;
`

export const highlightStyle = `
  -webkit-tap-highlight-color: transparent;
  ::-moz-focus-inner {
    border: 0;
  }
`

export const smoothingStyle = `
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const selectionStyle = `
  ::selection, *::selection {
    color: ${WHITE_COLOR};
    background-color: ${SECONDARY_COLOR};
  }
`

export type TypographyProps = {
  $color?: string
  $align?: string
  $marginBottom?: number
  $marginTop?: number
  $marginLeft?: number
  $marginRight?: number
  $display?: string
}

export const typographyMixin = css<TypographyProps>`
  transition: color 0.2s ease-out;
  color: ${({ $color = BLACK_COLOR }) => $color};
  text-align: ${({ $align = 'left' }) => $align};
  margin-top: ${({ $marginTop = 0 }) => $marginTop}px;
  margin-bottom: ${({ $marginBottom = 0 }) => $marginBottom}px;
  margin-left: ${({ $marginLeft = 0 }) => $marginLeft}px;
  margin-right: ${({ $marginRight = 0 }) => $marginRight}px;
  ${({ $display }) => ($display ? `display: ${$display};` : '')}
`
