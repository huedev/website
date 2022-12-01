import Link from 'next/link'

import DateFormatter from '@/components/DateFormatter'

export default function Post({ post }) {
  return (
    <li className="group relative flex flex-col items-stretch">
      <Link href={`/blog/${post.slug}`} className="p-4 flex flex-col gap-x-4 h-full overflow-hidden rounded-2xl bg-zinc-100 transition hover:bg-zinc-200 dark:bg-zinc-800/50 hover:dark:bg-zinc-700/50">
        <div className="flex flex-col-reverse justify-between gap-4 md:flex-row">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-1">
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {post.title}
              </h3>
            </div>
            <p className="relative text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              <DateFormatter dateString={post.date} />
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}
