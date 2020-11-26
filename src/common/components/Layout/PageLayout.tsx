import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsWrapper,
  TopMenuWrapper,
  UserButton,
  UserWrapper,
  Wrapper,
} from './PageLayout.styled'
import { Base } from '../Typography'
import { User } from '../../types'
import { WithIconAtLeft, WithIconAtRight } from '../WithIcon'
import { ReactComponent as CaretIcon } from './../../icons/caret.svg'
import { ReactComponent as UserIcon } from './../../icons/user.svg'
import { TERTIARY_COLOR } from '../../constants/colors'
import { Link } from '../Typography/Link'
import { Container } from '../Container'

type Props = {
  noContainer?: boolean
  center?: boolean
  breadcrumbs: {
    to: string
    name: string
    active?: boolean
  }[]
  user: User | null
}

export const PageLayout: React.FC<Props> = ({ breadcrumbs, center = false, noContainer = false, children, user }) => (
  <Wrapper>
    <TopMenuWrapper>
      <BreadcrumbsWrapper>
        <Breadcrumbs>
          {breadcrumbs.map(({ to, name, active }, index) => (
            <BreadcrumbsItem key={index}>
              {active ? (
                <Base $strong as={'span'}>
                  {name}
                </Base>
              ) : (
                <Base as={'span'}>
                  <Link as={RouterLink} to={to}>
                    {name}
                  </Link>
                </Base>
              )}
            </BreadcrumbsItem>
          ))}
        </Breadcrumbs>
      </BreadcrumbsWrapper>
      {user && (
        <UserWrapper>
          <UserButton aria-label={'Toggle user menu'}>
            <WithIconAtRight
              icon={<CaretIcon width={24} height={24} style={{ transform: `translate(-50%, -50%) rotate(180deg)` }} />}
              margin={4}
            >
              <WithIconAtLeft
                icon={<UserIcon width={56} height={56} style={{ color: TERTIARY_COLOR }} />}
                size={56}
                margin={4}
              >
                <Base>{user.name}</Base>
              </WithIconAtLeft>
            </WithIconAtRight>
          </UserButton>
        </UserWrapper>
      )}
    </TopMenuWrapper>
    {noContainer ? children : <Container $center={center}>{children}</Container>}
  </Wrapper>
)
