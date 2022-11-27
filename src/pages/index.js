import Head from 'next/head'
import Link from 'next/link'

import {
  MastodonIcon,
  ItchIcon,
  GitHubIcon,
} from '../components/SocialIcons'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>huedev</title>
        <meta name="description" content="I make games and art! I also enjoy tinkering with websites." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pt-12">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            Hi, I&apos;m <span className="text-indigo-600 dark:text-indigo-500">huedev</span>!
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I make games and art. I also enjoy tinkering with websites. I&apos;m currently working on a game called <strong>Knifemare</strong>.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://mastodon.gamedev.place/@hue"
              rel="me noopener noreferrer"
              target="_blank"
              aria-label="Follow me on Mastodon"
              icon={MastodonIcon}
            />
            <SocialLink
              href="https://huedev.itch.io/"
              rel="me noopener noreferrer"
              target="_blank"
              aria-label="Follow me on itch.io"
              icon={ItchIcon}
            />
            <SocialLink
              href="https://github.com/huedev"
              rel="me noopener noreferrer"
              target="_blank"
              aria-label="Follow me on GitHub"
              icon={GitHubIcon}
            />
          </div>
        </div>
      </main>
    </>
  )
}
