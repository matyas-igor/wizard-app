import styled from 'styled-components/macro'
import { DISABLED_GREY_COLOR, LIGHT_GREY_COLOR, PRIMARY_COLOR, PRIMARY_DARK_COLOR } from '../../constants/colors'
import { MONO_TEXT_FAMILY } from '../../constants/typography'
import { highlightStyle, normalizeStyle, selectionStyle, smoothingStyle } from '../Typography/common'

export const Chip = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  margin: -6px 0;
  padding: 6px 20px;
  border-radius: 20px;

  ${normalizeStyle}
  ${highlightStyle}
  ${smoothingStyle}
  ${selectionStyle}
  
  text-decoration: none;

  font-family: ${MONO_TEXT_FAMILY};
  font-weight: 700;

  font-size: 14px;
  line-height: 20px;

  color: ${PRIMARY_COLOR};
  background-color: ${LIGHT_GREY_COLOR};

  transition: color 0.2s ease-out, background-color 0.2s ease-out, transform 0.2s ease-out;

  &:hover {
    color: ${PRIMARY_DARK_COLOR};
  }
  &:active {
    background-color: ${DISABLED_GREY_COLOR};
    transform: translateY(2px);
  }
  &:focus {
    outline: ${PRIMARY_COLOR} auto 1px;
  }
`
