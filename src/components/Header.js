import Link from 'next/link'
import Image from 'next/image'

import logoHuedev from '@/images/huedev.png'

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
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg 
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
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
      className="group transition"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 flex-none text-zinc-600 group-hover:text-amber-600 dark:hidden" />
      <MoonIcon className="hidden h-6 w-6 flex-none text-zinc-400 group-hover:text-amber-500 dark:block" />
    </button>
  )
}

export function Header() {
  return (
    <header className="flex flex-row justify-between gap-y-6 my-12">
      <div className="flex flex-row items-center gap-6 font-medium text-zinc-800 dark:text-zinc-200">
        <Link href="/" className="relative flex h-8 w-8 items-center justify-center shrink-0">
          <Image
            src={logoHuedev}
            alt=""
            className="h-8 w-8 rounded-md rendering-pixelated"
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
