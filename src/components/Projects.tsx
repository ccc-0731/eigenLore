import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    title: 'Mathematical Visualization Tool',
    description: 'Interactive web application for exploring complex mathematical concepts through dynamic visualizations.',
    tags: ['React', 'D3.js', 'Mathematics']
  },
  {
    title: 'Algorithm Analysis Framework',
    description: 'A comprehensive toolkit for analyzing and comparing algorithmic approaches to computational problems.',
    tags: ['Python', 'Data Structures', 'Performance']
  },
  {
    title: 'Creative Coding Experiments',
    description: 'Collection of generative art and interactive experiences built with modern web technologies.',
    tags: ['JavaScript', 'Canvas', 'WebGL']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-3xl font-semibold text-foreground">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}