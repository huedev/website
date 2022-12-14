import Head from 'next/head'

import { getAllPosts } from '@/lib/api'
import Post from '@/components/Post'

export default function BlogIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - huedev</title>
        <meta
          name="description"
          content="This is where I write about what I&apos;m working on and things that I&apos;m interested in."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
          Blog
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          This is where I write about what I&apos;m working on and things that I&apos;m interested in.
        </p>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-4 mt-6"
        >
          {posts.map((post) => (
            <Post
              post={post}
              key={post.slug}
            />
          ))}
        </ul>
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
  ])

  return {
    props: { posts },
  }
}
