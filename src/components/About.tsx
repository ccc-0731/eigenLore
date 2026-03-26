export default function About() {
  return (
    <section id="about" className="space-y-8">
      <h2 className="text-3xl font-semibold text-foreground">Who am I?</h2>
      <p className="text-muted-foreground leading-relaxed max-w-2xl">
        Great question.
        I&apos;m redefining the meaning of <span className="tooltip">nerd<span className="tooltiptext">Often defined as person that only studies</span></span> to be someone that is truly passionate and yaps a lot about what they like.
        Hover over to see my own cool <span className="tooltip">comments<span className="tooltiptext">Super cool!</span></span>!
      </p>
    </section>
  )
}