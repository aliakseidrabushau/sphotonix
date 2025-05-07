import React from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styled'

export interface ContinueButtonProps {
  children?: React.ReactNode | string;
  onClick: () => void;
  customId?: string;
  customStyles?: string;
  [key: string]: any;
}

export const ContinueButton = ({
  children,
  onClick,
  customId = 'continue-button',
  customStyles = '',
  ...rest
}: ContinueButtonProps) => {
  const { t } = useTranslation()

  return (
    <S.StyledButton
      id={customId}
      onClick={onClick}
      $customStyles={customStyles}
      {...rest}
    >
      {children ?? t('Continue')}
    </S.StyledButton>
  )
}
