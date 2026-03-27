import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { ContentItem } from '@/lib/content'

interface ProjectCardProps {
  item: ContentItem
  showLink?: boolean
  showDate?: boolean
}

/**
 * Project-style card component (with images)
 * Used for projects and stories
 */
export default function ProjectCard({ item, showLink = false, showDate = false }: ProjectCardProps) {
  // Get basePath from environment
  const basePath = process.env.GITHUB_PAGES ? '/eigenLore' : ''
  const imageSrc = item.image?.startsWith('/') ? `${basePath}${item.image}` : item.image

  const CardContent = () => (
    <Card className="hover:border-primary/50 transition-colors">
      {item.image && (
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          <Image
            src={imageSrc || ''}
            alt={`${item.title} preview`}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
        {showDate && (
          <time className="text-sm text-muted-foreground">{item.date}</time>
        )}
      </CardHeader>
      {item.tags && item.tags.length > 0 && (
        <div className="p-6 pt-0">
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </Card>
  )

  if (showLink) {
    const href = item.type === 'project' ? `/eigenLore/projects/${item.slug}` : `/eigenLore/stories/${item.slug}`
    return (
      <a href={href} className="block">
        <CardContent />
      </a>
    )
  }

  return <CardContent />
}