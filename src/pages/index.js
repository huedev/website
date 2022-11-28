import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import {
  MastodonIcon,
  ItchIcon,
  GitHubIcon,
} from '../components/SocialIcons'
import logoKnifemare from '../images/knifemare.png'
import logoTextbox from '../images/textbox.png'

const projects = [
  {
    name: 'Knifemare',
    description:
      'A short and sweet action platformer about throwing and catching knives as a nightmare hunter. Currently in development, with new info coming soon!',
    link: { href: 'https://huedev.itch.io/', label: 'itch.io' },
    logo: logoKnifemare,
    showcase: true,
  },
  {
    name: 'Textbox',
    description:
      'A web-based text manipulation tool.',
    link: { href: 'https://textbox.huedev.me/', label: 'huedev.me' },
    logo: logoTextbox,
    showcase: false,
  },
]

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" rel="me noopener noreferrer" target="_blank" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function ShowcaseProject({project}) {
  return (
    <li className="group relative flex flex-col items-stretch">
      <Link href={project.link.href} className="p-4 h-full rounded-2xl bg-zinc-100 transition hover:bg-zinc-200 dark:bg-zinc-800/50 hover:dark:bg-zinc-700/50">
        <div className="relative flex h-8 w-8 items-center justify-center">
          <Image
            src={project.logo}
            alt=""
            className="h-8 w-8 rounded-md"
            unoptimized
          />
        </div>
        <h2 className="mt-4 text-base font-semibold text-zinc-800 dark:text-zinc-100">
          {project.name}
        </h2>
        <p className="relative text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
        <p className="relative mt-4 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-indigo-600 dark:text-zinc-200 dark:group-hover:text-indigo-500">
          <LinkIcon className="h-5 w-5 flex-none" />
          <span className="ml-1">{project.link.label}</span>
        </p>
      </Link>
    </li>
  )
}

function Project({project}) {
  return (
    <li className="group relative flex flex-col items-stretch">
      <Link href={project.link.href} className="p-4 flex flex-row items-center gap-x-4 justify-between h-full rounded-2xl bg-zinc-100 transition hover:bg-zinc-200 dark:bg-zinc-800/50 hover:dark:bg-zinc-700/50" key={project.name}>
        <div className="flex flex-row items-center">
          <div className="relative flex h-8 w-8 items-center justify-center flex-shrink-0">
            <Image
              src={project.logo}
              alt=""
              className="h-8 w-8 rounded-md"
              unoptimized
            />
          </div>
          <div className="flex flex-col ml-4">
            <h2 className="text-base font-semibold text-zinc-00 dark:text-zinc-100">
              {project.name}
            </h2>
            <p className="relative text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
          </div>
        </div>
        <p className="relative flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-indigo-600 dark:text-zinc-200 dark:group-hover:text-indigo-500">
          <LinkIcon className="h-5 w-5 flex-none" />
          <span className="ml-1">{project.link.label}</span>
        </p>
      </Link>
    </li>
  )
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
      <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
    </svg>
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

      <main className="mx-auto max-w-7xl pt-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <section>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Hi, I&apos;m <span className="text-indigo-600 dark:text-indigo-500">huedev</span>!
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I make games and art. I also enjoy tinkering with websites. I&apos;m currently working on a game called <strong>Knifemare</strong>.
            </p>
            <div className="mt-6 flex gap-6">
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
          </section>
          
          <section className="pt-10">
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-2xl">Projects</h2>
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-4 gap-y-4 mt-6"
            >
              {projects.filter(project => project.showcase).map((project) => (
                <ShowcaseProject
                  project={project}
                  key={project.name}
                />
              ))}
            </ul>
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-4 gap-y-4 mt-4"
            >
              {projects.filter(project => !project.showcase).map((project) => (
                <Project
                  project={project}
                  key={project.name}
                />
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}
