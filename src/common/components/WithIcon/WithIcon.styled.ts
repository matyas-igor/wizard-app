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

export const IconLeftWrapper = styled.span<{ $size: number; $margin: number }>`
  display: inline-flex;
  flex-grow: 0;
  flex-shrink: 0;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  margin-right: ${({ $margin }) => $margin}px;
`

export const IconRightWrapper = styled.span<{ $size: number; $margin: number }>`
  display: inline-flex;
  flex-grow: 0;
  flex-shrink: 0;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  margin-left: ${({ $margin }) => $margin}px;
`
