import ContentPageTemplate from '@/components/ContentPageTemplate'
import { getContentBySlug, getContentByType } from '@/lib/content'
import { notFound } from 'next/navigation'
import EcePortfolioPage from '@/components/EcePortfolioPage'

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

  if (content.slug === 'ece1100') {
    return <EcePortfolioPage />
  }

  return <ContentPageTemplate content={content} />
}
