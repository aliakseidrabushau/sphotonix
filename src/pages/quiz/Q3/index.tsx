import { useTranslation } from 'react-i18next'
import {
  useNextPageName,
  usePreloadNextPage,
  useCustomNavigate,
} from '../../../core/hooks'
import { QuizPageContainer } from '../../../containers'

const Q3 = () => {
  const { t } = useTranslation()
  const navigate = useCustomNavigate()
  const nextPage = useNextPageName()
  const title = t('how_store_data')
  const answers = [
    'cloud_storage',
    'hdd',
    'optical_discs',
    'magnetic_tape',
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

export default Q3
