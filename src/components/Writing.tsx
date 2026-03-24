const posts = [
  {
    title: 'Understanding Eigenvalues and Eigenvectors',
    date: '2024-03-15',
    excerpt: 'A deep dive into the fundamental concepts of linear algebra and their applications in modern computing.'
  },
  {
    title: 'The Art of Algorithm Design',
    date: '2024-02-28',
    excerpt: 'Exploring the creative process behind designing efficient algorithms for complex problems.'
  },
  {
    title: 'Generative Art: Code as Canvas',
    date: '2024-02-10',
    excerpt: 'How programming can be used as a medium for artistic expression and mathematical exploration.'
  }
]

export default function Writing() {
  return (
    <section id="writing" className="space-y-8">
      <h2 className="text-3xl font-semibold text-foreground">Writing</h2>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <article key={index} className="border-l-2 border-border pl-6 hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-medium text-foreground mb-2">{post.title}</h3>
            <p className="text-muted-foreground mb-2">{post.excerpt}</p>
            <time className="text-sm text-muted-foreground">{post.date}</time>
          </article>
        ))}
      </div>
    </section>
  )
}