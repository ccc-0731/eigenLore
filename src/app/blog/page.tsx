import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MarkdownRenderer from '@/components/MarkdownRenderer'

const samplePost = `# Sample Blog Post

Welcome to my blog! This is a demonstration of markdown rendering with LaTeX support.

## Introduction

This post showcases various markdown elements and mathematical expressions.

### Lists

Here are some features:

- Headings (H1, H2, H3)
- Lists (ordered and unordered)
- Inline math: $E = mc^2$
- Block math equations

### Mathematics

The famous Pythagorean theorem:

$$
a^2 + b^2 = c^2
$$

And the integral of a Gaussian:

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

### Conclusion

That's all for now. Stay tuned for more posts!
`

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <MarkdownRenderer content={samplePost} />
      </main>
      <Footer />
    </div>
  )
}