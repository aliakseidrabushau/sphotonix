import { useEffect } from 'react'

export const useDynamicHeight = () => {
  useEffect(() => {
    const setDynamicVH = () => {
      const vh = (window.innerHeight * 0.01).toFixed(2)
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setTimeout(() => {
      setDynamicVH()
      window.addEventListener('resize', setDynamicVH, false)
    },100)

    return () => window.removeEventListener('resize', setDynamicVH, false)
  }, [])
}
