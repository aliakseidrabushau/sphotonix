import { useTranslation } from 'react-i18next'
import {
  useNextPageName,
  usePreloadNextPage,
  useCustomNavigate,
} from '../../../core/hooks'
import { QuizPageContainer } from '../../../containers'

const Q5 = () => {
  const { t } = useTranslation()
  const navigate = useCustomNavigate()
  const nextPage = useNextPageName()
  const title = t('what_industry')
  const answers = [
    'ai',
    'arts',
    'institutions',
    'government',
    'entertainment',
    'research',
    'space',
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

export default Q5
