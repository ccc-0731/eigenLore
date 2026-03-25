export default function Hero() {
  return (
    <section className="text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground font-figtree">
          Hello there!
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Panda's personal website. I want to be a person that bridges the pure mathematical, engineering and creative perspectives. So one day, I will invent a job for myself that blends all of those 👍
        </p>
      </div>
      <div className="flex justify-center">
        {/* Subtle line art placeholder - you can replace with actual SVG */}
        <svg width="200" height="100" viewBox="0 0 200 100" className="text-primary">
          <path d="M10 50 Q50 10 100 50 T190 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="30" r="3" fill="currentColor" />
          <circle cx="150" cy="70" r="3" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}