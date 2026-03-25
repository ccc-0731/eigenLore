import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        <About />
      </main>
      <Footer />
    </div>
  )
}