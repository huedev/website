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
    <footer className="mt-24">
      <div>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <div>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Projects</NavLink>
                <NavLink href="#">Blog</NavLink>
                <NavLink href="#">Uses</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} huedev
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
