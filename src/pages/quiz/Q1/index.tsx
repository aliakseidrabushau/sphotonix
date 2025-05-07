import { useTranslation } from 'react-i18next'
import {
  useNextPageName,
  usePreloadNextPage,
  useCustomNavigate,
} from '../../../core/hooks'
import { QuizPageContainer } from '../../../containers'

const Q1 = () => {
  const { t } = useTranslation()
  const navigate = useCustomNavigate()
  const nextPage = useNextPageName()
  const title = t('store_your_data_forever')
  const subtitle = t('how_confident_are_you')
  const answers = [
    'i_have_had_issues',
    'i_have_concerns',
    'im_not_sure',
  ]

  usePreloadNextPage()

  return (
    <QuizPageContainer
      {...{ answers, title, subtitle }}
      onContinueClick={() => navigate(nextPage)}
    />
  )
}

export default Q1
