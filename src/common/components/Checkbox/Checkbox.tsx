import React from 'react'
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from './Checkbox.styled'
import { ReactComponent as CheckIcon } from './../../icons/check.svg'
import { WHITE_COLOR } from '../../constants/colors'

type Props = {
  className?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: React.FC<Props> = ({ className, checked, defaultChecked, onChange }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox type="checkbox" checked={checked} defaultChecked={defaultChecked} onChange={onChange} />
    <StyledCheckbox>
      <CheckIcon width={24} height={24} style={{ color: WHITE_COLOR }} />
    </StyledCheckbox>
  </CheckboxContainer>
)
