import Head from 'next/head'
import Link from 'next/link'

function ToolsCategory({ title, children }) {
  return (
    <>
      <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-2xl mt-12">
        {title}
      </h2>
      <ul role="list" className="space-y-8 mt-6">
        {children}
      </ul>
    </>
  )
}

function Tool({ title, children }) {
  return (
    <li>
      <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {children}
      </p>
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
          <Tool title="Godot Engine">
            Having come from a background of making games with Game Maker for over a decade,
            it was a tough decision to switch to Godot, but I&apos;m really glad I did.
            Working with open source software feels great, and so much tricky functionality
            in Game Maker is trivial to implement in Godot.
          </Tool>
          <Tool title="Visual Studio Code">
            There&apos;s not much to say about VS Code that hasn&apos;t already been said,
            but for my purposes it&apos;s fast and reliable for web development. I used to
            even use it for note-taking before discovering Obsidian.
          </Tool>
        </ToolsCategory>
        <ToolsCategory title="Art">
          <Tool title="Aseprite">
            An excellent tool for creating pixel art, I&apos;ve been using it for years but
            still feel like I&apos;ve just scratched the surface on what you can do with it.
          </Tool>
          <Tool title="Famicube Palette">
            A vibrant and versatile 64-color palette created by Arne for their Famicube fantasy
            console. I use it for most of my pixel art these days, along with some other colors.
          </Tool>
          <Tool title="Krita">
            While I don&apos;t make digital art as much as I used to, Krita is an impressive
            open source painting program that feels leagues better to work with than other
            open source offerings.
          </Tool>
        </ToolsCategory>
        <ToolsCategory title="Productivity">
          <Tool title="Todoist">
            A to-do list app that helps keep me on track with everything from daily habits,
            important dates, and long-term projects. Bonus points because I also can&apos;t
            help but admire the remote and async-first philosophies of Doist, the company
            that develops Todoist.
          </Tool>
          <Tool title="Obsidian">
            A pleasant and powerful note-taking app that works with plain Markdown files.
            It&apos;s good to know that I&apos;m not locked into some proprietary format, and
            while I don&apos;t take full advantage of all of the organizational tools, it&apos;s
            become essential to me even only having used it for a short time.
          </Tool>
          <Tool title="Syncthing">
            An open source file syncing tool that keeps my Obsidian notes updated between my devices.
            Unfortunately I encounter the occasional issue with sync conflicts when making changes to
            some files, but I get the feeling that this is some kind of user error.
          </Tool>
        </ToolsCategory>
      </section>
    </>
  )
}