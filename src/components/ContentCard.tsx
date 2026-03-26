import { ContentItem } from '@/lib/content'
import WritingCard from './WritingCard'
import ProjectCard from './ProjectCard'

interface ContentCardProps {
  item: ContentItem
  showLink?: boolean
  showDate?: boolean
}

/**
 * Unified card component that renders the appropriate card type based on content type
 * - Blog posts → WritingCard (text-based, no images)
 * - Projects/Stories → ProjectCard (with images)
 */
export default function ContentCard({ item, showLink = false, showDate = false }: ContentCardProps) {
  if (item.type === 'blog') {
    return <WritingCard item={item} showLink={showLink} />
  }

  // Projects and stories use project-style cards
  return <ProjectCard item={item} showLink={showLink} showDate={showDate} />
}