import styled from 'styled-components'
import { WHITE_COLOR } from '../../constants/colors'
import { SHADOW_DEFAULT, SHADOW_FOCUSED } from '../../constants/shadows'

export const Card = styled.div`
  display: block;
  border-radius: 12px;
  background-color: ${WHITE_COLOR};

  transition: box-shadow 0.2s ease-out;

  box-shadow: ${SHADOW_DEFAULT};
  &:hover {
    box-shadow: ${SHADOW_FOCUSED};
  }
`
