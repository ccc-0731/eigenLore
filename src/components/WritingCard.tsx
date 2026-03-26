import { ContentItem } from '@/lib/content'

interface WritingCardProps {
  item: ContentItem
  showLink?: boolean
}

/**
 * Writing-style card component (text-based, no images)
 * Used for blog posts
 */
export default function WritingCard({ item, showLink = false }: WritingCardProps) {
  const CardContent = () => (
    <article className="border-l-2 border-border pl-6 hover:border-primary/50 transition-colors">
      <h3 className="text-xl font-medium text-foreground mb-2">{item.title}</h3>
      <p className="text-muted-foreground mb-2">{item.description}</p>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <time>{item.date}</time>
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {item.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="text-xs">#{tag}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  )

  if (showLink) {
    return (
      <a href={`/blog/${item.slug}`} className="block">
        <CardContent />
      </a>
    )
  }

  return <CardContent />
}