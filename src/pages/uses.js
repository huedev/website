import Head from 'next/head'
import Link from 'next/link'

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

function ToolsCategory({ title, children }) {
  return (
    <>
      <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-2xl mt-12">
        {title}
      </h2>
      <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-4 mt-6">
        {children}
      </ul>
    </>
  )
}

function Tool({ title, href, children }) {
  return (
    <li className="group relative flex flex-col items-stretch">
      <Link href={href} className="p-4 flex flex-col gap-x-4 h-full overflow-hidden rounded-2xl bg-zinc-100 transition hover:bg-zinc-200 dark:bg-zinc-800/50 hover:dark:bg-zinc-700/50">
        <div className="flex flex-col-reverse justify-between gap-4 md:flex-row">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-1">
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {title}
              </h3>
              <ExternalLinkIcon className="h-5 w-5 flex-none text-zinc-600 dark:text-zinc-400" />
            </div>
            <p className="relative text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {children}
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - huedev</title>
        <meta
          name="description"
          content="A list of software and tools I use to make games, art, and other projects."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
          Uses
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A list of software and tools I use to make games, art, and other projects.
        </p>
        <ToolsCategory title="Development">
          <Tool
            title="Godot Engine"
            href="https://godotengine.org/"
          >
            Having come from a background of making games with Game Maker for over a decade,
            it was a tough decision to switch to Godot, but I&apos;m really glad I did.
            Working with open source software feels great, and so much tricky functionality
            in Game Maker is trivial to implement in Godot.
          </Tool>
          <Tool
            title="Visual Studio Code"
            href="https://code.visualstudio.com/"
          >
            There&apos;s not much to say about VS Code that hasn&apos;t already been said,
            but for my purposes it&apos;s fast and reliable for web development. I used to
            even take notes with it before discovering Obsidian.
          </Tool>
        </ToolsCategory>
        <ToolsCategory title="Art">
          <Tool
            title="Aseprite"
            href="https://www.aseprite.org/"
          >
            An excellent tool for creating pixel art, I&apos;ve been using it for years but
            still feel like I&apos;ve just scratched the surface on what you can do with it.
          </Tool>
          <Tool
            title="Famicube Palette"
            href="https://lospec.com/palette-list/famicube"
          >
            A vibrant and versatile 64-color palette created by Arne for their Famicube fantasy
            console. I use it for most of my pixel art these days, along with some other colors.
          </Tool>
          <Tool
            title="Krita"
            href="https://krita.org/en/"
          >
            While I don&apos;t make digital art as much as I used to, Krita is an impressive
            open source painting program that feels leagues better to work with than other
            open source offerings.
          </Tool>
        </ToolsCategory>
        <ToolsCategory title="Productivity">
          <Tool
            title="Todoist"
            href="https://todoist.com/"
          >
            A to-do list app that helps keep me on track with everything from daily habits,
            important dates, and long-term projects. Bonus points because I also can&apos;t
            help but admire the remote and async-first philosophies of Doist, the company
            that develops Todoist.
          </Tool>
          <Tool
            title="Obsidian"
            href="https://obsidian.md/"
          >
            A pleasant and powerful note-taking app that works with plain Markdown files.
            It&apos;s good to know that I&apos;m not locked into some proprietary format, and
            while I don&apos;t take full advantage of all of the organizational tools, it&apos;s
            become essential to me even only having used it for a short time.
          </Tool>
          <Tool
            title="Syncthing"
            href="https://syncthing.net/"
          >
            An open source file syncing tool that keeps my Obsidian notes updated between my devices.
            Unfortunately I encounter the occasional issue with sync conflicts when making changes to
            some files, but I get the feeling that this is some kind of user error.
          </Tool>
        </ToolsCategory>
      </section>
    </>
  )
}