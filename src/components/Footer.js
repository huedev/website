import Link from 'next/link'

import {
  MastodonIcon,
  ItchIcon,
  GitHubIcon,
} from '@/components/SocialIcons'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" rel="me noopener noreferrer" target="_blank" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="my-12">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
          <SocialLink
            href="https://mastodon.gamedev.place/@hue"
            aria-label="Follow me on Mastodon"
            icon={MastodonIcon}
          />
          <SocialLink
            href="https://huedev.itch.io/"
            aria-label="Follow me on itch.io"
            icon={ItchIcon}
          />
          <SocialLink
            href="https://github.com/huedev"
            aria-label="Follow me on GitHub"
            icon={GitHubIcon}
          />
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} huedev
        </p>
      </div>
    </footer>
  )
}
