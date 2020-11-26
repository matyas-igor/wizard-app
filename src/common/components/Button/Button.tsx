import styled from 'styled-components'
import {
  DISABLED_GREY_COLOR,
  LIGHT_GREY_COLOR,
  PRIMARY_COLOR,
  PRIMARY_DARK_COLOR,
  WHITE_COLOR,
} from '../../constants/colors'
import { SHADOW_DEFAULT, SHADOW_FOCUSED } from '../../constants/shadows'
import { MONO_TEXT_FAMILY } from '../../constants/typography'
import { highlightStyle, normalizeStyle, selectionStyle, smoothingStyle } from '../Typography/common'

export const Button = styled.button<{ disabled?: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  padding: 12px 36px;
  border-radius: 36px;

  ${normalizeStyle}
  ${highlightStyle}
  ${smoothingStyle}
  ${selectionStyle}
  
  text-decoration: none;
  text-transform: uppercase;

  font-family: ${MONO_TEXT_FAMILY};
  font-weight: 700;

  font-size: 16px;
  line-height: 24px;

  color: ${({ disabled }) => (disabled ? DISABLED_GREY_COLOR : WHITE_COLOR)};
  background-color: ${({ disabled }) => (disabled ? LIGHT_GREY_COLOR : PRIMARY_COLOR)};
  box-shadow: ${SHADOW_DEFAULT};

  transition: color 0.2s ease-out, background-color 0.2s ease-out, box-shadow 0.2s ease-out, transform 0.2s ease-out;

  &:hover {
    box-shadow: ${({ disabled }) => (disabled ? SHADOW_DEFAULT : SHADOW_FOCUSED)};
  }
  &:active {
    box-shadow: ${SHADOW_FOCUSED};
    background-color: ${PRIMARY_DARK_COLOR};
    transform: translateY(2px);
  }
  &:focus {
    box-shadow: ${SHADOW_FOCUSED};
    outline: none;
  }
`
