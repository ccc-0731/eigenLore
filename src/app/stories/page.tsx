import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContentCard from '@/components/ContentCard'
import { getContentByType } from '@/lib/content'

export default function Stories() {
  const stories = getContentByType('story')

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-8 py-16">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold mb-8">Stories</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tales that explore the intersection of technology, humanity, and imagination.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <ContentCard key={story.slug} item={story} showLink={true} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}