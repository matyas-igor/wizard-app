import styled from 'styled-components/macro'
import { HEADING_TEXT_FAMILY } from '../../constants/typography'
import {
  highlightStyle,
  normalizeStyle,
  selectionStyle,
  smoothingStyle,
  typographyMixin,
  TypographyProps,
} from './common'

export const H1 = styled.h1<TypographyProps>`
  font-family: ${HEADING_TEXT_FAMILY};
  font-weight: 600;

  font-size: 72px;
  line-height: 88px;

  ${typographyMixin}

  ${normalizeStyle}
  ${highlightStyle}
  ${smoothingStyle}
  ${selectionStyle}
`
