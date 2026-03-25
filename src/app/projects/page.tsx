import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Crazy Projects / Ideas</h1>
        <Projects />
      </main>
      <Footer />
    </div>
  )
}