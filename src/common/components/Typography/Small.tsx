import styled from 'styled-components'
import { BASE_TEXT_FAMILY } from '../../constants/typography'
import {
  highlightStyle,
  normalizeStyle,
  selectionStyle,
  smoothingStyle,
  typographyMixin,
  TypographyProps,
} from './common'

export const Small = styled.p<{ $strong?: boolean } & TypographyProps>`
  font-family: ${BASE_TEXT_FAMILY};
  font-weight: ${({ $strong = false }) => ($strong ? '600' : '400')};

  font-size: 16px;
  line-height: 24px;

  ${typographyMixin}

  ${normalizeStyle}
  ${highlightStyle}
  ${smoothingStyle}
  ${selectionStyle}
`
