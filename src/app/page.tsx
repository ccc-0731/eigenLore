import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Writing from '@/components/Writing'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-8 py-16 space-y-16">
        <Hero />
        <Projects />
        <Writing />
        <About />
      </main>
      <Footer />
    </div>
  )
}