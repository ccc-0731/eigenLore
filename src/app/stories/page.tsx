import Navbar from '@/components/Navbar'
import Writing from '@/components/Writing'
import Footer from '@/components/Footer'

export default function Stories() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Stories</h1>
        <Writing />
      </main>
      <Footer />
    </div>
  )
}