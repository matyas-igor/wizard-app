import React from 'react'
import { useLocation } from 'react-router-dom'
import {
  Content,
  LogoLink,
  Sidebar,
  SidebarBlock,
  SidebarLink,
  SidebarLinksWrapper,
  Wrapper,
} from './MainLayout.styled'
import { ReactComponent as Logo } from './../../icons/logo.svg'
import { ReactComponent as DashboardIcon } from './../../icons/dashboard.svg'
import { ReactComponent as PuzzleIcon } from './../../icons/puzzle.svg'
import { ReactComponent as ChartIcon } from './../../icons/chart.svg'
import { ReactComponent as SupportIcon } from './../../icons/support.svg'
import { Small } from '../Typography'
import { LIGHT_GREY_COLOR } from '../../constants/colors'
import { WithIconAtLeft } from '../WithIcon'

export const MainLayout: React.FC = ({ children }) => {
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
              <WithIconAtLeft icon={<DashboardIcon width={24} height={24} />}>Dashboard</WithIconAtLeft>
            </SidebarLink>
            <SidebarLink $active={pathname.startsWith('/bots')} to={'/bots'}>
              <WithIconAtLeft icon={<PuzzleIcon width={24} height={24} />}>Bots</WithIconAtLeft>
            </SidebarLink>
            <SidebarLink $active={pathname.startsWith('/statistics')} to={'/statistics'}>
              <WithIconAtLeft icon={<ChartIcon width={24} height={24} />}>Statistics</WithIconAtLeft>
            </SidebarLink>
          </div>
          <div>
            <SidebarLink $active={pathname.startsWith('/help')} to={'/help'}>
              <WithIconAtLeft icon={<SupportIcon width={24} height={24} />}>Help</WithIconAtLeft>
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
