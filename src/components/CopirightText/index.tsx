import { useTranslation } from 'react-i18next'
import * as S from './styled'

export const CopyrightText = () => {
  const { t } = useTranslation()

  return (
    <S.Text>
      {t('copyright_text')}
    </S.Text>
  )
}
