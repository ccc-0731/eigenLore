import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContentCard from '@/components/ContentCard'
import { getContentByType } from '@/lib/content'

export default function Blog() {
  const blogPosts = getContentByType('blog')

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-8 py-16">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Weird thinkings.
            </p>
          </header>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <ContentCard key={post.slug} item={post} showLink={true} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}