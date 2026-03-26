import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import ContentCard from '@/components/ContentCard'
import About from '@/components/About'
import { getTopItems } from '@/lib/content'

export default function Home() {
  const topBlogPosts = getTopItems('blog', 3)
  const topProjects = getTopItems('project', 3)
  const topStories = getTopItems('story', 3)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-8 py-16 space-y-16">
        <Hero />

        {/* Blog Posts Section */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-foreground">Latest Posts</h2>
            <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              View all →
            </a>
          </div>
          <div className="space-y-6">
            {topBlogPosts.map((post) => (
              <ContentCard key={post.slug} item={post} showLink={true} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-foreground">Projects</h2>
            <a href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
              View all →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topProjects.map((project) => (
              <ContentCard key={project.slug} item={project} showLink={true} />
            ))}
          </div>
        </section>

        {/* Stories Section */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-foreground">Stories</h2>
            <a href="/stories" className="text-muted-foreground hover:text-foreground transition-colors">
              View all →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topStories.map((story) => (
              <ContentCard key={story.slug} item={story} showLink={true} />
            ))}
          </div>
        </section>

        <About />
      </main>
      <Footer />
    </div>
  )
}