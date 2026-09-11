import { useState } from 'react'
import { applyTheme, getTheme, type Theme } from '../theme'
import { navigate, useRouter } from '../router'

const navigationItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [theme, setTheme] = useState<Theme>(getTheme)
  const { isHome } = useRouter()

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'

    applyTheme(nextTheme)
    setTheme(nextTheme)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (!isHome) {
      navigate(`/${href}`)
    } else {
      navigate(href)
    }
  }

  const switchLabel = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-page/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <a
          className="w-fit rounded-md text-base font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-focus"
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            navigate('/#top')
          }}
        >
          Nepthalem Ayele
        </a>

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <nav aria-label="Primary navigation">
            <ul className="flex flex-wrap justify-center gap-x-1 gap-y-1 text-sm font-medium sm:justify-end sm:gap-x-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="inline-flex min-h-11 items-center rounded-md px-2 text-secondary transition-colors duration-200 hover:text-accent focus-visible:outline-focus"
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            aria-label={switchLabel}
            aria-pressed={theme === 'dark'}
            className="btn-press inline-flex size-11 items-center justify-center rounded-md border border-border bg-surface text-secondary transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-focus"
            onClick={toggleTheme}
            type="button"
          >
            <span className="sr-only">
              {theme === 'light' ? 'Light theme active' : 'Dark theme active'}
            </span>
            {theme === 'light' ? (
              <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
                <path
                  d="M12 2.75v2.5M12 18.75v2.5M5.46 5.46l1.77 1.77M16.77 16.77l1.77 1.77M2.75 12h2.5M18.75 12h2.5M5.46 18.54l1.77-1.77M16.77 7.23l1.77-1.77"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.75"
                />
              </svg>
            ) : (
              <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
                <path
                  d="M20.5 14.3A8.5 8.5 0 0 1 9.7 3.5 8.5 8.5 0 1 0 20.5 14.3Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
