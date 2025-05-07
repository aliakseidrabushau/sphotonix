import React, { lazy } from 'react'

export type LazyComponentWithPreload<T extends React.ComponentType<any>> = {
  preload: () => Promise<{ default: T }>;
} & React.LazyExoticComponent<T>

const lazyWithPreload = (factory: () => Promise<{ default: React.ComponentType<any> }>): LazyComponentWithPreload<React.ComponentType<any>> => {
  const Component = lazy(factory) as LazyComponentWithPreload<React.ComponentType<any>>
  Component.preload = factory
  return Component
}

export const WelcomeScreen = lazyWithPreload(() => import('../../pages/Welcome'))
export const Q1 = lazyWithPreload(() => import('../../pages/quiz/Q1'))
export const Q2 = lazyWithPreload(() => import('../../pages/quiz/Q2'))
export const Q3 = lazyWithPreload(() => import('../../pages/quiz/Q3'))
export const Q4 = lazyWithPreload(() => import('../../pages/quiz/Q4'))
export const Q5 = lazyWithPreload(() => import('../../pages/quiz/Q5'))
export const Q6 = lazyWithPreload(() => import('../../pages/quiz/Q6'))
export const Q7 = lazyWithPreload(() => import('../../pages/quiz/Q7'))
export const Q8 = lazyWithPreload(() => import('../../pages/quiz/Q8'))
export const Q9 = lazyWithPreload(() => import('../../pages/quiz/Q9'))
export const Q10 = lazyWithPreload(() => import('../../pages/quiz/Q10'))
export const Press = lazyWithPreload(() => import('../../pages/Press'))
export const Form = lazyWithPreload(() => import('../../pages/Form'))
export const Feedback = lazyWithPreload(() => import('../../pages/Feedback'))
export const Signup = lazyWithPreload(() => import('../../pages/Signup'))
export const Success = lazyWithPreload(() => import('../../pages/Success'))
