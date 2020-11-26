import styled from 'styled-components'
import { DARK_GREY_COLOR, INACTIVE_GREY_COLOR, LIGHT_GREY_COLOR, PRIMARY_COLOR } from '../../constants/colors'
import { BASE_TEXT_FAMILY } from '../../constants/typography'
import { normalizeStyle } from '../Typography/common'

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  overflow: auto;
`

export const TopMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border-bottom: 1px solid ${LIGHT_GREY_COLOR};
  min-height: 80px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 32px;
`

export const BreadcrumbsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 80px;
`

export const BreadcrumbsItem = styled.li``

export const Breadcrumbs = styled.ol`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  ${BreadcrumbsItem} + ${BreadcrumbsItem}:before {
    display: inline-block;
    font-family: ${BASE_TEXT_FAMILY};
    font-weight: 400;

    font-size: 18px;
    line-height: 26px;

    color: ${INACTIVE_GREY_COLOR};

    margin: 0;
    padding: 0 16px;

    content: '/';
    ${normalizeStyle}
  }
`

export const UserWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 80px;
`

export const UserButton = styled.button`
  border: none;
  background-color: unset;
  cursor: pointer;

  padding: 0 32px;
  margin: 0 -32px;
  min-height: 80px;

  transition: background-color 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${LIGHT_GREY_COLOR};
  }

  &:focus {
    outline: ${PRIMARY_COLOR} auto 1px;
  }
`
