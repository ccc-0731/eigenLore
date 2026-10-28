import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { publicFile } from '@/lib/site'
import { Download, ExternalLink } from 'lucide-react'
import AboutCopy from '@/components/AboutCopy'

export default function AboutPage() {
  const resumeUrl = encodeURI(publicFile('/Panda Resume 26.10.28.pdf'))

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-20">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/90 p-7 shadow-xl shadow-slate-900/5 sm:p-12">
          <div aria-hidden="true" className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-secondary/35 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-36 left-1/3 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

          <div className="relative grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <AboutCopy level="h1" titleClassName="text-4xl font-bold tracking-tight text-foreground sm:text-5xl" />

              <div className="mt-10 rounded-3xl border border-border bg-background/70 p-6">
                <p className="text-muted-foreground">A deeper dive into me projected onto the technical skills dimension (Résumé)</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a className="pdf-action" href={resumeUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={17} /> View résumé
                  </a>
                  <a className="pdf-action pdf-action-secondary" href={resumeUrl} download>
                    <Download size={17} /> Download PDF
                  </a>
                </div>
              </div>
            </div>

            <div className="relative mx-auto h-[25rem] w-full max-w-sm lg:sticky lg:top-28">
              <div className="about-photo about-photo-circle absolute right-0 top-0 h-64 w-64 rotate-3">
                <Image src={publicFile('/erhai.JPG')} alt="Panda by Erhai Lake" fill priority className="object-cover" />
              </div>
              <div className="about-photo-golden absolute bottom-2 left-0 h-48 w-[19.4rem] -rotate-3">
                <Image src={publicFile('/discGolf.JPG')} alt="Panda playing disc golf" fill priority className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 overflow-hidden rounded-[2rem] border border-border bg-white/80 p-5 sm:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-3xl font-semibold">Résumé preview</h2>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-primary hover:underline">
              Direct PDF link ↗
            </a>
          </div>
          <object data={resumeUrl} type="application/pdf" className="h-[72vh] min-h-[560px] w-full rounded-2xl border border-border bg-white">
            <p>Your browser cannot preview this PDF. <a href={resumeUrl}>Open the résumé here.</a></p>
          </object>
        </section>
      </main>
      <Footer />
    </div>
  )
}
