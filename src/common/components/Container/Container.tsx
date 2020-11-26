import styled from 'styled-components'

export const Container = styled.div<{ $center?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $center = false }) => ($center ? 'center' : 'flex-start')};
  align-items: ${({ $center = false }) => ($center ? 'center' : 'stretch')};
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 48px 32px;
  max-width: 100%;

  @media (min-width: 992px) {
    width: 992px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`
