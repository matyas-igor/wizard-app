import styled from 'styled-components/macro'
import { BLACK_COLOR, LIGHT_GREY_COLOR, TERTIARY_COLOR, TERTIARY_DARK_COLOR, WHITE_COLOR } from '../../constants/colors'

// According to: https://codepen.io/swards/pen/gxQmbj

const Bubble = styled.div`
  border-radius: 24px;
  padding: 8px 16px;
  margin-top: 4px;
  margin-bottom: 4px;
  display: inline-block;
`

export const BubbleMine = styled(Bubble)`
  color: ${WHITE_COLOR};
  margin-left: 25%;
  background: linear-gradient(to bottom, ${TERTIARY_COLOR} 0%, ${TERTIARY_DARK_COLOR} 100%);
  background-attachment: fixed;
  position: relative;

  &:last-child::before {
    content: '';
    position: absolute;
    z-index: 0;
    bottom: 0;
    right: -8px;
    height: 20px;
    width: 20px;
    background: linear-gradient(to bottom, ${TERTIARY_COLOR} 0%, ${TERTIARY_DARK_COLOR} 100%);
    background-attachment: fixed;
    border-bottom-left-radius: 15px;
  }
  &:last-child::after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: -10px;
    width: 10px;
    height: 20px;
    background: ${WHITE_COLOR};
    border-bottom-left-radius: 10px;
  }
`

export const BubbleYours = styled(Bubble)`
  color: ${BLACK_COLOR};
  margin-right: 25%;
  background-color: ${LIGHT_GREY_COLOR};
  position: relative;

  &:last-child::before {
    content: '';
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: -7px;
    height: 20px;
    width: 20px;
    background: ${LIGHT_GREY_COLOR};
    border-bottom-right-radius: 15px;
  }
  &:last-child::after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: -10px;
    width: 10px;
    height: 20px;
    background: ${WHITE_COLOR};
    border-bottom-right-radius: 10px;
  }
`

const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const BubbleContainerMine = styled(BubbleContainer)`
  align-items: flex-end;
`

export const BubbleContainerYours = styled(BubbleContainer)`
  align-items: flex-start;
`
