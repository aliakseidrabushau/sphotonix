import { useTranslation } from 'react-i18next'
import {
  useNextPageName,
  usePreloadNextPage,
  useCustomNavigate,
} from '../../../core/hooks'
import { QuizPageContainer } from '../../../containers'

const Q9 = () => {
  const { t } = useTranslation()
  const navigate = useCustomNavigate()
  const nextPage = useNextPageName()
  const title = t('how_frequently_need_to_store')
  const answers = [
    'monthly',
    'quarterly',
    'bi_annually',
    'yearly',
    'one_tome',
  ]
  
  usePreloadNextPage()
  
  return (
    <QuizPageContainer
      {...{ answers, title }}
      onContinueClick={() => navigate(nextPage)}
    />
  )
}

export default Q9
