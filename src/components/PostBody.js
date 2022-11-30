export default function PostBody({content}) {
  return (
    <div
      className="prose prose-zinc dark:prose-invert mt-12"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
