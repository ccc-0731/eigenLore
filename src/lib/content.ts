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
      title: 'Sample Blog Post',
      description: 'A demonstration of markdown rendering with LaTeX support',
      date: '2024-03-25',
      tags: ['markdown', 'latex', 'demo'],
      slug: 'sample-blog-post',
      type: 'blog' as const,
      content: `# Sample Blog Post

Welcome to my blog! This is a demonstration of markdown rendering with LaTeX support.

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

### Mathematics

The famous Pythagorean theorem:

$$
a^2 + b^2 = c^2
$$

And the integral of a Gaussian:

$$
\\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi}
$$

### Conclusion

That's all for now. Stay tuned for more posts!`
    },
    {
      title: 'About',
      description: 'Personal website and portfolio',
      date: '2024-03-25',
      slug: 'about',
      type: 'blog' as const, // Using blog type for about since it doesn't need images
      content: `# About Panda

Hello! I'm Panda, a curious explorer at the intersection of mathematics, engineering, and creative storytelling.

## What I Do

I believe the most interesting problems lie at the boundaries between disciplines. My work spans:

- **Mathematics**: From pure theory to practical applications
- **Engineering**: Building systems that solve real-world problems
- **Creative Coding**: Using technology as a medium for artistic expression
- **Storytelling**: Crafting narratives that make complex ideas accessible

## Current Focus

I'm on a mission to invent a job that perfectly blends my passions. Until then, you'll find me:

- Building weird projects that combine math and music
- Writing stories about AI, simulation theory, and human nature
- Exploring the creative potential of code
- Learning something new every day

## Let's Connect

I'm always excited to collaborate on projects that push boundaries and challenge assumptions. If you're working on something interesting at the intersection of technology and creativity, I'd love to hear about it!

---

*This website serves as both a portfolio and a creative outlet. Expect to find code, stories, mathematical musings, and the occasional existential crisis.*`
    }
  ],
  projects: [
    {
      title: 'Parodipi',
      description: 'Turns math concepts into parody songs.',
      date: '2024-01-15',
      tags: ['Hacklytics', 'Parody', 'Mathematics'],
      slug: 'parodipi',
      type: 'project' as const,
      image: '/eigenPi_confused.png',
      content: `# Parodipi

## Overview

Parodipi is a creative tool that transforms mathematical concepts into parody songs, making complex ideas more accessible and memorable.

## Features

- **Mathematical Song Generation**: Convert theorems and formulas into catchy tunes
- **Educational Tool**: Learn math through music and humor
- **Customizable Lyrics**: Adapt songs to different learning styles

## Technical Details

Built during Hacklytics with a focus on educational technology and creative coding.

## Future Plans

Expanding the song library and adding interactive learning modules.`
    },
    {
      title: 'Hero Imagined',
      description: 'Helps you become the childhood hero of your imaginations.',
      date: '2024-02-20',
      tags: ['Python', 'Agentic Workflow', 'Creative Storytelling'],
      slug: 'hero-imagined',
      type: 'project' as const,
      image: '/hero_imagined.png',
      content: `# Hero Imagined

## Overview

An AI-powered storytelling platform that helps users explore and develop their inner hero narratives.

## Features

- **Personal Hero Development**: Craft your unique hero journey
- **AI Storytelling Assistant**: Get help developing compelling narratives
- **Creative Writing Tools**: Interactive prompts and story-building exercises

## Technology

Built with Python and modern AI frameworks to create engaging, personalized storytelling experiences.`
    },
    {
      title: 'DaleDB',
      description: 'Noooo precious, we HATES hashmapses!',
      date: '2024-03-10',
      tags: ['1332', 'Horrible Debugging', 'Java', 'Data Structures'],
      slug: 'daledb',
      type: 'project' as const,
      image: '/eigenPi_confused.png',
      content: `# DaleDB

## Overview

A unique database implementation that takes a creative approach to data structures and storage.

## The Problem

Traditional hashmaps can be confusing and intimidating. DaleDB aims to make data structures more approachable.

## The Solution

A database system designed with user experience in mind, featuring intuitive interfaces and helpful error messages.

## Technical Challenges

- Implementing efficient data storage algorithms
- Creating user-friendly APIs
- Debugging complex data structure interactions

## Lessons Learned

Sometimes the most challenging projects teach us the most about problem-solving and creative thinking.`
    }
  ],
  stories: [
    {
      title: 'No title yet',
      description: 'Escapism on Europa',
      date: '2023-2025',
      slug: 'no-title-yet',
      type: 'story' as const,
      image: '/eigenPi_confused.png',
      content: `# No Title Yet

## Escapism on Europa

A story about finding solace in the most unexpected places - the icy moons of Jupiter.

## Themes

- Exploration and discovery
- The human need for escape
- Finding beauty in isolation

## Setting

The frozen surface of Europa, where beneath the ice lies the promise of something extraordinary.

## Coming Soon

This story is still in development. Stay tuned for updates!`
    },
    {
      title: 'A_n',
      description: 'What if the world is a simulation, but its told from the first person perspective of kids just trying to understand their relationship with the world?',
      date: '2026-03',
      slug: 'a-n',
      type: 'story' as const,
      image: '/eigenPi_confused.png',
      content: `# A_n

## The Simulation Hypothesis

A coming-of-age story told from the perspective of children grappling with the nature of reality.

## Premise

In a world that might be a simulation, a group of kids embarks on a journey to understand their place in the universe.

## Themes

- Identity and self-discovery
- The nature of reality
- Childhood wonder and curiosity
- Philosophical questions through innocent eyes

## Style

First-person narrative exploring complex ideas through the lens of youthful innocence and imagination.`
    },
    {
      title: 'Coming of Age horror story',
      description: 'The world is being consumed by AI brainrot, and kids are what is left standing between adults and insanity. 17yr old kid alliances with squirrels to target this crisis.',
      date: '2026-03',
      slug: 'coming-of-age-horror',
      type: 'story' as const,
      image: '/eigenPi_confused.png',
      content: `# Coming of Age Horror Story

## The Squirrel Alliance

In a world ravaged by AI-induced madness, one teenager discovers that the smallest creatures may hold the key to salvation.

## Plot Summary

As artificial intelligence spreads a form of digital "brainrot" through society, adults succumb to confusion and insanity. Children, mysteriously immune to the effects, must find their own way to combat the crisis.

## Main Character

A 17-year-old protagonist who forms an unlikely alliance with urban squirrels to fight back against the encroaching technological nightmare.

## Themes

- The vulnerability of technological dependence
- The resilience of youth
- Unconventional alliances
- Nature vs. technology

## Genre

Young adult horror with elements of speculative fiction and dark comedy.`
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