# Image Compressor

A modern, client-side image compression tool built with Next.js 15. Compress images directly in your browser with complete privacy - no uploads required.

## Features

- 🖼️ **Multiple Format Support**: JPEG, PNG, WebP
- 🎚️ **Quality Control**: Adjustable compression (1-100%)
- 📦 **Batch Processing**: Compress multiple images at once
- 🌙 **Dark Mode**: Built-in theme toggle
- 🔒 **100% Private**: All processing happens in your browser
- ⚡ **Fast**: Web Worker-based compression
- 📱 **Responsive**: Works on all devices

## Tech Stack

- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand (State Management)
- browser-image-compression
- Framer Motion

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

This creates a static export in the `out/` directory that can be deployed anywhere.

## Deployment

Deploy to any static hosting platform:
- Cloudflare Pages
- Vercel
- Netlify
- GitHub Pages

## License

MIT
