import styled from 'styled-components'
import { WHITE_COLOR } from '../../constants/colors'
import { SHADOW_DEFAULT, SHADOW_FOCUSED, SHADOW_PRIMARY_DEFAULT, SHADOW_PRIMARY_FOCUSED } from '../../constants/shadows'

export const Card = styled.div<{ $checked?: boolean }>`
  display: block;
  border-radius: 12px;
  background-color: ${WHITE_COLOR};

  transition: box-shadow 0.2s ease-out;

  box-shadow: ${({ $checked }) => ($checked ? SHADOW_PRIMARY_DEFAULT : SHADOW_DEFAULT)};
  &:hover {
    box-shadow: ${({ $checked }) => ($checked ? SHADOW_PRIMARY_FOCUSED : SHADOW_FOCUSED)};
  }
`
