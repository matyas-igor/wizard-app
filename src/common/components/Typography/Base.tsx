import styled from 'styled-components/macro'
import { BASE_TEXT_FAMILY } from '../../constants/typography'
import {
  highlightStyle,
  normalizeStyle,
  selectionStyle,
  smoothingStyle,
  typographyMixin,
  TypographyProps,
} from './common'

export const Base = styled.p<{ $strong?: boolean } & TypographyProps>`
  font-family: ${BASE_TEXT_FAMILY};
  font-weight: ${({ $strong = false }) => ($strong ? '600' : '400')};

  font-size: 18px;
  line-height: 26px;

  ${typographyMixin}

  ${normalizeStyle}
  ${highlightStyle}
  ${smoothingStyle}
  ${selectionStyle}
`
