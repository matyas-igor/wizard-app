import styled from 'styled-components'
import { HEADING_TEXT_FAMILY } from '../../constants/typography'
import {
  highlightStyle,
  normalizeStyle,
  selectionStyle,
  smoothingStyle,
  typographyMixin,
  TypographyProps,
} from './common'

export const H3 = styled.h3<TypographyProps>`
  font-family: ${HEADING_TEXT_FAMILY};
  font-weight: 600;

  font-size: 32px;
  line-height: 42px;

  ${typographyMixin}

  ${normalizeStyle}
  ${highlightStyle}
  ${smoothingStyle}
  ${selectionStyle}
`
