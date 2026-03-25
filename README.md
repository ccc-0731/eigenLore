# EigenLore 🐼

My personal website exploring the intersections of mathematics, computation, and creative expression.

## Eigen + Lore = (My) Own Stories

A clean, minimal personal website built with modern web technologies. Features projects, writing, and about sections with a Notion-inspired design.

## 🚀 Live Site

[View Live Site](https://ccc-0731.github.io/eigenLore/) (when deployed)

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
- Interactive tooltips for technical terms
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
