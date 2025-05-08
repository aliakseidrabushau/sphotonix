import { useTranslation } from 'react-i18next'
import {
  useNextPageName,
  usePreloadNextPage,
  useCustomNavigate,
} from '../../core/hooks'
import { ContinueButton } from '../../components'
import * as S from './styled'

interface ItemProps {
  year: number;
  text: string;
}

const Feedback = () => {
  const { t } = useTranslation()
  const navigate = useCustomNavigate()
  const nextPage = useNextPageName()
  const list: ItemProps[] = [
    {
      year: 2022,
      text: t('forgot_the_name', { percent: '44%' }),
    },
    {
      year: 2023,
      text: t('lost_their_keys', { percent: '30%' }),
    },
    {
      year: 2020,
      text: t('had_difficulty', { percent: '35%' }),
    },
  ]
  const renderList = (item: ItemProps, i: number) => {
    const { year, text } = item
    
    return (
      <S.ListItem key={i}>
        <S.ListItemYear>{year}&nbsp;{t('survey')}</S.ListItemYear>
        <S.ListItemText dangerouslySetInnerHTML={{ __html: text }} />
      </S.ListItem>
    )
  }

  usePreloadNextPage()

  return (
    <div className={'scrollable'}>
      <S.Title>{t('you_are_not_alone')}</S.Title>
      <S.Subtitle>{t('we_agree')}</S.Subtitle>
      <S.List>{list.map(renderList)}</S.List>
      <ContinueButton onClick={() => navigate(nextPage)} />
    </div>
  )
}

export default Feedback
