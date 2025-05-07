import { useCallback, useState, useEffect } from 'react'
import * as S from './styled'

export const Alert = ({ show = false, message = '' }) => {
  const clearError = useCallback(() => {}, [])
  const [clear, setClear] = useState(false)
  
  useEffect(() => {
    if (show && !clear) {
      var timer = setTimeout(clearError, 3000)
    }
    return () => {
      setClear(false)
      clearTimeout(timer)
    }
  }, [show, clearError, clear])
  
  const onCloseClick = () => {
    setClear(true)
    clearError()
  };
  
  return (
    <S.StyledAlert $show={show}>
      <p>{message}</p>
      {show && (
        <S.CloseAlert onClick={onCloseClick}>×</S.CloseAlert>
      )}
    </S.StyledAlert>
  )
}
