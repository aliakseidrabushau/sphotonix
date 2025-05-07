import { type ComponentType, type JSX } from 'react'
import * as LC from './lazyComponents'

export interface CommonProps {
  readonly withButton?: boolean;
  readonly withText?: boolean;
}

export interface ConfigProps extends CommonProps {
  readonly component: LC.LazyComponentWithPreload<ComponentType<any>>;
  readonly images?: string[];
  readonly componentProps?: object;
}

export const pagesConfig: { [key: string]: ConfigProps } = {
  '/': {
    component: LC.WelcomeScreen,
    withText: true,
  },
  '/press': {
    component: LC.Press,
    images: [
      './assets/press/forbes.png',
      './assets/press/techcrunch.png',
      './assets/press/wired.png',
    ],
    withText: true,
  },
  '/q1': {
    component: LC.Q1,
    withButton: false,
  },
  '/q2': {
    component: LC.Q2,
  },
  '/q3': {
    component: LC.Q3,
  },
  '/q4': {
    component: LC.Q4,
  },
  '/q5': {
    component: LC.Q5,
  },
  '/q6': {
    component: LC.Q6,
  },
  '/q7': {
    component: LC.Q7,
    withButton: false,
  },
  '/q8': {
    component: LC.Q8,
    withButton: false,
  },
  '/q9': {
    component: LC.Q9,
    withButton: false,
  },
  '/q10': {
    component: LC.Q10,
    withButton: false,
  },
  '/signup': {
    component: LC.Signup,
  },
  '/form': {
    component: LC.Form,
  },
  '/feedback': {
    component: LC.Feedback,
  },
  '/success': {
    component: LC.Success,
  },
}

export interface RoutesProps extends CommonProps {
  readonly path: string;
  readonly element: JSX.Element;
}

export const pagesRoutes: RoutesProps[] = Object.keys(pagesConfig).map((path) => {
  const {
    component: Comp,
    componentProps,
    withButton = true,
    withText,
  } = pagesConfig[path];

  return {
    path,
    element: <Comp {...componentProps} />,
    withButton,
    withText,
  };
})
