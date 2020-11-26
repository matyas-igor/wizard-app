import React from 'react'
import styled from 'styled-components/macro'
import { PRIMARY_COLOR } from '../../constants/colors'

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 32px;
  height: 32px;
  & .path {
    stroke: ${PRIMARY_COLOR};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

export const Spinner: React.FC = () => (
  <StyledSpinner viewBox="0 0 32 32">
    <circle className="path" cx="16" cy="16" r="12" fill="none" strokeWidth="2" />
  </StyledSpinner>
)
