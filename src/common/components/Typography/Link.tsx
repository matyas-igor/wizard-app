import styled from 'styled-components'
import { PRIMARY_COLOR, PRIMARY_DARK_COLOR } from '../../constants/colors'

export const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${PRIMARY_COLOR};
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  cursor: pointer;
  &:hover {
    color: ${PRIMARY_DARK_COLOR};
  }
  &:active {
    transform: translateY(2px);
  }
`
