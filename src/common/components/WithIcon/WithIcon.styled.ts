import styled from 'styled-components'

export const Wrapper = styled.span`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const ContentWrapper = styled.span`
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
`

const IconWrapper = styled.span<{ $size: number }>`
  display: inline-flex;
  flex-grow: 0;
  flex-shrink: 0;
  width: ${({ $size }) => $size}px;
  height: 0;
  position: relative;
  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const IconLeftWrapper = styled(IconWrapper)<{ $size: number; $margin: number }>`
  margin-right: ${({ $margin }) => $margin}px;
`

export const IconRightWrapper = styled(IconWrapper)<{ $size: number; $margin: number }>`
  margin-left: ${({ $margin }) => $margin}px;
`
