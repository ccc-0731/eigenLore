import ContentCard from './ContentCard'
import { getContentByType } from '@/lib/content'

export default function Writing() {
  const posts = getContentByType('blog')

  return (
    <section id="writing" className="space-y-8">
      <h2 className="text-3xl font-semibold text-foreground">Stories</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <ContentCard key={post.slug} item={post} showLink={true} />
        ))}
      </div>
    </section>
  )
}