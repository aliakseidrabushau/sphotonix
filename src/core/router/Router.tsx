import { useEffect, type JSX } from 'react'
import {
  useLocation,
  useRoutes,
  Navigate,
} from 'react-router-dom'
import { pagesRoutes , type RoutesProps, type CommonProps } from './pagesConfig'
import { useCustomNavigate } from '../hooks'
import { CopyrightText, MainLayout, ProgressBar } from '../../components'

const pagesWithProgressBar: string[] = [
  '/q1',
  '/signup',
  '/q2',
  '/q3',
  '/q4',
  '/q5',
  '/q6',
  '/feedback',
  '/q7',
  '/q8',
  '/q9',
  '/q10',
]

interface RouteWithAppContainerProps extends CommonProps {
  element: JSX.Element;
  progressBarProps: {
    index: number;
    length: number;
  };
}

const RouteWithAppContainer = ({
  element,
  progressBarProps: {
    index: progressBarIndex,
    length: progressBarLength,
  },
  withButton = true,
  withText = false,
}: RouteWithAppContainerProps) => {
  const withProgressBar: boolean = progressBarIndex !== -1
  const buttonHeight = withButton ? 66 : 0
  const textHeight = withText ? 36 : 0
  const progressBarHeight = withProgressBar ? 40 : 0
  const pt = 24 + progressBarHeight
  const pb = 24 + buttonHeight + textHeight

  return (
    <MainLayout
      pt={pt}
      pb={pb}
    >
      {withProgressBar && (
        <ProgressBar
          width={`${Math.round(((progressBarIndex+1)/progressBarLength)*100)}%`}
        />
      )}
      {element}
      {withText && <CopyrightText />}
    </MainLayout>
  )
}

const routes: RoutesProps[] = [
  ...pagesRoutes,
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]

export const Router = () => {
  const { pathname, search } = useLocation()
  const navigate = useCustomNavigate()

  useEffect(() => window.scrollTo(0, 0))

  useEffect(() => {
    const handleBackButton = (event: any) => {
      event.preventDefault()
      navigate(pathname)
    }

    window.history.pushState(null, '', `${pathname}${search}`)
    window.addEventListener('popstate', handleBackButton)

    return () => {
      window.removeEventListener('popstate', handleBackButton)
    }
  })

  const wrappedRoutes = routes.map((route) => {
    const { path, element, withButton, withText } = route

    return {
      ...route,
      element: (
        <RouteWithAppContainer {...{
          element,
          withButton,
          withText,
          progressBarProps: {
            index: pagesWithProgressBar.indexOf(path),
            length: pagesWithProgressBar.length,
          },
        }} />
      ),
    }
  })

  return useRoutes(wrappedRoutes)
}
