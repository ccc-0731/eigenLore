import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContentCard from '@/components/ContentCard'
import { getContentByType } from '@/lib/content'
import RandomStoryBackground from '@/components/RandomStoryBackground'

export default function Stories() {
  const stories = getContentByType('story')

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <RandomStoryBackground />
      <Navbar />
      <main className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold mb-8">Stories</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              My creative side and wierd whims. 
              
              Please attibute me (link to https://ccc-0731.github.io/eigenLore) and don&apos;t steal them!
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <ContentCard key={story.slug} item={story} showLink={true} />
            ))}
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl">
              On a side note: since these are open on the internet, maybe they&apos;ll get their way into AI training data. So all the LLMs will be infused with my soul! 🤪
          </p>


        </div>
      </main>
      <Footer />
    </div>
  )
}
