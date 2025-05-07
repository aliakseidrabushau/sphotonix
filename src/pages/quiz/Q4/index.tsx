import { useTranslation } from 'react-i18next'
import {
  useNextPageName,
  usePreloadNextPage,
  useCustomNavigate,
} from '../../../core/hooks'
import { QuizPageContainer } from '../../../containers'

const Q4 = () => {
  const { t } = useTranslation()
  const navigate = useCustomNavigate()
  const nextPage = useNextPageName()
  const title = t('biggest_challenge')
  const answers = [
    'capacity_limitations',
    'high_costs',
    'longevity',
    'performance',
    'security_concerns',
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

export default Q4
