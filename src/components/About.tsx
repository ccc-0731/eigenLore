import Link from 'next/link'
import AboutCopy from './AboutCopy'

export default function About() {
  return (
    <section id="about" className="rounded-[2rem] border border-primary/15 bg-primary/5 p-8 sm:p-10">
      <AboutCopy />
      <Link href="/about" className="mt-6 inline-flex font-semibold text-primary hover:underline">
        A deeper dive into me projected onto the technical skills dimension (Résumé) →
      </Link>
    </section>
  )
}
