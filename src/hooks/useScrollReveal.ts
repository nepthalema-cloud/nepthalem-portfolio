import { useEffect, useRef, useState } from 'react'

function getInitialRevealState(): boolean {
  if (typeof window === 'undefined') return true
  if (!('IntersectionObserver' in window)) return true
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

export function useScrollReveal<T extends HTMLElement = HTMLElement>(threshold = 0.08) {
  const ref = useRef<T>(null)
  const [isRevealed, setIsRevealed] = useState<boolean>(getInitialRevealState)

  useEffect(() => {
    if (isRevealed) return

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, isRevealed])

  return { ref, isRevealed }
}
