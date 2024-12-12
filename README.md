# HomeLab Blog

A technical blog built with Astro for sharing IT, networking, and cybersecurity home lab projects.

## 🚀 Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd homelab-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📝 Creating Blog Posts

Blog posts are written in Markdown format and stored in the `src/content/posts` directory. Here's how to create a new post:

1. Create a new `.md` file in `src/content/posts` with the format: `YYYY-MM-DD-title.md`
2. Add the following frontmatter at the top of your file:

```markdown
---
title: "Your Post Title"
description: "Brief description of your post"
date: "YYYY-MM-DD"
category: "Category Name"
---

Your post content goes here...
```

### Post Categories

Current categories include:
- Networking
- Security
- Tools
- Infrastructure
- Tutorials

Add new categories by updating `src/data/categories.ts`.

## 🛠️ Project Structure

```
/
├── src/
│   ├── components/    # Reusable UI components
│   ├── content/       # Blog posts and content
│   ├── layouts/       # Page layouts
│   ├── pages/         # Route components
│   ├── styles/        # Global styles
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Utility functions
└── public/           # Static assets
```

## 🚀 Deploying to GitHub Pages

1. Create a new repository on GitHub

2. Update `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://<your-username>.github.io',
  base: '/<repo-name>',
  integrations: [tailwind()]
});
```

3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

4. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "GitHub Actions" as the source

5. Push your changes:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

## 📝 Writing Guidelines

1. Use clear, concise titles that describe the content
2. Include relevant tags and categories
3. Add code snippets where applicable
4. Include screenshots or diagrams when helpful
5. End posts with a conclusion or next steps

## 🎨 Customization

### Styling
- Tailwind CSS is used for styling
- Modify `tailwind.config.mjs` for theme customization
- Global styles are in `src/layouts/Layout.astro`

### Components
- Create reusable components in `src/components`
- Use Astro's `.astro` format for components
- Follow the existing component structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details