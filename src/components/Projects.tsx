import ContentCard from './ContentCard'
import { getContentByType } from '@/lib/content'

export default function Projects() {
  const projects = getContentByType('project')

  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-3xl font-semibold text-foreground">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ContentCard key={project.slug} item={project} showLink={true} />
        ))}
      </div>
    </section>
  )
}