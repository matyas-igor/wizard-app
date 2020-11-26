import React from 'react'
import { Wrapper, IconLeftWrapper, ContentWrapper } from './WithIcon.styled'

type Props = {
  icon: React.ReactNode
  size?: number
  margin?: number
}

export const WithIconAtLeft: React.FC<Props> = ({ children, icon, size = 24, margin = 12 }) => (
  <Wrapper>
    <IconLeftWrapper $size={size} $margin={margin}>
      {icon}
    </IconLeftWrapper>
    <ContentWrapper>{children}</ContentWrapper>
  </Wrapper>
)
