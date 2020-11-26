import React from 'react'
import { Wrapper, IconRightWrapper, ContentWrapper } from './WithIcon.styled'

type Props = {
  icon: React.ReactNode
  size?: number
  margin?: number
}

export const WithIconAtRight: React.FC<Props> = ({ children, icon, size = 24, margin = 12 }) => (
  <Wrapper>
    <ContentWrapper>{children}</ContentWrapper>
    <IconRightWrapper $size={size} $margin={margin}>
      {icon}
    </IconRightWrapper>
  </Wrapper>
)
