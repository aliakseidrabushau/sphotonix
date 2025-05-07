import { useTranslation } from 'react-i18next'
import {
  useNextPageName,
  usePreloadNextPage,
  useCustomNavigate,
} from '../../../core/hooks'
import { QuizPageContainer } from '../../../containers'

const Q10 = () => {
  const { t } = useTranslation()
  const navigate = useCustomNavigate()
  const nextPage = useNextPageName()
  const title = t('what_next_steps')
  const answers = [
    'get_in_touch',
    'schedule_a_call',
    'order_memory_crystal',
    'subscribe_to_newsletter',
  ]
  
  usePreloadNextPage()
  
  return (
    <QuizPageContainer
      {...{ answers, title }}
      onContinueClick={() => navigate(nextPage)}
    />
  )
}

export default Q10
