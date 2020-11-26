import styled from 'styled-components/macro'
import { Container } from '../../../common/components/Container'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  & > * {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: auto;
  }
  & > ${Container} {
    height: 100%;
  }
`
