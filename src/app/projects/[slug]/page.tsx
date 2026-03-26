import ContentPageTemplate from '@/components/ContentPageTemplate'
import { getContentBySlug, getContentByType } from '@/lib/content'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = getContentByType('project')
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const content = getContentBySlug(params.slug)

  if (!content || content.type !== 'project') {
    notFound()
  }

  return <ContentPageTemplate content={content} />
}