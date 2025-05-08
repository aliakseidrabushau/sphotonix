import { useTranslation } from 'react-i18next'
import {
  useNextPageName,
  usePreloadNextPage,
  useCustomNavigate,
} from '../../core/hooks'
import { ContinueButton, Input } from '../../components'
import * as S from './styled'

const Form = () => {
  const { t } = useTranslation()
  const navigate = useCustomNavigate()
  const nextPage = useNextPageName()
  const inputs: string[] = [
    'full_name',
    'company_name',
    'business_email',
    'data_storage_requirements',
  ]
  const renderInput = (label: string, i: number) => {
    return (
      <S.Label key={i}>
        <S.LabelText>
          {t(label)}
          {i%2 === 0 && (<S.Mandatory>*</S.Mandatory>)}
        </S.LabelText>
        <Input value={''} placeholder={t(`${label}_placeholder`)} onChange={() => {}} />
      </S.Label>
    )
  }
  
  usePreloadNextPage()
  
  return (
    <div className={'scrollable'}>
      <S.Title>{t('your_details')}</S.Title>
      <S.Form>{inputs.map(renderInput)}</S.Form>
      <ContinueButton onClick={() => navigate(nextPage)}>
        {t('send')}
      </ContinueButton>
    </div>
  )
}

export default Form
