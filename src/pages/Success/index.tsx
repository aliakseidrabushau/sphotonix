import { useTranslation } from 'react-i18next'
import { ContinueButton } from '../../components'
import * as S from './styled'

const WelcomeScreen = () => {
  const { t } = useTranslation()
  const onContinueClick = () => {
    window.location.href = 'https://sphotonix.com'
  }
  
  return (
    <>
      <S.Logo />
      <S.Title>{t('success_title')}</S.Title>
      <S.Subtitle>{t('success_description')}</S.Subtitle>
      <ContinueButton onClick={onContinueClick}>
        {t('lets_do_it')}
      </ContinueButton>
    </>
  )
}

export default WelcomeScreen
