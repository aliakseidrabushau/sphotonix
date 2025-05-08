import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import {
  useNextPageName,
  usePreloadNextPage,
  useCustomNavigate,
} from '../../../core/hooks'
import { QuizPageContainer } from '../../../containers'
import { Input } from '../../../components';
import * as S from './styled'

const Q6 = () => {
  const { t } = useTranslation()
  const navigate = useCustomNavigate()
  const nextPage = useNextPageName()
  const [value, setValue] = useState('')
  const title = t('whats_driving_your')
  const answers = [
    'regulatory_requirements',
    'scientific_data',
    'media_archiving',
    'sensitive_information',
    'future_proofing',
    'digital_preservation',
    'other',
  ]
  
  usePreloadNextPage()
  
  return (
    <div className={'scrollable'}>
      <QuizPageContainer
        {...{ answers, title }}
        onContinueClick={() => navigate(nextPage)}
        isMultiChoice
      />
      <S.InputWrapper>
        <Input value={value} placeholder={t('please_specify')} onChange={setValue} />
      </S.InputWrapper>
    </div>
  )
}

export default Q6
