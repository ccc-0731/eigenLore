const posts = [
  {
    title: 'No title yet',
    date: '2023-2025',
    excerpt: 'Escapism on Europa'
  },
  {
    title: 'A_n',
    date: '2026-3',
    excerpt: 'What if the world is a simulation, but its told from the first person perspective of kids just trying to understand their relationship with the world?'
  },
  {
    title: 'Coming of Age horror story',
    date: '2026-3',
    excerpt: 'The world is being consumed by AI brainrot, and kids are what is left standing between adults and insanity. 17yr old kid alliances with squirrels to target this crisis.'
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