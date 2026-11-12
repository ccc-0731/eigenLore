import Image from 'next/image'
import Link from 'next/link'
import { Download, ExternalLink } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { getContentBySlug } from '@/lib/content'
import { publicFile } from '@/lib/site'

export default function EcePortfolioPage() {
  const resumeUrl = encodeURI(publicFile('/Panda Resume 26.10.28.pdf'))
  const myStory = getContentBySlug('my-story-at-tech')
  const professionalDevelopment = getContentBySlug('do-i-have-to')

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-8 sm:px-8 sm:py-12">
        <h1 className="mb-8 text-4xl text-foreground sm:text-5xl">Panda Chu’s EPortfolio (The ECE1100 Subspace)</h1>

        <section id="about-me" className="relative scroll-mt-24 overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/90 p-7 shadow-xl shadow-slate-900/5 sm:p-12">
          <div aria-hidden="true" className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-secondary/35 blur-3xl" />
          <div className="relative grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl text-foreground">Who am I?</h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
                <p>I’m <strong>Panda Chu</strong>, a 2nd year student and the one and only Electrical Engineering and Math+Computing double major at Georgia Tech!</p>
                <p>
                  I love asking &ldquo;But Why?&rdquo;. My interest eigenvectors span quite a few different dimensions. I enjoy <Link href="/projects" className="interest-link">building</Link> things, <Link href="/stories" className="interest-link">creative storytelling</Link>, mathematical puzzle-solving (huge <a href="https://www.youtube.com/@3blue1brown" className="interest-link" target="_blank" rel="noreferrer">3blue1brown</a> fan!) and <Link href="/blog/disc-golf" className="interest-link">disc golf</Link>. I’m also a big fan of Avatar the Last Airbender series and Percy Jackson.
                </p>
              </div>
            </div>

            <div className="relative mx-auto h-[25rem] w-full max-w-sm">
              <div className="about-photo about-photo-circle absolute right-0 top-0 h-64 w-64 rotate-3">
                <Image src={publicFile('/erhai.JPG')} alt="Panda by Erhai Lake" fill priority className="object-cover" />
              </div>
              <div className="about-photo-golden absolute bottom-2 left-0 h-48 w-[19.4rem] -rotate-3">
                <Image src={publicFile('/discGolf.JPG')} alt="Panda playing disc golf" fill priority className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-10 space-y-10">
          <section className="ece-card text-lg leading-8 text-muted-foreground">
            <p>This is a subspace of my personal website! It’s still a work in progress with occasional updates when I feel like it. This is not the landing page, and it is in no way intended to be professional. <em>I made it for fun to spill some of my whims onto the internet!</em> You can click around my personal website and see some additional cool content that I put on here!</p>
          </section>

          <nav className="ece-card" aria-label="Table of Contents of this EPortfolio">
            <h2 className="text-3xl font-bold">Table of Contents of this EPortfolio</h2>
            <div className="mt-5 flex flex-col items-start gap-3 text-lg">
              <a className="ece-toc-link" href="#about-me">About Me (Return to top)</a>
              <a className="ece-toc-link" href="#my-story-at-tech">My Story at Tech</a>
              <a className="ece-toc-link" href="#discovery-project">Discovery Project</a>
              <a className="ece-toc-link" href="#professional-development">Professional Development</a>
              <a className="ece-toc-link" href="#my-resume">My Resume</a>
            </div>
          </nav>

          <section id="my-story-at-tech" className="ece-card scroll-mt-24">
            <Link href="/blog/my-story-at-tech" className="inline-block hover:text-primary">
              <h2 className="text-3xl font-bold underline decoration-primary/25 underline-offset-4">My Story at Tech So Far</h2>
            </Link>
            {myStory && (
              <div className="mt-5">
                <MarkdownRenderer content={myStory.content} />
              </div>
            )}
          </section>

          <section id="discovery-project" className="ece-card relative isolate scroll-mt-24 overflow-hidden">
            <Image src={publicFile('/zuko_documentation/reflow/robot.jpg')} alt="" fill className="pointer-events-none -z-10 object-cover opacity-20" />
            <Link href="/projects/zuko-v1" className="inline-block hover:text-primary">
              <h2 className="text-3xl font-bold underline decoration-primary/25 underline-offset-4">Discovery Project</h2>
            </Link>
          </section>

          <section id="professional-development" className="ece-card scroll-mt-24">
            <Link href="/blog/do-i-have-to" className="inline-block hover:text-primary">
              <h2 className="text-3xl font-bold underline decoration-primary/25 underline-offset-4">Professional Development</h2>
            </Link>
            {professionalDevelopment && (
              <div className="mt-5">
                <MarkdownRenderer content={professionalDevelopment.content} />
              </div>
            )}
            <Link href="/blog/future" className="ece-secret-link mt-8 inline-block">
              What I <em>really</em> want to do
            </Link>
          </section>

          <section id="my-resume" className="ece-card scroll-mt-24">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-3xl font-bold">My Resume</h2>
              <div className="flex flex-wrap gap-2">
                <a className="pdf-action" href={resumeUrl} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> View résumé
                </a>
                <a className="pdf-action pdf-action-secondary" href={resumeUrl} download>
                  <Download size={16} /> Download PDF
                </a>
              </div>
            </div>
            <object data={resumeUrl} type="application/pdf" className="h-[72vh] min-h-[560px] w-full rounded-2xl border border-border bg-white">
              <p>Your browser cannot preview this PDF. <a href={resumeUrl}>Open the résumé here.</a></p>
            </object>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
