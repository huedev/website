import Link from 'next/link'
import Image from 'next/image'

import logoHuedev from '@/images/huedev.png'
import sunIcon from '@/images/sun.png'
import moonIcon from '@/images/moon.png'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-amber-600 dark:hover:text-amber-500"
    >
      {children}
    </Link>
  )
}

function SunIcon(props) {
  return (
    <div className="h-8 w-8 flex-none dark:hidden shrink-0" aria-hidden="true" {...props}>
      <Image
        src={sunIcon}
        alt=""
        className="h-8 w-8 rounded-md rendering-pixelated group-hover:brightness-110"
        unoptimized
      />
    </div>
  )
}

function MoonIcon(props) {
  return (
    <div className="h-8 w-8 flex-none dark:hidden shrink-0" aria-hidden="true" {...props}>
      <Image
        src={moonIcon}
        alt=""
        className="h-8 w-8 rounded-md rendering-pixelated group-hover:brightness-90"
        unoptimized
      />
    </div>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group h-8 w-8 flex items-center justify-center rounded-md shrink-0"
      onClick={toggleMode}
    >
      <SunIcon className="hidden h-8 w-8 flex-none dark:block" />
      <MoonIcon className="h-8 w-8 flex-none dark:hidden" />
    </button>
  )
}

export function Header() {
  return (
    <header className="flex flex-row justify-between gap-y-6 my-12">
      <div className="flex flex-row items-center gap-6 font-medium text-zinc-800 dark:text-zinc-200">
        <Link
          href="/"
          aria-label="Home"
          className="group flex h-8 w-8 items-center justify-center shrink-0"
        >
          <Image
            src={logoHuedev}
            alt=""
            className="h-8 w-8 rounded-md transition group-hover:brightness-90 dark:group-hover:brightness-110 rendering-pixelated"
            unoptimized
          />
        </Link>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/uses">Uses</NavLink>
      </div>
      <ModeToggle />
    </header>
  )
}
