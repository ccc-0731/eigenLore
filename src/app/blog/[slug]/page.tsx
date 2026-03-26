import ContentPageTemplate from '@/components/ContentPageTemplate'
import { getContentBySlug, getContentByType } from '@/lib/content'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getContentByType('blog')
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const content = getContentBySlug(params.slug)

  if (!content || content.type !== 'blog') {
    notFound()
  }

  return <ContentPageTemplate content={content} />
}