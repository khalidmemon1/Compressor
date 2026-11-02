# ⚡ Compressor — Fast, Private, In-Browser Image Optimizer

[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

> A modern, open-source, client-side image compression tool built with **Next.js 15 App Router** and **React**. Compress and convert images up to **90% smaller** directly in your browser with **100% privacy** — no images are ever uploaded to any server.

---

## ✨ Features

- 🔒 **100% Client-Side Privacy:** All processing takes place in browser memory via HTML5 Canvas and Web Workers. Zero server uploads.
- 🖼️ **Multi-Format Support:** Compress and convert between **JPEG, PNG, and WebP**.
- 🎚️ **Fine-Grained Quality Control:** Interactive sliders for quality (1–100%), maximum file dimension, and max file size (MB).
- 📦 **Batch Compression:** Upload and compress dozens of images concurrently.
- 🎯 **Smart Presets:** One-click presets for Web, Social Media (Instagram, Twitter, Facebook), and Print.
- 📐 **Aspect Ratio Preservation:** Maintain original image proportions automatically while resizing.
- 🧹 **EXIF & Metadata Stripping:** Clean camera/GPS metadata to minimize byte payload and enhance privacy.
- 🌓 **Dark & Light Mode:** System-aware theme toggle built with `next-themes`.
- ⚡ **Blazing Fast:** Non-blocking asynchronous processing powered by Web Workers.
- 📱 **Fully Responsive:** Smooth UI tailored for mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Static Export `output: 'export'`)
- **UI & Styling:** [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [Lucide Icons](https://lucide.dev/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Compression Core:** [browser-image-compression](https://github.com/Donaldcwl/browser-image-compression) & HTML5 Canvas API
- **Toast Notifications:** [Sonner](https://sonner.emilkowal.ski/)

---

## 🚀 Quick Start

### Prerequisites
- Node.js `18.18.0` or higher
- npm, pnpm, or yarn

### 1. Clone the repository
```bash
git clone https://github.com/khalidmemon1/Compressor.git
cd Compressor
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 🏗️ Building for Production

To generate a static production export:

```bash
npm run build
```

This creates an optimized, static web app inside the `out/` folder ready for deployment on any static host.

To preview the production build locally:
```bash
npx serve out
```

---

## 🌐 Deployment Options

Because Compressor generates pure static HTML/JS/CSS, it can be deployed to any static host without server costs:

| Platform | Build Command | Publish Directory |
| :--- | :--- | :--- |
| **Vercel** | `npm run build` | `out` (or auto-detected) |
| **Cloudflare Pages** | `npm run build` | `out` |
| **Netlify** | `npm run build` | `out` |
| **GitHub Pages** | Included in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) | `out` |

---

## 📁 Project Structure

```
├── .github/                  # CI/CD Workflows, PR & Issue templates
├── public/                   # Static assets (favicons, logos)
├── src/
│   ├── app/                  # Next.js App Router (layout, page, sitemap, robots)
│   ├── components/
│   │   ├── compressor/       # Compression UI (dropzone, control panel, presets)
│   │   ├── layout/           # Theme provider, navigation headers
│   │   └── ui/               # Reusable shadcn/ui components
│   ├── core/
│   │   └── compression/      # Core compression algorithm and worker logic
│   ├── store/                # Zustand state store
│   └── types/                # TypeScript types & interfaces
├── AGENTS.md                 # AI agent & contributor architecture guide
├── CONTRIBUTING.md           # Contribution guidelines & workflow
└── LICENSE                   # MIT License
```

---

## 🤝 Contributing

We welcome contributions! Please check out [CONTRIBUTING.md](CONTRIBUTING.md) for local setup, branching rules, and coding standards.

For AI agents or Cursor/Copilot users, refer to [AGENTS.md](AGENTS.md) and [.cursorrules](.cursorrules).

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
