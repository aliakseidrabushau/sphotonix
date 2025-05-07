import { useTranslation } from 'react-i18next'
import {
  useNextPageName,
  usePreloadNextPage,
  useCustomNavigate,
} from '../../../core/hooks'
import { QuizPageContainer } from '../../../containers'

const Q8 = () => {
  const { t } = useTranslation()
  const navigate = useCustomNavigate()
  const nextPage = useNextPageName()
  const title = t('how_soon_data_archived')
  const answers = [
    'within_one_month',
    '1_3_months',
    '3_6_months',
    '6_months',
  ]
  
  usePreloadNextPage()
  
  return (
    <QuizPageContainer
      {...{ answers, title }}
      onContinueClick={() => navigate(nextPage)}
    />
  )
}

export default Q8
