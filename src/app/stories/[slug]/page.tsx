import ContentPageTemplate from '@/components/ContentPageTemplate'
import { getContentBySlug, getContentByType } from '@/lib/content'
import { notFound } from 'next/navigation'

interface StoryPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const stories = getContentByType('story')
  return stories.map((story) => ({
    slug: story.slug,
  }))
}

export default function StoryPage({ params }: StoryPageProps) {
  const content = getContentBySlug(params.slug)

  if (!content || content.type !== 'story') {
    notFound()
  }

  return <ContentPageTemplate content={content} />
}