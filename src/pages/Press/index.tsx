import { useCustomNavigate, useNextPageName, usePreloadNextPage } from '../../core/hooks'
import { useTranslation } from 'react-i18next'
import { ContinueButton } from '../../components'
import * as S from './styled'

const Press = () => {
  const { t } = useTranslation()
  const navigate = useCustomNavigate()
  const nextPage = useNextPageName()
  const PRESS = ['forbes', 'techcrunch', 'wired']
  const renderPress = (press: string) => (
    <S.PressLogo
      $img={press}
      key={press}
    />
  )

  usePreloadNextPage()

  return (
    <>
      <S.Title>{t('press_title')}</S.Title>
      <S.Quote>{t('press_quote')}</S.Quote>
      <S.PressLogos>
        {PRESS.map(renderPress)}
      </S.PressLogos>
      <ContinueButton
        onClick={() => navigate(nextPage)}
        customStyles={'bottom:60px;'}
      />
    </>
  )
}

export default Press
