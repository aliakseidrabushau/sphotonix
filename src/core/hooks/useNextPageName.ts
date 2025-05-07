import { useLocation } from 'react-router-dom'
import { flow } from '../router'

export const useNextPageName = (skipCount = 0) => {
  const location = useLocation()
  const current = location.pathname

  return flow[flow.indexOf(current) + 1 + skipCount]
}
