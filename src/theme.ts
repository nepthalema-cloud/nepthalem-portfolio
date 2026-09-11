export type Theme = 'light' | 'dark'

const themeStorageKey = 'portfolio-theme'

function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark'
}

function getStoredTheme(): Theme | null {
  try {
    const storedTheme = localStorage.getItem(themeStorageKey)
    return isTheme(storedTheme) ? storedTheme : null
  } catch {
    return null
  }
}

export function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function initializeTheme(): Theme {
  const theme = getStoredTheme() ?? 'light'
  document.documentElement.dataset.theme = theme
  return theme
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme

  try {
    localStorage.setItem(themeStorageKey, theme)
  } catch {
    // The selected theme remains active for the current visit.
  }
}

initializeTheme()
