import { useEffect, useState } from 'react'

const ROUTE_CHANGE_EVENT = 'portfolio:route-change'

export function navigate(to: string) {
  const hashIndex = to.indexOf('#')
  const hasHash = hashIndex !== -1
  const hash = hasHash ? to.slice(hashIndex) : ''
  const path = hasHash ? to.slice(0, hashIndex) : to

  if (hasHash) {
    const isTargetHome = path === '' || path === '/'
    const isCurrentlyHome = window.location.pathname === '/' || window.location.pathname === ''

    if (isTargetHome && !isCurrentlyHome) {
      // Cross-route navigation from subroute to home anchor
      window.history.pushState(null, '', `/${hash}`)
      window.dispatchEvent(new Event(ROUTE_CHANGE_EVENT))
      window.scrollTo({ top: 0, behavior: 'instant' })

      setTimeout(() => {
        const target = document.querySelector(hash)
        target?.scrollIntoView({ behavior: 'smooth' })
      }, 75)
      return
    }

    // In-page anchor navigation
    window.location.hash = hash
    const target = document.querySelector(hash)
    target?.scrollIntoView({ behavior: 'smooth' })
    return
  }

  window.history.pushState(null, '', to)
  window.dispatchEvent(new Event(ROUTE_CHANGE_EVENT))
  window.scrollTo({ top: 0, behavior: 'instant' })
}

export function useRouter() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener(ROUTE_CHANGE_EVENT, handleLocationChange)

    if (window.location.hash && (window.location.pathname === '/' || window.location.pathname === '')) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash)
        target?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener(ROUTE_CHANGE_EVENT, handleLocationChange)
    }
  }, [])

  const isHome = currentPath === '/' || currentPath === ''
  const projectMatch = currentPath.match(/^\/projects\/([a-z0-9-]+)\/?$/)
  const projectSlug = projectMatch ? projectMatch[1] : null

  return {
    currentPath,
    navigate,
    isHome,
    projectSlug,
  }
}
