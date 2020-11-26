import styled from 'styled-components'
import { LIGHT_GREY_COLOR, WHITE_COLOR } from '../../../../common/constants/colors'
import { Container } from '../../../../common/components/Container'
import { Card } from '../../../../common/components/Card'
import { SHADOW_FOCUSED_UP } from '../../../../common/constants/shadows'

const rowStyle = `
  display: flex;
  flex-wrap: wrap;
  flex-basis: auto;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  flex-shrink: 1;
  flex-grow: 1;
`

const colStyle = `
  display: block;
  box-sizing: border-box;
  flex: 0 0 auto;
`

export const SelectorWrapper = styled.div`
  margin-bottom: 24px;
`

export const CardWrapper = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 24px;
`

export const CheckboxWrapper = styled.span`
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;
  margin-top: 8px;
`

export const ContentWrapper = styled.span`
  ${rowStyle};
  margin: 0 -16px;
`

export const TextWrapper = styled.span`
  ${colStyle};
  max-width: calc(25%);
  flex-basis: calc(25%);
  padding: 0 16px;
`

export const RepliesWrapper = styled.span`
  ${colStyle};
  max-width: calc(75%);
  flex-basis: calc(75%);
  padding: 0 16px;
`

export const CardsWrapper = styled.div`
  ${Card} + ${Card} {
    margin-top: 24px;
  }

  ${Card} {
    cursor: pointer;
  }
`

export const SubmitContainer = styled.div<{ $atBottom?: boolean }>`
  position: sticky;
  bottom: 0;
  height: auto !important;
  box-shadow: ${({ $atBottom = true }) => ($atBottom ? `0 -1px 0 ${LIGHT_GREY_COLOR}` : SHADOW_FOCUSED_UP)};
  background-color: ${WHITE_COLOR};
  transition: box-shadow 0.2s ease-out;
  z-index: 10;
`

export const SubmitInnerContainer = styled(Container)`
  position: sticky;
  bottom: 0;
  border-top: 1px solid ${LIGHT_GREY_COLOR};
  padding: 24px 32px;
  height: auto;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const ChatsWrapper = styled.span`
  ${rowStyle};
  margin: 0 -12px;
`

export const ChatWrapper = styled.span`
  ${colStyle};
  max-width: calc(100% / 3);
  flex-basis: calc(100% / 3);
  padding: 0 12px;
`
