import styled from 'styled-components/macro'
import { PRIMARY_COLOR, PRIMARY_DARK_COLOR, WHITE_COLOR } from '../../constants/colors'

export const HiddenCheckbox = styled.input`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.span`
  display: inline-flex;
  width: 24px;
  height: 24px;
  background-color: ${WHITE_COLOR};
  border-radius: 4px;
  transition: background-color 0.2s ease-out;
  box-shadow: inset 0 0 0 2px ${PRIMARY_COLOR};
  svg {
    visibility: hidden;
  }
`

export const CheckboxContainer = styled.label`
  display: inline-flex;
  vertical-align: middle;
  cursor: pointer;

  ${HiddenCheckbox}:checked + ${StyledCheckbox} {
    background-color: ${PRIMARY_COLOR};
    svg {
      visibility: visible;
    }
  }

  ${HiddenCheckbox}:focus + ${StyledCheckbox} {
    box-shadow: inset 0 0 0 2px ${PRIMARY_DARK_COLOR};
  }

  &:hover {
    ${HiddenCheckbox}:checked + ${StyledCheckbox} {
      background-color: ${PRIMARY_DARK_COLOR};
    }
    ${HiddenCheckbox}:not(:checked) + ${StyledCheckbox} {
      box-shadow: inset 0 0 0 2px ${PRIMARY_DARK_COLOR};
    }
  }
`
