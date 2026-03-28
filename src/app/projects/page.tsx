import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContentCard from '@/components/ContentCard'
import { getContentByType } from '@/lib/content'

export default function ProjectsPage() {
  const projects = getContentByType('project')

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-8 py-16">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold mb-8">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              My wildest ideas that I&apos;m trying to bring into this world.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              ❗️My API keys free trial just ended, so the demos might not work...
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ContentCard key={project.slug} item={project} showLink={true} showDate={true} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}