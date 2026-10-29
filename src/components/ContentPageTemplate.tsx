import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { ContentItem } from '@/lib/content'
import { publicFile } from '@/lib/site'
import { Download, ExternalLink } from 'lucide-react'

interface ContentPageTemplateProps {
  content: ContentItem
  showMetadata?: boolean
}

export default function ContentPageTemplate({
  content,
  showMetadata = true,
}: ContentPageTemplateProps) {
  const pdfUrl = content.pdf ? encodeURI(publicFile(content.pdf)) : undefined
  const backgroundUrl = content.backgroundImage ? encodeURI(publicFile(content.backgroundImage)) : undefined

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {backgroundUrl && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url("${backgroundUrl}")` }}
        />
      )}
      <Navbar />
      <main className="relative mx-auto max-w-4xl px-6 py-16 sm:px-8">
        <article className="space-y-8 rounded-[2rem] border border-white/70 bg-white/90 p-7 shadow-xl shadow-slate-900/5 backdrop-blur-sm sm:p-12">
          {content.heroImage && (
            <div className="relative mx-auto aspect-[16/9] w-full max-w-2xl overflow-hidden rounded-3xl">
              <img
                src={publicFile(content.heroImage)}
                alt={`${content.title} cover`}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <header className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl">{content.title}</h1>
            {showMetadata && (
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <time className="text-sm">{content.date}</time>
                {content.tags && content.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {content.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary/60 px-3 py-1 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </header>

          <MarkdownRenderer content={content.content} />

          {pdfUrl && (
            <section className="space-y-4 border-t border-border pt-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold">Read the PDF</h2>
                <div className="flex flex-wrap gap-2">
                  <a className="pdf-action" href={pdfUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> Open
                  </a>
                  <a className="pdf-action" href={pdfUrl} download>
                    <Download size={16} /> Download
                  </a>
                </div>
              </div>
              <object
                data={pdfUrl}
                type="application/pdf"
                className="h-[72vh] min-h-[540px] w-full rounded-2xl border border-border bg-white"
              >
                <p>Your browser cannot preview this PDF. <a href={pdfUrl}>Open it here.</a></p>
              </object>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </div>
  )
}
