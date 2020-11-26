import styled from 'styled-components'
import { BLACK_COLOR, BLACK_LIGHT_COLOR, LIGHT_GREY_COLOR, SECONDARY_COLOR, WHITE_COLOR } from '../../constants/colors'
import { BASE_TEXT_FAMILY } from '../../constants/typography'
import { highlightStyle, normalizeStyle, selectionStyle, smoothingStyle } from '../Typography/common'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  height: 100%;
  width: 100%;
`

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-grow: 0;
  flex-shrink: 0;

  width: 220px;
  background-color: ${BLACK_COLOR};
  overflow: auto;
`

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-grow: 1;
  flex-shrink: 1;
`

export const LogoLink = styled.a`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  width: 100%;

  box-sizing: border-box;
  padding: 0 24px;

  border-bottom: 1px solid ${BLACK_LIGHT_COLOR};

  transition: background-color 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${BLACK_LIGHT_COLOR};
  }

  svg {
    fill: ${WHITE_COLOR};
  }
`

export const SidebarLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex-grow: 1;
  flex-shrink: 1;
`

export const SidebarLink = styled.a<{ $active?: boolean }>`
  display: flex;
  width: 100%;
  text-decoration: none;

  font-family: ${BASE_TEXT_FAMILY};
  font-weight: 400;

  font-size: 18px;
  line-height: 26px;

  color: ${LIGHT_GREY_COLOR};
  transition: color 0.2s ease-out, background-color 0.2s ease-out;

  box-sizing: border-box;
  margin: 0;
  padding: 10px 24px;

  ${normalizeStyle}
  ${highlightStyle}
  ${smoothingStyle}
  ${selectionStyle}
  
  svg {
    transition: fill 0.2s ease-out, stroke 0.2s ease-out;
    color: ${LIGHT_GREY_COLOR};
  }

  &:hover,
  &:active {
    color: ${WHITE_COLOR};
    background-color: ${BLACK_LIGHT_COLOR};
    svg {
      color: ${SECONDARY_COLOR};
    }
  }

  ${({ $active }) =>
    $active
      ? `
        cursor: default;
        color: ${WHITE_COLOR};
        font-weight: 600;
        background-color: ${BLACK_LIGHT_COLOR};
        svg {
          color: ${SECONDARY_COLOR};
        }
      `
      : ''}
`

export const SidebarBlock = styled.div`
  box-sizing: border-box;
  padding: 10px 24px;
`
