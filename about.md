# EigenLore Website: A Complete Guide for Beginners
(What I had AI write for myself to understand the codeBase)

## Welcome!

Hello! If you're a first-year computer science major with some Python experience but new to web development, this guide is for you. We'll break down this personal website project step by step. Think of it like explaining a Python script, but for web pages. We'll cover what each file does, how the code works, and how to make changes.

## What is This Project?

This is a **personal website** built with modern web technologies. It's like a digital business card or portfolio, but more like a blog or notebook. The website shows:

- A name and introduction (Hero section)
- Projects you've worked on
- Blog posts or articles (Writing section)
- Information about yourself (About section)

The design is clean and minimal, inspired by tools like Notion (a note-taking app) and Linear (a project management tool).

## Technologies Used

Before diving into the code, let's understand the tools:

### Next.js
- **What it is**: A framework for building websites with React (a JavaScript library for creating user interfaces)
- **Why we use it**: Makes it easy to create fast, modern websites. It handles routing (navigating between pages) and server-side rendering automatically.
- **Comparison to Python**: Like Flask or Django for Python, but specifically for React websites.

### TypeScript
- **What it is**: A version of JavaScript with type checking
- **Why we use it**: Helps catch errors early and makes code more reliable. It's like adding type hints to Python functions.
- **Example**: In Python you'd write `def add(x: int, y: int) -> int:`, in TypeScript it's similar but for JavaScript.

### Tailwind CSS
- **What it is**: A way to style websites using classes in HTML
- **Why we use it**: Instead of writing separate CSS files, you add classes directly to HTML elements. It's fast and consistent.
- **Example**: `<div className="bg-blue-500 text-white p-4">` makes a blue box with white text and padding.

### shadcn/ui
- **What it is**: Pre-built UI components (like buttons, cards) that are customizable
- **Why we use it**: Saves time by providing ready-made, accessible components that look good.

## Project Structure

Let's look at the folder structure. This is like organizing files in a Python project.

```
eigenLore/
├── src/                    # Source code folder
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout (like a template)
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable components
│   │   ├── ui/           # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── Navbar.tsx    # Navigation bar
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Projects.tsx  # Projects section
│   │   ├── Writing.tsx   # Writing section
│   │   ├── About.tsx     # About section
│   │   └── Footer.tsx    # Footer
│   └── lib/
│       └── utils.ts      # Utility functions
├── package.json          # Project dependencies (like requirements.txt)
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── postcss.config.js     # PostCSS configuration
└── .eslintrc.json        # Linting configuration
```

## How the Website Works

### The App Router System

Next.js uses an "App Router" which organizes pages like folders. Our main page is at `src/app/page.tsx`. When someone visits the website, Next.js:

1. Loads the layout (`layout.tsx`)
2. Renders the page (`page.tsx`)
3. Applies global styles (`globals.css`)

### Component-Based Architecture

The website is built from small, reusable pieces called "components". This is like functions in Python - each component does one thing well.

For example, the `Hero` component only handles the introduction section. The `Projects` component only shows the projects list.

## Detailed Code Explanation

### Configuration Files

#### package.json
This file lists all the dependencies (libraries) the project needs. It's like `requirements.txt` in Python.

```json
{
  "name": "eigenlore",
  "scripts": {
    "dev": "next dev",      // Start development server
    "build": "next build",  // Build for production
    "start": "next start"   // Start production server
  },
  "dependencies": {
    "next": "14.2.3",       // The Next.js framework
    "react": "^18",         // React library
    "tailwindcss": "^3.4.1" // Tailwind CSS
  }
}
```

#### tailwind.config.js
Configures Tailwind CSS. Defines custom colors and fonts.

```javascript
module.exports = {
  content: ['./src/**/*.{ts,tsx}'], // Where to look for Tailwind classes
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))", // Custom color variables
      },
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif'], // Custom font
      }
    }
  }
}
```

#### globals.css
Global styles that apply to the entire website.

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Figtree:wght@400;500;600;700&display=swap');

@tailwind base;    /* Base Tailwind styles */
@tailwind components; /* Component styles */
@tailwind utilities; /* Utility classes */

:root {
  --primary: 162 37% 52%; /* Custom color definitions */
}

body {
  font-family: 'Inter', sans-serif; /* Default font */
}

/* Custom tooltip styles */
.tooltip {
  border-bottom: 1px dotted #F6B26B;
}
.tooltip .tooltiptext {
  /* Tooltip bubble styling */
}
```

### Core Components

#### layout.tsx
The root layout wraps every page. It's like a template that includes the navbar and footer on every page.

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode  // The page content
}) {
  return (
    <html lang="en">
      <body>
        {children}  {/* This is where page.tsx content goes */}
      </body>
    </html>
  )
}
```

#### page.tsx
The home page that combines all sections.

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
// ... other imports

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-8 py-16 space-y-16">
        <Hero />
        <Projects />
        <Writing />
        <About />
      </main>
      <Footer />
    </div>
  )
}
```

### Section Components

#### Navbar.tsx
The sticky navigation bar at the top.

```tsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white border-b border-border z-10">
      <div className="max-w-3xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
          EigenLore
        </Link>
        <div className="flex space-x-6">
          <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </Link>
          {/* More links */}
        </div>
      </div>
    </nav>
  )
}
```

**How it works:**
- `sticky top-0`: Sticks to the top when scrolling
- `flex justify-between`: Puts name on left, links on right
- `hover:text-primary`: Changes color on hover
- `transition-colors`: Smooth color change

#### Hero.tsx
The introduction section.

```tsx
export default function Hero() {
  return (
    <section className="text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground font-figtree">
          EigenLore
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Exploring the intersections of mathematics, computation, and creative expression.
        </p>
      </div>
      <div className="flex justify-center">
        <svg width="200" height="100" viewBox="0 0 200 100" className="text-primary">
          <path d="M10 50 Q50 10 100 50 T190 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="30" r="3" fill="currentColor" />
          <circle cx="150" cy="70" r="3" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}
```

**How it works:**
- `text-center`: Centers all text
- `space-y-8`: Adds vertical spacing between elements
- `font-figtree`: Uses the Figtree font
- SVG: Simple vector graphics for illustration

#### Projects.tsx
Displays a grid of project cards.

```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    title: 'Mathematical Visualization Tool',
    description: 'Interactive web application for exploring complex mathematical concepts...',
    tags: ['React', 'D3.js', 'Mathematics']
  }
  // More projects...
]

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-3xl font-semibold text-foreground">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
```

**How it works:**
- `projects.map()`: Like a for loop in Python, creates a card for each project
- `key={index}`: React needs unique keys for list items
- `grid gap-6 md:grid-cols-2 lg:grid-cols-3`: Responsive grid (1 column on mobile, 2 on medium screens, 3 on large)
- `hover:border-primary/50`: Subtle border color change on hover

#### Writing.tsx
Simple list of blog posts.

```tsx
const posts = [
  {
    title: 'Understanding Eigenvalues and Eigenvectors',
    date: '2024-03-15',
    excerpt: 'A deep dive into the fundamental concepts of linear algebra...'
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
```

**How it works:**
- `border-l-2`: Left border for visual separation
- `pl-6`: Padding left to make space for the border
- `<time>`: Semantic HTML for dates

#### About.tsx
Personal information section with tooltips.

```tsx
export default function About() {
  return (
    <section id="about" className="space-y-8">
      <h2 className="text-3xl font-semibold text-foreground">About</h2>
      <p className="text-muted-foreground leading-relaxed max-w-2xl">
        I&apos;m passionate about the intersection of{' '}
        <span className="tooltip">
          mathematics
          <span className="tooltiptext">
            The study of numbers, shapes, patterns, and logical reasoning
          </span>
        </span>
        , computer science, and creative expression.
        {/* ... more text with tooltips */}
      </p>
    </section>
  )
}
```

**How it works:**
- `leading-relaxed`: Increases line height for better readability
- `max-w-2xl`: Limits width to 2xl (672px)
- Tooltip: CSS hover effect shows hidden text bubble

#### Footer.tsx
Bottom section with links.

```tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-16">
      <div className="max-w-3xl mx-auto px-8 py-8">
        <div className="flex justify-center space-x-6">
          <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
            GitHub
          </Link>
          {/* More social links */}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-4">
          © 2024 EigenLore. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
```

### UI Components (shadcn/ui)

#### button.tsx
Reusable button component.

```tsx
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
```

**How it works:**
- `forwardRef`: Passes refs through to the actual DOM element
- `cn()`: Combines class names (like `classNames` in Python)
- Variants: Different button styles (default, outline, etc.)

#### card.tsx
Card component for content containers.

```tsx
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
```

## How to Run and Develop

### Getting Started
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open http://localhost:3000 in your browser

### Development Workflow
- Make changes to `.tsx` files
- Save the file
- Browser automatically refreshes
- Check browser console for errors

## How to Make Changes

### Changing Content

#### Adding a New Project
Edit `src/components/Projects.tsx`:

```tsx
const projects = [
  // Add new project object
  {
    title: 'Your New Project',
    description: 'Description here',
    tags: ['Tag1', 'Tag2']
  },
  // ... existing projects
]
```

#### Adding a New Blog Post
Edit `src/components/Writing.tsx`:

```tsx
const posts = [
  {
    title: 'Your New Post',
    date: '2024-12-25',
    excerpt: 'Brief description...'
  },
  // ... existing posts
]
```

#### Changing Colors
Edit `src/app/globals.css`:

```css
:root {
  --primary: 162 37% 52%; /* Change this HSL value */
}
```

#### Adding a New Section
1. Create new component: `src/components/NewSection.tsx`
2. Import and add to `page.tsx`

### Changing Styling

#### Modifying Spacing
Use Tailwind classes:
- `space-y-8`: 32px vertical spacing
- `space-y-16`: 64px vertical spacing
- `p-8`: 32px padding all around

#### Changing Fonts
- Body text: Change in `globals.css` body selector
- Headings: Add font classes to specific elements

#### Responsive Design
- `md:`: Medium screens (768px+)
- `lg:`: Large screens (1024px+)
- `xl:`: Extra large screens (1280px+)

### Advanced Changes

#### Adding New Pages
Create `src/app/new-page/page.tsx`:

```tsx
export default function NewPage() {
  return <div>New page content</div>
}
```

#### Adding Interactivity
Use React hooks:

```tsx
import { useState } from 'react'

export default function InteractiveComponent() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

## Common Patterns and Concepts

### Props in React
Components receive data through "props" (like function arguments):

```tsx
function ProjectCard({ title, description, tags }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

// Usage
<ProjectCard 
  title="My Project" 
  description="Description" 
  tags={['tag1', 'tag2']} 
/>
```

### Conditional Rendering
Show different content based on conditions:

```tsx
function StatusMessage({ isLoading, error }) {
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error occurred</p>
  return <p>Success!</p>
}
```

### Array Mapping
Transform arrays into JSX elements:

```tsx
const items = ['apple', 'banana', 'cherry']

return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
)
```

## Troubleshooting

### Common Issues

1. **Build fails**: Check for TypeScript errors in terminal
2. **Styles not applying**: Make sure class names are correct
3. **Component not showing**: Check if it's imported and used in parent
4. **Responsive issues**: Test on different screen sizes

### Debugging Tips
- Use browser developer tools (F12)
- Check console for errors
- Add `console.log()` statements
- Use React Developer Tools browser extension

## Next Steps

Now that you understand the basics:

1. Try changing some text content
2. Modify colors in the CSS variables
3. Add a new project to the projects array
4. Experiment with different Tailwind classes
5. Add a new section to the website

Remember, web development is iterative. Make small changes, test frequently, and learn from each modification. The concepts here (components, styling, data structures) are similar to what you'll encounter in other web projects!

## Glossary

- **Component**: Reusable piece of UI
- **Props**: Data passed to components
- **JSX**: HTML-like syntax in JavaScript
- **Tailwind**: Utility-first CSS framework
- **Responsive**: Adapts to different screen sizes
- **Hook**: Special React function for state/interactivity
- **TypeScript**: JavaScript with type checking
- **Next.js**: React framework for web apps