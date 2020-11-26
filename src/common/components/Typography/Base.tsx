import styled from 'styled-components'
import { BASE_TEXT_FAMILY } from '../../constants/typography'
import { BLACK_COLOR } from '../../constants/colors'
import { highlightStyle, normalizeStyle, selectionStyle, smoothingStyle } from './common'

export const Base = styled.p<{ $color?: string; $strong?: boolean }>`
  font-family: ${BASE_TEXT_FAMILY};
  font-weight: ${({ $strong = false }) => ($strong ? '600' : '400')};

  font-size: 20px;
  line-height: 28px;

  color: ${({ $color = BLACK_COLOR }) => $color};
  transition: color 0.2s ease-out;

  margin: 0;

  ${normalizeStyle}
  ${highlightStyle}
  ${smoothingStyle}
  ${selectionStyle}
`
