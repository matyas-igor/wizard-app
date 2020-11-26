import styled from 'styled-components'
import { HEADING_TEXT_FAMILY } from '../../constants/typography'
import { BLACK_COLOR } from '../../constants/colors'
import { highlightStyle, normalizeStyle, selectionStyle, smoothingStyle } from './common'

export const H3 = styled.h3<{ $color?: string }>`
  font-family: ${HEADING_TEXT_FAMILY};
  font-weight: 600;

  font-size: 32px;
  line-height: 42px;

  color: ${({ $color = BLACK_COLOR }) => $color};
  transition: color 0.2s ease-out;

  ${normalizeStyle}
  ${highlightStyle}
  ${smoothingStyle}
  ${selectionStyle}
`
