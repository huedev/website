import Head from 'next/head'

export default function BlogIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - huedev</title>
        <meta
          name="description"
          content="This is where I&apos;ll be posting game devlogs and other writing."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
          Blog
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          This is where I&apos;ll be posting game devlogs and other writing.
        </p>
      </section>
      <article className="prose prose-zinc dark:prose-invert mt-20">
        <h1>Rewriting Knifemare in Godot</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>
      </article>
    </>
  )
}