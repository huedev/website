import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'

import { getPostBySlug, getAllPosts } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import PostHeader from '@/components/PostHeader'
import PostTitle from '@/components/PostTitle'
import PostBody from '@/components/PostBody'

export default function Post({ post }) {
  const router = useRouter()
  
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const title = `${post.title} - huedev`
  
  return (
    <>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <Head>
            <title>
              {title}
            </title>
            <link rel="icon" href="/favicon.png" />
          </Head>
          <article>
            <PostHeader
              title={post.title}
              date={post.date}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
