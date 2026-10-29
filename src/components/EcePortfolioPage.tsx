import Image from 'next/image'
import Link from 'next/link'
import { Download, ExternalLink } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { publicFile } from '@/lib/site'

export default function EcePortfolioPage() {
  const resumeUrl = encodeURI(publicFile('/Panda Resume 26.10.28.pdf'))

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
                <p>I’m <strong>Panda Chu</strong>, a 2nd year student and the one and only Electrical Engineering and Math+Computing double major student at Georgia Tech!</p>
                <p>
                  My interest eigenvectors span quite a few different dimensions. I enjoy <Link href="/stories" className="interest-link">creative storytelling</Link>, mathematical puzzle-solving (huge <a href="https://www.youtube.com/@3blue1brown" className="interest-link" target="_blank" rel="noreferrer">3blue1brown</a> fan!) and <Link href="/blog/disc-golf" className="interest-link">disc golf</Link>. I’m also a big fan of Avatar the Last Airbender series and Percy Jackson.
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

        <div className="mt-10 divide-y divide-border rounded-[2rem] border border-border bg-white/80 px-7 shadow-sm sm:px-10">
          <section className="py-9 text-lg leading-8 text-muted-foreground">
            <p>This is a subspace of my personal website! It’s still a work in progress with occasional updates when I feel like it. This is not meant to be the landing page for my personal website (it’s not really for the eyes of recruiters… I made it for fun to spill some of my whims onto the internet) nor anything too seriously correlated to professional career development. For the requirements of this assignment, you can click around my personal website and see some additional cool content that I put on here!</p>
          </section>

          <nav className="py-9" aria-label="Table of Contents of this EPortfolio">
            <h2 className="text-3xl font-bold">Table of Contents of this EPortfolio</h2>
            <div className="mt-5 flex flex-col items-start gap-3 text-lg">
              <a className="ece-toc-link" href="#about-me">About Me (Return to top)</a>
              <a className="ece-toc-link" href="#my-story-at-tech">My Story at Tech</a>
              <a className="ece-toc-link" href="#discovery-project">Discovery Project</a>
              <a className="ece-toc-link" href="#professional-development">Professional Development</a>
              <a className="ece-toc-link" href="#my-resume">My Resume</a>
            </div>
          </nav>

          <section id="my-story-at-tech" className="scroll-mt-24 py-9">
            <Link href="/blog/my-story-at-tech" className="inline-block hover:text-primary">
              <h2 className="text-3xl font-bold underline decoration-primary/25 underline-offset-4">My Story at Tech So Far</h2>
            </Link>
          </section>

          <section id="discovery-project" className="scroll-mt-24 py-9">
            <h2 className="text-3xl font-bold">Discovery Project</h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-muted-foreground">
              <p>I made Zuko over the summer! Origin of the name: ATLA</p>
              <p>Project was to solder it.</p>
              <p>Reflow soldering for the first time!</p>
              <p>
                Read more about the discovery project: <Link href="/projects/mmouse" className="ece-inline-link">My story with Micromouse</Link>, Link to full documentation on Zuko (<Link href="/projects/zuko-v1" className="ece-highlight-link">All hail firemouse Zuko!</Link>)
              </p>
            </div>
          </section>

          <section id="professional-development" className="scroll-mt-24 py-9">
            <Link href="/blog/do-i-have-to" className="inline-block hover:text-primary">
              <h2 className="text-3xl font-bold underline decoration-primary/25 underline-offset-4">Professional Development</h2>
            </Link>
            <div className="mt-5 space-y-4 text-lg leading-8 text-muted-foreground">
              <p>I like teaching, I might be interested in a teaching role.</p>
              <p>(OR I just wanna be at home for the summer and play a ton of disc golf!)</p>
            </div>
            <Link href="/blog/future" className="ece-secret-link mt-8 inline-block">
              What I <em>really</em> want to do
            </Link>
          </section>

          <section id="my-resume" className="scroll-mt-24 py-9">
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
