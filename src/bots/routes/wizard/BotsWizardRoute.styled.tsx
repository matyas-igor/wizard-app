import styled from 'styled-components'
import { Container } from '../../../common/components/Container'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  & > * {
    height: 100%;
  }
  & > ${Container} {
    height: 100%;
  }
  overflow: auto;
`
