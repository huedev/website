import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import logoHuedev from '@/images/huedev.png'
import logoKnifemare from '@/images/knifemare.png'
import imageKnifemare from '@/images/knifemare_gameplay.png'
import logoTextbox from '@/images/textbox.png'

const projects = [
  {
    name: 'Knifemare',
    description:
      'A short and sweet action platformer about throwing and catching knives as a nightmare hunter. Currently in development with new info coming soon!',
    link: { href: 'https://huedev.itch.io/', external: true },
    logo: logoKnifemare,
    image: imageKnifemare,
  },
  {
    name: 'Textbox',
    description:
      'A web app for manipulating text, lists, and other data.',
    link: { href: 'https://textbox.huedev.me/', external: true },
    logo: logoTextbox,
    image: '',
  },
]

function ExternalLinkIcon(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function Project({project}) {
  return (
    <li className="group relative flex flex-col items-stretch">
      <Link href={project.link.href} rel="noopener noreferrer" target="_blank" className="p-4 flex flex-col gap-x-4 h-full overflow-hidden rounded-2xl bg-zinc-100 transition hover:bg-zinc-200 dark:bg-zinc-800/50 hover:dark:bg-zinc-700/50" key={project.name}>
        {
          project.image &&
          <div className="relative flex -mx-4 -mt-4 items-center justify-center shrink-0 mb-4">
            <Image
              src={project.image}
              alt=""
              className="h-48 transition group-hover:brightness-90 dark:group-hover:brightness-110 object-none object-center rendering-pixelated"
              quality={100}
              unoptimized
            />
          </div>
        }
        <div className="flex flex-row">
          <div className="relative flex h-8 w-8 items-center justify-center shrink-0">
            <Image
              src={project.logo}
              alt=""
              className="h-8 w-8 rounded-md rendering-pixelated"
              unoptimized
            />
          </div>
          <div className="flex flex-col ml-4">
            <div className="flex flex-row items-center gap-1">
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {project.name}
              </h3>
              {
                project.link.external &&
                <ExternalLinkIcon className="h-5 w-5 flex-none text-zinc-600 dark:text-zinc-400" />
              }
            </div>
            <p className="relative text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>huedev</title>
        <meta name="description" content="Hi, I'm huedev! I make games and art. I also enjoy tinkering with websites." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section>
        <div className="flex">
          <div className="relative flex h-24 w-24 items-center justify-center shrink-0 sm:h-32 sm:w-32">
            <Image
              src={logoHuedev}
              alt=""
              className="h-24 w-24 rounded-2xl sm:h-32 sm:w-32 rendering-pixelated"
              unoptimized
            />
          </div>
          <div className="ml-8">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Hi, I&apos;m <span className="text-amber-600 dark:text-amber-500">huedev</span>!
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I make games and art. I also enjoy tinkering with websites. I&apos;m currently working on a game called <strong>Knifemare</strong>.
            </p>
          </div>
        </div>
      </section>
      
      <section className="pt-10">
        <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-2xl">Projects</h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-4 mt-6"
        >
          {projects.map((project) => (
            <Project
              project={project}
              key={project.name}
            />
          ))}
        </ul>
      </section>

      <section className="pt-10">
        <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-2xl">Latest Post</h2>
        <div className="group relative flex flex-col items-stretch mt-6">
          <Link href="/blog" className="p-4 flex flex-col gap-x-4 h-full overflow-hidden rounded-2xl bg-zinc-100 transition hover:bg-zinc-200 dark:bg-zinc-800/50 hover:dark:bg-zinc-700/50">
            <div className="flex flex-col-reverse justify-between gap-4 md:flex-row">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-1">
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    Rewriting Knifemare in Godot
                  </h3>
                </div>
                <p className="relative text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  This is where I&apos;ll be posting game devlogs and other writing.
                </p>
              </div>
              <p className="relative text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                11/29/2022
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
