import { useCustomNavigate, useNextPageName, usePreloadNextPage } from '../../core/hooks'
import { useTranslation } from 'react-i18next'
import { ContinueButton } from '../../components'
import * as S from './styled'

const WelcomeScreen = () => {
  const { t } = useTranslation()
  const navigate = useCustomNavigate()
  const nextPage = useNextPageName()

  usePreloadNextPage()

  return (
    <>
      <S.Logo />
      <S.Title>{t('welcome_title')}</S.Title>
      <S.Subtitle>{t('welcome_description')}</S.Subtitle>
      <ContinueButton
        onClick={() => navigate(nextPage)}
        customStyles={'bottom:60px;'}
      />
    </>
  )
}

export default WelcomeScreen
