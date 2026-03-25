import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    title: 'Parodipi',
    description: 'Turns math concepts into parody songs.',
    tags: ['Hacklytics', 'Parody', 'Mathematics']
  },
  {
    title: 'Hero Imagined',
    description: 'Helps you become the childhood hero of your imaginations.',
    tags: ['Python', 'Agentic Workflow', 'Creative Storytelling']
  },
  {
    title: 'DaleDB',
    description: 'Noooo precious, we HATES hashmapses!',
    tags: ['1332', 'Horrible Debugging', 'Java', 'Data Structures']
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