import Head from 'next/head'
import Link from 'next/link'

import { getAllPosts } from '@/lib/api'
import Post from '@/components/Post'
import DateFormatter from '@/components/DateFormatter'

export default function BlogIndex({posts}) {
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
