import React from 'react'
import { useLocation } from 'react-router-dom'
import { Content, LogoLink, Sidebar, SidebarBlock, SidebarLink, SidebarLinksWrapper, Wrapper } from './Layout.styled'
import { ReactComponent as Logo } from './../../icons/logo.svg'
import { Small } from '../Typography'
import { LIGHT_GREY_COLOR } from '../../constants/colors'

export const Layout: React.FC = ({ children }) => {
  const { pathname } = useLocation()
  return (
    <Wrapper>
      <Sidebar>
        <LogoLink to={'/'}>
          <Logo title="Logo" />
        </LogoLink>
        <SidebarLinksWrapper>
          <div>
            <SidebarLink $active={pathname.startsWith('/dashboard')} to={'/dashboard'}>
              Dashboard
            </SidebarLink>
            <SidebarLink $active={pathname.startsWith('/bots')} to={'/bots'}>
              Bots
            </SidebarLink>
            <SidebarLink $active={pathname.startsWith('/statistics')} to={'/statistics'}>
              Statistics
            </SidebarLink>
          </div>
          <div>
            <SidebarLink $active={pathname.startsWith('/help')} to={'/help'}>
              Help
            </SidebarLink>
            <SidebarBlock>
              <Small $color={LIGHT_GREY_COLOR}>© 2020 Igor Matias</Small>
            </SidebarBlock>
          </div>
        </SidebarLinksWrapper>
      </Sidebar>
      <Content>{children}</Content>
    </Wrapper>
  )
}
