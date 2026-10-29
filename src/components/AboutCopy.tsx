import Link from 'next/link'

interface AboutCopyProps {
  level?: 'h1' | 'h2'
  titleClassName?: string
}

export default function AboutCopy({ level = 'h2', titleClassName = 'text-3xl font-semibold text-foreground' }: AboutCopyProps) {
  const Title = level

  return (
    <>
      <Title className={titleClassName}>Who am I?</Title>
      <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
        <p>That is a very good question. I ask that too.</p>
        <p>
          I’m Panda, a 2nd year student and the one and only Electrical Engineering and Math+Computing double major student at Georgia Tech!
        </p>
        <p>
          My interest eigenvectors span quite a few different dimensions. I enjoy <Link href="/stories" className="interest-link">creative storytelling</Link>, mathematical puzzle-solving (huge <a href="https://www.youtube.com/@3blue1brown" className="interest-link" target="_blank" rel="noreferrer">3blue1brown</a> fan!) and <Link href="/blog/disc-golf" className="interest-link">disc golf</Link>. I’m also a big fan of Avatar the Last Airbender series and Percy Jackson.
        </p>
        <p>
          These sentences sound like quite some underselling of my talents to be honest, but that’s why I made this whole personal website (;
        </p>
      </div>
    </>
  )
}
