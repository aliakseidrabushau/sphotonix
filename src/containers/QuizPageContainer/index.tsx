import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDelayedExecute } from '../../core/hooks'
import { ContinueButton } from '../../components'
import * as S from './styled'

interface AnswerProps {
  content: any;
  onclick?: (key: any) => void;
  key: string;
}

interface QuizPageContainerProps {
  isMultiChoice?: boolean;
  title: string;
  subtitle?: string;
  answers: string[];
  onContinueClick: (key: any) => void;
  radioButtons?: boolean
}

type ListType = string[]

export const QuizPageContainer = ({
  isMultiChoice = false,
  title,
  subtitle,
  answers,
  onContinueClick,
  radioButtons = false,
}: QuizPageContainerProps) => {
  const { t } = useTranslation()
  const delayedExecute = useDelayedExecute()
  const [activesList, setActivesList] = useState<ListType>([])
  const renderAnswer = (item: AnswerProps, i: number) => {
    const key = item.key
    const onItemClick = () => {
      const updateList = (list: ListType): ListType => {
        return list.includes(key)
          ? list.filter((i: string) => i !== key)
          : list.concat([key])
      };

      if (isMultiChoice) {
        setActivesList(updateList(activesList));
      } else {
        setActivesList([key]);
        if (!radioButtons) {
          delayedExecute(() => onContinueClick(item.key));
        }
      }
    }
    const isActive = activesList.includes(key)

    return (
      <S.OptionsItem
        onClick={onItemClick}
        $multiChoice={isMultiChoice || radioButtons}
        $isActive={isActive}
        id={`option-${i+1}`}
        key={i}
      >
        {isMultiChoice ? (
          <S.StyledCheckIcon $isActive={isActive}>
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4.4L5 8L10 2" stroke={isActive ? 'white' : 'transparent'} strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
            </svg>
          </S.StyledCheckIcon>
        ) : (
          radioButtons && <S.StyledRadioIcon $isActive={isActive} />
        )}
        {item.content}
      </S.OptionsItem>
    );
  }
  const getAnswersList = (answers: string[]) => answers.map((answer) => ({
    content: t(answer),
    key: answer,
  }))

  return (
    <>
      <S.Title>{title}</S.Title>
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      <S.OptionsList>
        {getAnswersList(answers).map(renderAnswer)}
      </S.OptionsList>
      {isMultiChoice && (
        <ContinueButton
          onClick={() => onContinueClick(activesList)}
          disabled={activesList.length === 0}
        />
      )}
    </>
  )
}
