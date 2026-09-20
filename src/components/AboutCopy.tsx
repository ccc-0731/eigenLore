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
          I’m Panda, currently a 2nd year Electrical Engineering major at Georgia Tech! I also like the algorithms side of CS. I really like math.
        </p>
        <p>
          My interest eigenvectors span quite a few different dimensions. I enjoy creative storytelling, mathematical puzzle-solving (huge 3blue1brown fan!) and disc golf. I’m also a big fan of Avatar the Last Airbender series and Percy Jackson.
        </p>
        <p>
          These sentences sound like quite some underselling of my talents to be honest, but that’s why I made this whole personal website (;
        </p>
      </div>
    </>
  )
}
