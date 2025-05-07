import { useTranslation } from 'react-i18next'
import {
  useNextPageName,
  usePreloadNextPage,
  useCustomNavigate,
} from '../../../core/hooks'
import { QuizPageContainer } from '../../../containers'

const Q2 = () => {
  const { t } = useTranslation()
  const navigate = useCustomNavigate()
  const nextPage = useNextPageName()
  const title = t('what_kind_of_data')
  const answers = [
    'media',
    'family_trust',
    'dna',
    'enterprise',
    'cryptocurrency',
    'other',
  ]

  usePreloadNextPage()

  return (
    <QuizPageContainer
      {...{ answers, title }}
      onContinueClick={() => navigate(nextPage)}
      isMultiChoice
    />
  )
}

export default Q2
