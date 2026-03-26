import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { ContentItem } from '@/lib/content'

interface ContentPageTemplateProps {
  content: ContentItem
  showMetadata?: boolean
}

/**
 * Reusable template for content pages (blog posts, projects, stories, about)
 * Renders markdown + LaTeX content with consistent layout and metadata display
 */
export default function ContentPageTemplate({
  content,
  showMetadata = true
}: ContentPageTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-8 py-16">
        <article className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">{content.title}</h1>
            {showMetadata && (
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <time className="text-sm">{content.date}</time>
                {content.tags && content.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {content.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none">
            <MarkdownRenderer content={content.content} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}