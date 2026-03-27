# EigenLore 🐼

My personal website exploring the intersections of mathematics, computation, and creative expression.

## Eigen + Lore = (My) Own Stories

A clean, minimal personal website built with modern web technologies. Features projects, writing, and about sections with a Notion-inspired design.

## 🚀 Live Site

[View Live Site](https://ccc-0731.github.io/eigenLore/)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Fonts**: Inter (body) & Figtree (headings)
- **Deployment**: GitHub Pages

## 🎨 Design Features So Far

- Clean, minimal aesthetic inspired by Notion and Linear
- Custom color palette with muted green, sky blue, and soft orange accents
- Responsive design with mobile-first approach
- Pi Creature Made out of vectors.
- Smooth hover transitions and subtle animations
- Havn't fixed this ReadMe from AI vibes yet...

## 📁 Project Structure

```
eigenLore/
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles & custom colors
│   │   ├── layout.tsx     # Root layout component
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Navbar.tsx    # Navigation bar
│   │   ├── Hero.tsx      # Introduction section
│   │   ├── Projects.tsx  # Projects showcase
│   │   ├── Writing.tsx   # Blog posts list
│   │   ├── About.tsx     # Personal information
│   │   └── Footer.tsx    # Site footer
│   └── lib/
│       └── utils.ts      # Utility functions
├── .github/workflows/    # GitHub Actions for deployment
├── about.md             # Detailed code documentation
└── package.json         # Dependencies & scripts
```

## 🧠 Project Structure Explained (For Beginners)
### AI wrote this. Cringe(?)

Hey there, future code wizards! 👋 Imagine this whole project as a magical adventure game world. Let's break it down like we're exploring a fantasy realm, using analogies that make sense even if you're just starting your coding journey.

### The Big Picture: Your Website as a Magical Kingdom 🏰

Think of your entire website as a kingdom called "EigenLore" (that's a cool name combining "eigen" from math and "lore" for stories). This kingdom has castles, villages, and hidden treasures. In code terms, it's a Next.js app - a super smart framework that builds websites like a master architect.

### The Main Castle: `src/` Directory 🏰

This is the heart of your kingdom! `src/` stands for "source" - it's where all the magic happens. Like the main castle where the king lives, this folder contains everything that makes your website work.

- **Why it's like a castle**: Everything important is organized inside. No random stuff scattered around - it's all neatly arranged in rooms and halls.

### The Royal Apartments: `app/` Directory 👑

Inside the castle, the `app/` directory is like the royal living quarters. This is where Next.js 14 (the latest version) does its thing with the "App Router" - think of it as the castle's navigation system.

- **`globals.css`**: The royal wardrobe! This file holds all the fancy styles and colors. It's like choosing what the king wears - defines the look and feel of your whole kingdom.
- **`layout.tsx`**: The castle's blueprint! This wraps around every page, like the walls and floors that are the same everywhere.
- **`page.tsx`**: The throne room! This is your homepage - where visitors first enter your kingdom.
- **Sub-folders like `about/`, `blog/`, etc.**: Different wings of the castle. Each has its own `page.tsx` - like rooms in a house, but for web pages.

### The Enchanted Artifacts: `components/` Directory ✨

Ah, the treasure room! Components are like magical artifacts you can reuse anywhere in your kingdom. Think of them as Lego blocks - you build your website by snapping them together.

- **`ui/` folder**: The basic building blocks, like shadcn/ui components. These are pre-made magical tools (buttons, cards) that look awesome and work great.
- **`Navbar.tsx`**: Your kingdom's map! Helps visitors navigate between different parts of your site.
- **`Hero.tsx`**: The grand entrance! The first thing people see - like a welcoming banner at the castle gates.
- **`Projects.tsx`, `Writing.tsx`, `About.tsx`**: Display cases for your treasures. These show off your projects, blog posts, and personal info.
- **`Footer.tsx`**: The kingdom's sign-off! Like the credits at the end of a movie.
- **`ContentPageTemplate.tsx`**: A magical template! It knows how to display any content (blog posts, projects) consistently.

### The Wizard's Spellbook: `lib/` Directory 📖

This is where the smart magic happens! `lib/` stands for "library" - it's your collection of helpful spells and tools.

- **`content.ts`**: The storybook! This file contains all your blog posts, projects, and stories as magical objects. It's like having all your tales written down in one enchanted book.
- **`utils.ts`**: Handy gadgets! Little utility functions that help with common tasks, like a Swiss Army knife for your code.
- **`NerdModeContext.tsx`**: A special mode switcher! Lets users toggle between normal and "nerd mode" - like having a secret superhero identity.

### The Treasure Chest: `public/` Directory 💰

This folder holds all your images, fonts, and other assets. It's like the kingdom's treasury - things that don't change but make everything look pretty.

### The Outside World: Root Files 🌍

- **`package.json`**: The kingdom's shopping list! Lists all the magical ingredients (dependencies) your project needs.
- **`next.config.js`**: Instructions for the royal architect! Tells Next.js how to build your website.
- **`tailwind.config.js`**: Color palette instructions! Defines your custom colors like "muted green" and "soft orange."
- **`tsconfig.json`**: TypeScript rules! Like grammar rules for your code - makes sure everything is written correctly.
- **`postcss.config.js`**: Style processor config! Helps Tailwind CSS work its magic.
- **`README.md`** (this file!): The kingdom's guidebook! Explains how everything works.

### How It All Works Together 🎭

When someone visits your website:
1. Next.js (the royal architect) reads the `app/` directory to understand the layout
2. It grabs components from `components/` like picking artifacts from the treasure room
3. Content comes from `lib/content.ts` - like reading stories from the spellbook
4. Styles from `globals.css` make everything look beautiful
5. Images from `public/` add visual magic

It's all connected like a well-designed board game - each piece has a purpose, and they work together to create an amazing experience!

Remember, coding is like building with magical blocks. Start small, experiment, and have fun! 🚀

## 🎉 How to Add or Edit Blog Posts (Fun Edition)

Ready to spill your thoughts into the digital universe? Blogging here is like scribbling in a magical diary that the whole internet can read! Let's make it super simple and fun. We'll pretend we're adding a post about your favorite pizza toppings. 🍕

### Step 1: Open the Magical Storybook 📖

Find the file `src/lib/content.ts`. This is where all your blog posts live as magical objects. Think of it as a bookshelf where each book is a blog post.

### Step 2: Add Your New Story Object 📝

Inside the `blog` array (look for the part that says `blog: [`), add a new object. Here's a super simple example:

```javascript
{
  title: 'My Ultimate Pizza Guide',
  description: 'Why pineapple belongs on pizza (fight me)',
  date: '2024-03-26',  // Today's date, like YYYY-MM-DD
  tags: ['food', 'pizza', 'controversy'],  // Keywords for searching
  slug: 'pizza-guide',  // URL-friendly name (no spaces!)
  type: 'blog' as const,
  content: `# My Ultimate Pizza Guide

## The Great Pineapple Debate

Pineapple on pizza is AMAZING! Here's why:

- It's sweet and savory
- Tropical vibes on a classic Italian dish
- My favorite topping forever

### My Top 3 Pizzas:

1. Hawaiian (obviously)
2. Pepperoni (classic)
3. Cheese (simple perfection)

What about you? Drop your pizza thoughts below! 🍍`
},
```

### Step 3: Save and See Magic Happen ✨

Save the file! Next.js will automatically create a new page at `/blog/pizza-guide`. Boom - your post is live!

### Editing an Existing Post ✏️

Want to change something? Just find the post object in `content.ts` and edit the `content` field. It's like rewriting your diary entry!

- **Change title or description**: Edit the `title` or `description` lines
- **Add more content**: Add more markdown to the `content` string
- **Fix typos**: Just edit the text inside the backticks

### Pro Tips for Fun Blogging 🎨

- **Markdown Magic**: Use `#` for headings, `*` for italics, `**` for bold
- **Add Images**: Put image files in `public/` folder, then link like `![Pizza Time](/pizza.jpg)`
- **Math Stuff**: Use `$E = mc^2$` for inline math or `$$a^2 + b^2 = c^2$$` for big equations
- **Tags**: Add fun tags like `['memes', 'cats', 'chaos']` to categorize your posts

That's it! You're now a blogging wizard. Go forth and share your pizza wisdom (or whatever weird thoughts you have)! 🧙‍♂️

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (? I'm not 18 🤣)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ccc-0731/eigenLore.git
   cd eigenLore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## 📦 Deployment to GitHub Pages (Sanity Notes to Self)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source
   - The workflow will automatically deploy your site

3. **Update Repository Name** (if different from "eigenLore")
   - Edit `next.config.js` and change the `basePath` and `assetPrefix` to match your repository name
   - Update the repository URL in this README

### Manual Deployment
~~But Why would anyone want to deploy my website...?~~

If you prefer manual deployment:

```bash
npm run build
npm run export
```

Then commit and push the `out/` directory to a `gh-pages` branch, or configure GitHub Pages to serve from the `out/` folder.

## 🎯 Customization

### Changing Content
~~But Why would anyone want to change my website...?~~

- **Projects**: Edit `src/components/Projects.tsx`
- **Writing**: Edit `src/components/Writing.tsx`
- **About**: Edit `src/components/About.tsx`
- **Colors**: Modify CSS variables in `src/app/globals.css`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`

### Styling

- Uses Tailwind CSS utility classes
- Custom colors defined as CSS variables
- Responsive design with mobile-first approach

## 📚 Documentation

~~For detailed code explanations and modification guides, see [`about.md`](about.md) - a comprehensive guide written for first-year computer science students.~~
AIs can be really funny.

## 🤝 Contributing

Whichever AI is helping me build this.

---

Built with thoughtful prompt engineering and vibe-coding. 
