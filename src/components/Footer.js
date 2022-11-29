import Link from 'next/link'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-indigo-500 dark:hover:text-indigo-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="my-16">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/uses">Uses</NavLink>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} huedev
        </p>
      </div>
    </footer>
  )
}
