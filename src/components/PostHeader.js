import DateFormatter from './DateFormatter'
import PostTitle from './PostTitle'

export default function PostHeader({ title, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}
