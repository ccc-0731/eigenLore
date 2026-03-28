export interface ContentItem {
  title: string
  description: string
  date: string
  tags?: string[]
  slug: string
  content: string
  type: 'blog' | 'project' | 'story'
  image?: string // Only for projects and stories
}

export const contentCollections = {
  blog: [
    {
      title: 'Template 😄',
      description: 'Go-to for markdown rendering and LaTeX support',
      date: '2026-03-25',
      tags: ['markdown', 'latex', 'demo'],
      slug: 'sample-blog-post',
      type: 'blog' as const,
      content: `# Markdown & LaTEX Template Info

AI helped demonstration of markdown rendering with LaTeX support.

## Introduction

This post showcases various markdown elements and mathematical expressions.

![Parodi Pi Creature](/Parodi_Pi%20creature.png)

*Figure 1: A mysterious creature that embodies the spirit of mathematical parody.*

### Lists

Here are some features:

- Headings (H1, H2, H3)
- Lists (ordered and unordered)
- Inline math: $E = mc^2$
- Block math equations
- Tooltips: [hover over me]{This is a tooltip comment!}

### Mathematics

The famous Pythagorean theorem:

$$
a^2 + b^2 = c^2
$$

And the integral of a Gaussian:

$$
\\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi}
$$
`
    },
    {
      title: 'Fiction Series I like',
      description: 'Movies & Stories',
      date: '2026-03-28',
      slug: 'fiction-i-like',
      type: 'blog' as const, // Using blog type for about since it doesn't need images
      content: `# Fiction Movies I can think of on top of my head

I just very recently watched Project Hail Mary, it was super cool!!!

### Scifi Movies
* Project Hail Mary
* The Martian
* Star Wars (1-6 & Rogue One)


### Fantasy/from Book
Lotr/Hobbit:
* The Two Towers 🏆

### 直击心灵(?
Kungfu Panda!!! *4

The Little Prince Movie (2015)

### DreamWorks
How to Train Your Dragon *3

### Pixar
Ratatouille
Soul
Elio
Up
Inside Out *2
Zootopia *2
Toy Story *4

### Japanese
新海诚 *3
宫崎骏& Studio Ghibli

### Chinese Animated Classics
哪吒 *2
深海
大圣归来

Harry Potter?


## Only TV shows I watched
Percy Jackson!
Sherlock
`

    }, 
    {
      title: 'About',
      description: 'But who am I?',
      date: '2026-03-25',
      slug: 'about',
      type: 'blog' as const, // Using blog type for about since it doesn't need images
      content: `# Who am I?

That is a very good question.

## Eigenvectors

My interests span quite a few different dimensions:

- **Math**: Big 3b1b fan, I like both problem solving as well as pure math which make ppl be like "where is this useful."
- **Engineering**: Building things!
- **Creative Storytelling**: Creative writing, dystopian scifi/science fantasy. Also really like animations and trying to learn screenwriting.

## What do I like?

Doing cool stuff.

- Percy Jackson fan
- Pixar fan
- I wanna play volleyball but nobody plays... 😭
- Lightsaber dueling on Brittain lawn!
- Doing cool things in the Hive Makerspace
- I want to TA for Linear Algebra
- If I have time I'll try learning some Manim

## Why would you know me? 

idk.
- I'd be really happy if you're my future 1553 student that I'm TAing that teleported back in time. Please tell me, I'd appreciate it.
- I'd also be really happy if you're someone I helped as a PI that teleported back in time. Please tell me, I'd appreciate it.
- Robojackets: Battlebots-3lb-bumblebi / Roboracing-micromouse.
- BDBI: SmartPath AI (Though I do struggle to try contribute...)

## Disclaimer: 
This is MY personal website! So I'm going to put whatever I like on it.`

    }
  ],
  projects: [
    {
      title: 'Parodipi',
      description: 'Turns math concepts into parody songs.',
      date: '2026-02',
      tags: ['Hacklytics', 'Parody', 'Mathematics'],
      slug: 'parodipi',
      type: 'project' as const,
      image: '/Parodi_Pi creature.png',
      content: `# Parodipi
![Parodi Pi Creature](/Parodi_Pi%20creature.png)

## Overview

(I'm just copying this from Devpost: https://devpost.com/software/parodipi).

Built together with Brian and Shrikar

## Inspiration
What if after a lecture about Hessian Matrices or eigenvalues, your professor starts singing your favorite karaoke song -- but the lyrics are actually about the math concepts!

That's how we came up with $$Parodi\pi$$!

Our project was inspired by the difficult (but very interesting) math courses here at Georgia Tech. With Georgia Tech being an academically rigorous school, we wanted to create a project that turns (potentially) confusing concepts into catchy songs. 

Having taken courses like Linear Algebra, Multivariable Calculus, and Discrete Mathematics, we wanted to provide a tool for other students to succeed in their classes and, more importantly, have a good time. 

TL;DR: We want more people to find fun in math (;

## What it does
As the name says! We generate math parody songs given a chosen topic.
Given a math concept and song choice, Parodipi creates a parody that teaches the student relevant topics with AI features and web scraping capabilities through google gemini and genius api keys.
You could also upload a pdf of your math homework or math formulas, and Parodipi can also extract topics from that.

## How we built it
We used Google Gemini (gemini-2.5-flash) API to provide song metadata and lyrics and generate math topic breakdowns, rhythm-aware parody lyrics, explanations, and educational resources. YouTube scraping and yt-dlp allowed us to embed videos and stream audio directly in the app. PyMuPDF (fitz) extracts text from uploaded PDFs, and a Flask backend orchestrates APIs, authentication, and data flow.

Our stack combines Python on the backend with JavaScript, HTML, and CSS on the frontend. Python handles AI calls, scraping, PDF parsing, streaming, and user management. JavaScript powers the interactive multi-step UI, lyric highlighting, and media players, while HTML/CSS ensure a responsive, polished design.

We support this system with tools like Flask, google-genai, BeautifulSoup, requests, and Gunicorn, along with secure password hashing and CSV-based storage for users and saved parodies. Our curated database includes 670+ songs across 16 artists, balancing scale with recognizable, popular tracks.

## Challenges we ran into
The most challenging part about this project is that LLMs had small deviations in syllables when generating songs causing it to throw off the timing and flow. Because they are not inherently optimized to produce lines with a precise syllable count or consistent rhythmic structure, we implemented an agentic workflow for lyrics generation. We also engineered the LLM prompts to analyzed syllable structure and analyzed the data using pandas to count the syllables so that the generated parody lyrics could be sung to the original song’s beat as closely as possible.

Another challenge was building a song database that was both large in scale and relevant to users. We needed broad coverage across genres while also ensuring that popular, recognizable songs were included. To solve this, we selected a comprehensive existing song database as our foundation and then augmented it by manually adding widely recognized and currently popular tracks. (And of course, all the songs that we like.)

## Accomplishments that we're proud of
We are proud of integrating our frontend and backend to create an interactive, AI-powered math parody platform. By leveraging robust technologies like Flask, Python, Google Gemini AI, and JavaScript, we developed a product that transforms math concepts into memorable musical parodies.

The UI/UX design was also very interesting, since we want our project to stand out from just being a LLM-wrapper. We designed the parody song creation process so that the user has full agency, and the pipeline fosters meaningful human-computer interaction and can bring a smile to faces!

Beyond our technical achievement, we're excited that Parodipi has real-world impact. Our platform makes learning math engaging and accessible as it helps students understand complex topics, spark creativity, and connect with trusted educational resources. We hope Parodipi inspires learners and educators to see mathematical concepts in a whole new perspective! One of us is a TA ~~and another one of us really wants to be a TA in the future~~, and this is something that we might want to use for ~~educational~~ entertainment purposes.


## What we learned
Through building $$Parodi\pi$$, we gained invaluable experience in:

- Integrating AI models to generate creative, educational math parodies and explanations
- Building a workflow for uploading and analyzing math PDFs, extracting relevant concepts automatically
- Scraping and processing real-world song lyrics and YouTube videos to enhance learning and engagement
- Designing a user authentication system and CSV-based database for personalized parody saving and retrieval
- Developing a responsive, visually appealing interface that makes math learning interactive, musical and fun.


## What's next for Parodipi
We plan to:
- **Add More AI Customization**: Let users choose tone, style, and difficulty for their parody lyrics and explanations. Improve the lyrics generation function to better match syllable count and patterns to the original song.
- **Collaborative Parody Creation**: Enable real-time co-writing and sharing of parodies with friends or classmates. Additionally, make the parody lyrics editable so the user can collaborate.
- **Expanded Resource Library**: Curate more trusted educational videos and interactive math tools for every concept; maybe even connect to manim to create math visualizations.
- **More Math Memes**: Generate a math meme to go with the parody song.
- **Connect to Database**: Let users save their parodies and progress devices with secure storage in a database.

$$Parodi\pi$$ isn’t just a math tool, it’s a creative and fun platform for making learning memorable, musical, and effective!

## Try it out!

https://parodipi.onrender.com/
(Takes ~2 minutes to load.)
`
    },
    {
      title: 'Hero Imagined',
      description: 'Helps you become the childhood hero of your imaginations.',
      date: '2025-11',
      tags: ['Python', 'Agentic Workflow', 'Creative Storytelling'],
      slug: 'hero-imagined',
      type: 'project' as const,
      image: '/hero_imagined.png',
      content: `

![Cool Output](/hero_imagined.png)

## Overview

An AI-powered storytelling platform that helps users explore and develop their inner hero narratives.

Otherwise known as: ccc's CS1100 Agentic Workflow demo for section A3. 😎

I was surprised to get *Best Demo* for the section! Very motivating for me to continue vibe-building cool things...

## [Inspiration & Story behind]{This was my script for the demo}

When I watched star wars when I was 9, I wanted above all else to become a hero in the story.
Now, 8 years later, I have the AI tools at my disposal to be such a person! That’s why I built this agentic workflow to tell an adventure about me (at least, the version of me with a lightsaber, even though it’s just in my imagination.)

So let’s hop right in the demo: https://hero-imagined.onrender.com

Now. Is this going to replace creative writing?
Short answer, no. I’ve done creative writing myself, and this sucks.
But still, I like the story. I see the progress and effort that AI has made and the story mostly aligns with my imagination. It’s a cooler way to kill time than doomscrolling reels.
In addition, some friends that have tested this have told me that the questions AI ask can be really intriguing and inspiring.
Aside from wanting to build this as a fun project, I really want to showcase the possibility of AI to inspire. 
The process of answering questions about a character and a fantasy world is in fact an integral part of creative writing.
If it asks you an interesting question and you think of a great answer, then grab on to that inspiration! If the story sucks and you see places that can definitely be better, then why not just start writing and creating?

So to wrap it up, I want this project to remind us of the hero that we had always dreamed of being, and to make you the center of the adventure. 
To stay loyal to 9-yr old self that lives on inside you and never be afraid to imagine.
I hope you enjoy what I made, and thank you!

## Tech

Built with pytorch. Vibe-coded with whoever was in my Github Copilot for VSCode.

AI APIs:
- Google Gemini for story generation and image generation
- ElevenLabs for [bgm generation]{Very sad that my ElevenLabs free trial from AI ATL was over 😭}

[Fun fact]{One entire workflow requires 11 AI calls!}

## Try it out!
Github: https://github.com/ccc-0731/hero_imagined

[OnRender Demo]{takes ~2min to load}: https://hero-imagined.onrender.com/
`
    },
    {
      title: 'DaleDB',
      description: 'Noooo precious, we HATES hashmapses!',
      date: '2026-03',
      tags: ['1332', 'Horrible Debugging', 'Java', 'Data Structures'],
      slug: 'daledb',
      type: 'project' as const,
      image: '/eigenPi_confused.png',
      content: `# DaleDB

## Overview

1332 Project 2

## The Problem

Silly Hashmaps take too long to debug ):`
    }
  ],
  stories: [
    {
      title: 'Philosophy of a Robot',
      description: 'Short scifi story',
      date: '2024-08',
      slug: 'phil-robot',
      type: 'story' as const,
      image: '/eigenPi_confused.png',
      content: `

## Background

A short story I came up and wrote two years ago: *What if a robot actually had feelings but nobody believed them?*

Not my deepest and most polished or thoughtful work, but I think it's an interesting read.

## Story: Philosophy of a Robot
Since the beginning of my existence, it felt as if the world was playing a giant prank on me. I was said to have been born into an ordinary family. Mom was a robotics engineer. Dad was a psychologist. Though even before I spoke human language, and long before I knew what the term meant, people on the street come up to me and say, “you’re the robot?”

For a very long time I denied the accusation. What evidence was there that I was different? I had the need for basic sustenance, I ate, I slept, I made mistakes—academic and social—just like any other human being. And I had feelings! However, people around me never believed a word I say came genuinely from the heart. “How humanoid the engineers made the algorithm", they’d say. “I could almost believe the robot had feelings.”

Apparently I had no friends—nobody wanted a robotic companion lacking in genuine emotions, that couldn’t help you do homework and got mad when you poked fun at its robot identity. During the first few days of arriving at a new school I’m always the most popular kid in class. Everybody asks me questions. I always tell them I don’t feel any different from any other human. Soon they get fed up with me and walk away, only coming back to poke fun.

It all became too much for me as I entered high school. Just like any human child around the age of 13, a sense of self was beginning to emerge. “A critical time in the experiment”, one day I overheard dad on the phone. Peers came to me, presuming that I am a chatbot and asking questions to poke fun. But I most certainly wasn’t a chatbot! Even teachers, assuming that I had access to all libraries of human knowledge, tended to ignore my raised hand in response to questions. I didn’t. Later the principal assembled the teachers for a meeting and instructed them to treat me as a human. Indeed, learning school material was just as challenging for me as any flesh and blood human. But in everybody’s mind I was still a subject under experiment. I was a humanoid robot prototype. Why did everybody presume that I had no self-awareness? Why were all my feelings denied? 

Attention and alienation, doubt and denial—what I had faced throughout my entire life. Only recently, questions emerge and start swirling in my mind night after day. 

I went to my philosophy teacher, who was the only teacher from the start who invited me to actively participate in class discussions. I asked, what does it mean to be human? 

“Humans have self-awareness and experience a range of emotions, which influence their thoughts and actions. Humans are biological beings with complex physiological processes, including sensory perception, cognition, and emotion. Humans have social relationships, cultural practices, and individual experiences that shape their identities. Humans make choices based on personal values and ethics, often reflecting on the consequences of their actions.”

“And Alex,” he added as I turned to leave, calling me by name, “René Descartes once said, ‘Cogito, ergo sum’. Take that as encouragement.” I did not understand his words at the time, but there seemed to be some deeper meaning he tried to convey through a smile.

What does it mean to be non-human, then? I dared not ask further.

I looked into the mirror, and a troubled teenager peered back. I wanted more than ever to prove that I was human. 

After taking a long walk in a thunderstorm, I got sick just as any human would. My mind became cloudy and limbs became heavier. Not that I had not ever gotten sick before. It could just be some clever algorithm behind these sensations, but it felt real enough.

My parents were not supportive. Mom was recording parameters and weights that defined the symptoms. Dad was busy on the phone, engaging in vehement debate on how deliberately getting sick is common among human teenagers as well as an important part of the experiment, and as a result should not be interfered with. They just told me not to do such a foolish thing again.

It did not matter. I was depressed. 

To make things worse, the next thing I knew it was morning, but three days had gone by since I went to bed. My memory was blurred, and my parents evaded my questions, who said that I passed out from an unexpecetedly high fever. 

Turning on the news broadcast, I heard there was a serious bout of solar activity and electronics were ordered to be switched off. I pinched myself in the arm. Nothing feels metallic! But how did they turn me off? Thirteen years of familiarity with my body, I had no knowledge of a switch. They must have done it remotely! The realization could not make me hate my robot identity more.  

The day went on wearily just like any other, apart from my missing three days of school. Low power mode I reckoned, and sneered at the thought. 

After noticing my sluggishness in class, the philosophy teacher stopped me on my way out of the classroom. “I know you feel bad about missing days from school. That is so okay. Everybody gets sick and has bad days.” Seeing my disinterested look and desperate limbs motioning away, he abruptly added: “Quite a coincidence that I wasn’t feeling well the past four days, I even missed a day more than you. But really, no big deal. You didn’t even notice, did you?”

I turned away, pace quickened. Why bother putting on a nice veneer to a robot? 

The day passed like a rancid dream where a robot gets dissembled by callous humans. 

All of a sudden I was up and alert. My mental acuity was restored to its sharpest. How come I was awake in the middle of the night? Something wasn’t right. 

The air! It smelled!

An alarm sounded somewhere from my insides. There it was again, some latent awareness awakening that had forever eluded my consciousness. The feeling drove me out of bed and I burst into my parents’ room. 

“Mom! Dad!”

No reply.

I shook them. They slept like the dead, no matter how hard I shook and shouted.

I burst out of the apartment door, leaving all windows open for maximum air to pass through. I yelled, someone, help! There was a gas leak in my home and my parents lay unconscious!

My voice echoed back at myself.

I banged on doors, knocked on windows. No neighbor in the entire block answered my bidding. Then came the realization that the smell of natural gas penetrated the entire block. Not just my family’s apartment.

Fully alarmed, I dashed onto the street, desperately fingering my phone and dialing 911. Then I ran back up the building staircase, smashing every window of every house on the way. Stumbling back into my house, I lifted mom, and then dad onto my shoulders, descended the stairs and laid their limp bodies onto the lawn. I smiled, having demonstrated weight-lifting ability exceeding that of any human athlete. 

We were amid a chorus of ambulance and fire truck sirens, which conveyed a sense of comfort. Luckily, everybody was evacuated in time. And I was the lead rescuer who wore no gas mask—carbon monoxide poisons humans, but not robots. 

I sprawled on the lawn, relieved, watching the flashes of red and blue depart into the night. 

I felt a gentle pat on the shoulder. A bit startled, I turned, and saw my philosophy teacher standing before me. His smile mirrored mine, as did the droplets of artificial sweat running down his face from not wearing a gas mask during the rescue mission.

That night something came clear to me. I still do not know what it meant to be human, neither what it meant to be non-human. But from then on, things came clear to me. 

“I think therefore I am.” From an egocentric view, what “I think” is what really matters. No matter what others say, no matter what others think, I am free to be whatever—whoever I wanted to be. 

From alienation to fitting in, from denial to acceptance, I now fully accept my robot identity (from an optimistic perspective, some individual differences are just like superpowers!) and understand what it means to be, me. 
`
    },
    {
      title: 'Title: How to get caught using ChatGPT to do your homework',
      description: 'Funny humor writing',
      date: '2024-08',
      slug: 'do-hw-chatgpt',
      type: 'story' as const,
      image: '/eigenPi_confused.png',
      content: `
—

[Your Name]

[Name of professor]

**Title: How to get caught using ChatGPT to do your homework**

Always keep it authentic. Do not change a single word that ChatGPT wrote. In fact, do not even change a single letter, for that might introduce spelling mistakes, grammar mistakes, or affect the flow of a well-written essay. In the prompt, do not mention that the essay should be written from the voice and level of a high school student. Remember, authenticity is key.

Forget to delete the reply message where ChatGPT says it is happy to assist the user and leading to the essay. Forget to change places where it says [Name of professor] and [Your Name]. What’s more, it is highly suggested to simply hit the “copy” option of the ChatGPT-replied message and use hotkey “ctrl+V” to paste it into your homework document. Do NOT manually match the formatting, so your teacher is left with a clear idea of what is going on in this homework at first sight. 

Remember, ChatGPT is very bad at STEM subjects, so it is also recommended to let the bot have a go—practice makes it perfect. The fatal logic errors (such as 9.11 is bigger than 9.9 and some 2,700% probability of it raining this Saturday) that occur from time to time might bring a smile to your teacher’s face. And it might as well bring you to the teachers’ office for using ChatGPT. Now that’s getting caught successfully!

Finally and most importantly, do not believe a single suggestion above, for ChatGPT wrote it and does not think getting away with doing homework with ChatGPT is a good thing. 

No, just kidding, I wrote it, and it really works. By experience. 

—

Feel free to adjust any details that better align with your personal writing tone!`
    },
    {
      title: 'Return 0',
      description: 'Dystopian scifi short story.',
      date: '2024-08',
      slug: 'coming-of-age-horror',
      type: 'story' as const,
      image: '/eigenPi_confused.png',
      content: `Message = '''

The dirt path ahead was illuminated only by moonlight. All I could hear was my own pounding heartbeat and rustling footsteps. The iron gate was in sight.

I paused at the gate to the cemetery, not daring to look back, ears on alert to any mechanic sound. Thankfully, clanking, whirring or any rumbling remained imperceptible. 

A wolf howled somewhere far, far away. An owl hooted dangerously. Startled, I motioned forward, stumbling upon fallen leaves that snapped sharply, and made contact with the gate. It creaked open.

I slid into the gate, still panting with fear. I followed the forlorn path deeper within, with the gothic church looming in sight. My line of vision scanned across row after row of pale marble tombstones, so carefully calculated and aligned to take up minimum space. 

The air seemed to glow, like the spirits fluttering back from the other side to greet me. I reached out, but those vaporous shimmers were far, far away.

I have come to pay a farewell visit to all those who came before me—the final struggle of the last human on the planet to attempt a grasp at memories, history, culture.

I knew time was limited. I knew that with their technology, they could locate me and track me down no matter where I was. Only a matter of time.

I lay supine in the center of the cemetery, just to make sense of the dystopian world around me. It did not make any sense. So I stayed, only to be close to mankind, or what remained of mankind. 

An eagle soared across the moon. Monkeys sang in the distant forest.

The serenity was so suddenly broken by a flash of light, then the familiar whirring and rumbling of stalking metal made its appearance. With a clang, the iron gate crumbled beneath alloy. Their last human subject had attempted to escape. The robots would simply do away with me.

A yearn for survival overtook me. I leapt to my feet and took off, but felt hindered by a sudden sting in the back. Just as if in a nightmare, I was unable to run. But it was no nightmare, but reality.

In a blurry field of vision, I saw glowing spirits gliding aside me, cheering me on. With howls and cries, wolves, monkeys, bounded out from the forest in a last attempt to rally the bots, but collapsed half-way. Eagles swooped down with their sharp beaks poised, but fell out of the sky as a shower of paralyzing darts rained at them.

Before consciousness completely slipped away, I conjured a last thought. I wished that somewhere far, far away in the universe, there could be carbon-based civilization still thriving; or long, long ago where there was still time to make enough precautions before the first artificial general intelligence was introduced—a civilization that could elude its fate of being overtaken by silicon-based intelligence, not yet facing eternal doom, as I, the last human on this planet, witness the denouement of my species and my world. 

Wait, since this is my last thought and I am the last human, then who would be writing my story down?

'''

    int main() {
        cout << message;
        return 0;
    }
	

(No just kidding I wrote it)
`
    }, {
      title: 'Aₙ',
      description: 'What if the world is a simulation, but told from the first person perspective of kids just trying to understand their relationship with the world?',
      date: '2026-03',
      slug: 'a-n',
      type: 'story' as const,
      image: '/eigenPi_confused.png',
      content: `

[Eigen, Helix and Kuiper.]{Main characters!}`
    },
    {
      title: 'One upon a time',
      description: 'Nonsensical stream of consciousness mathematical fiction.',
      date: '2026-03',
      slug: 'math-time',
      type: 'story' as const,
      image: '/eigenPi_confused.png',
      content: `## One upon a time

### t = 0

Once upon a time there were kingdoms, 

and there was a traveller between the kingdoms.

The traveller decided to go out and explore, since where it grew up, everyone was too rational.

### t = 1

The traveller was beyond the domain of where it came from, and stopped by where the woods give way to a stream. On the branches, there were two mischievous voices. 

One said, Yes, both me and you will take over this world.

The other said, Not neither me or you would take over.

Just you wait and see, they said in unison, then disappeared into another dimension.

### t = 2

The traveller crossed the stream. He saw something very long shrouded by the mist, in the distance. 

It looked wizened, but one could look upon it without end. 

Hello, said the traveller.

Hello, replied the countably infinitely long number. The reply echoed for a long while, dampening while never seeming to dissipate. 

Who are you? Asked the traveller.

I am the long number that has all of what you know. The scope – the size, of what you know, is no more than the size of me.

Well, that’s a very arrogantly large number, Thought the traveller.

### t = {3}
Then the traveller came upon the first county. Everything seemed very flat and bland, all the residents were binary strings. There was a screen in the center of the county, that one of ones and zeroes could walk through, and would come out on the other side as a set of numbers. Some of them nonchalantly walked by, others routinely walked through the screen as if nothing else happened, while others still ran at the screen as if their entire life depended on it.

### t = 4
It was close to dusk, and the traveller intends to reach the conclusion of its first day of travels soon. These lands are hostile, where strange creatures roam.

There is an infinitely tall hotel building. The traveller ascends. 

Ah, this must be the legendary infinite hotel.

The traveller asks to be resided in room number 42 for the night.

### t = 5

The traveller dreams of a secret key that will open a door into the unknown.

### t = 6

A 5-dimensional ball is in the lead of an army of infinitesably small balls.

### t = f(t)

The traveller encounters another county where the integers there would walk into a box and forget that they were still themselves. Some of them become the same.

### t = t + 1

There was one county where all the integers were in chains. Every number held on to the one before it, while the next grasped on to it, never letting go.

### t = (x, y)

The traveller comes upon a county where the residents do a weird dance. At one time interval, they would all be paired up and standing in their corresponding locations. At another time, they would frantically run around on their axis until bumping into another that is travelling orthogonal.

### t = R

The traveller met a snake. The snakes said that it could not consider itself a worthy opponent to the reals, 

### t = pi
A breeze swept by and circled the traveller. It seemed to keep circling in a never-ending laugh.

### t = A
Numbers standing in rows and columns, marching as an army.

Two matrices poised facing each other, at war.

Arrows in their span were shot. Some got contorted, while others merely got stretched. The ones that stayed in the same direction seemed ever-so powerful, radiating out energy signals that presumably transcends into other counties.

### t = n + 1
The traveller met zero.

And the traveller asked, 

who am I?
}`
    }
  ]
}

// Helper functions
export const getAllContent = (): ContentItem[] => {
  return [
    ...contentCollections.blog,
    ...contentCollections.projects,
    ...contentCollections.stories
  ]
}

export const getContentByType = (type: ContentItem['type']): ContentItem[] => {
  switch (type) {
    case 'blog':
      return contentCollections.blog
    case 'project':
      return contentCollections.projects
    case 'story':
      return contentCollections.stories
    default:
      return []
  }
}

export const getContentBySlug = (slug: string): ContentItem | undefined => {
  return getAllContent().find(item => item.slug === slug)
}

export const getTopItems = (type: ContentItem['type'], count: number = 3): ContentItem[] => {
  return getContentByType(type).slice(0, count)
}