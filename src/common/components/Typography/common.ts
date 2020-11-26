import { SECONDARY_COLOR, WHITE_COLOR } from '../../constants/colors'

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
