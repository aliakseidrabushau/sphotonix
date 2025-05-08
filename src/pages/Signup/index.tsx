import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  // useDebounce,
  useNextPageName,
  usePreloadNextPage,
  useViewportSize,
  useCustomNavigate,
} from '../../core/hooks'
import { ContinueButton, Input } from '../../components'
import { QuizPageContainer } from '../../containers'
import * as S from './styled'

// eslint-disable-next-line
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const Signup = () => {
  const { t } = useTranslation()
  const navigate = useCustomNavigate()
  const nextPage = useNextPageName()
  const buttonStyles = useViewportSize()
  const [isValid, setIsValid] = useState(false)
  const [value, setValue] = useState('')
  // const debouncedEmail = useDebounce(value, 200)
  const title = t('do_you_have_valuable_data')
  const placeholder = t('enter_your_email')
  const answers = ['i_would_like_to_learn', 'please_enter_your_email']
  const submitEmail = () => {
    if (isValid) navigate(nextPage)
  }

  usePreloadNextPage()

  useEffect(() => {
    const isEmailValid = EMAIL_REGEX.test(value);
    setIsValid(isEmailValid);
  }, [value]);

  /*useEffect(() => {
    if (debouncedEmail) {
      dispatch(setEmail({ email: debouncedEmail, isValid }));
    }
  }, [debouncedEmail, isValid, dispatch]);

  useEffect(() => {
    if (isSuccess && paymentSettingsStatus) {
      navigate(nextPage);
    }
  }, [isSuccess, paymentSettingsStatus, navigate, sendEvents, nextPage]);*/

  return (
    <div className={'scrollable'}>
      <QuizPageContainer
        {...{ answers, title }}
        onContinueClick={() => navigate(nextPage)}
        radioButtons
      />
      <S.InputText>{t('please_enter_your_email')}</S.InputText>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={setValue}
      />
      <ContinueButton onClick={submitEmail} disabled={!isValid} {...buttonStyles} />
    </div>
  )
}

export default Signup
