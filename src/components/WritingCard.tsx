import { ContentItem } from '@/lib/content'
import Image from 'next/image'
import Link from 'next/link'
import { publicFile } from '@/lib/site'

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
    <article className={`group grid overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg ${item.image ? 'sm:grid-cols-[13rem_1fr]' : ''}`}>
      {item.image && (
        <div className="relative min-h-48 overflow-hidden bg-muted sm:min-h-full">
          <Image
            src={publicFile(item.image)}
            alt={`${item.title} cover`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="p-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Field note</p>
        <h3 className="mb-2 text-2xl font-semibold text-foreground">{item.title}</h3>
        <p className="mb-5 text-muted-foreground">{item.description}</p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <time>{item.date}</time>
          {item.tags?.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-secondary/60 px-2.5 py-1 text-xs">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )

  if (showLink) {
    return (
      <Link href={`/blog/${item.slug}`} className="block">
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}
