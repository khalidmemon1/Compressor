# AGENTS Guidelines & Architecture Reference: Modern Image Compressor

> **Target:** AI Agents, Pair Programmers, and Open Source Contributors (Antigravity, Cursor, Copilot, Claude, etc.)  
> **Repository:** [Compressor](https://github.com/khalidmemon1/Compressor) — Fast, Client-Side, Privacy-First Image Optimizer  
> **Core Mandate:** 100% Client-Side In-Browser Processing, Zero Server Uploads, Clean TypeScript, and Next.js Static Export Compatibility.

---

## 1. Project Overview & Architecture

Compressor is an open-source, client-side image compression and format conversion web application built on **Next.js 15 (App Router)** and **React 18/19**. All compression, resizing, metadata stripping, and format transformation happens entirely within the user's browser using HTML5 Canvas, Web Workers, and Web APIs (`browser-image-compression`).

### Tech Stack & Core Libraries:
- **Framework:** Next.js 15 (`output: 'export'` for full static site generation).
- **Language:** TypeScript 5 (Strict Mode).
- **Styling & UI:** Tailwind CSS v3, Radix UI primitives, `lucide-react`, `framer-motion`.
- **State Management:** Zustand (`src/store/use-compressor-store.ts`).
- **Compression Engine:** `browser-image-compression`, HTML5 Canvas API, Web Workers.
- **Form Validation & Schemas:** Zod.
- **Notifications:** Sonner.

### Directory Structure:
```
src/
├── app/                      # Next.js App Router (layout, page, metadata, sitemap)
│   ├── globals.css           # Tailwind base styles and CSS variables
│   ├── layout.tsx            # Root layout with theme, analytics, toaster
│   ├── page.tsx              # Main compressor landing & tool view
│   ├── not-found.tsx         # 404 error page
│   ├── manifest.ts           # Web app manifest
│   ├── robots.ts             # SEO robots rules
│   └── sitemap.ts            # Dynamic XML sitemap
├── components/
│   ├── compressor/           # Feature-specific components
│   │   ├── compression-info.tsx     # Format & compression guidance
│   │   ├── compression-presets.tsx  # Preset selectors (Web, Social, Print)
│   │   ├── control-panel.tsx        # Compression settings sliders & options
│   │   ├── dropzone.tsx             # File drag-and-drop zone
│   │   ├── format-selector.tsx      # Output format picker (JPEG, PNG, WebP)
│   │   ├── preview-area.tsx         # Compression preview & action buttons
│   │   └── quality-slider.tsx       # Quality level slider
│   ├── layout/               # Header, footer, theme toggle
│   └── ui/                   # Reusable shadcn/ui components (button, card, dialog, etc.)
├── core/
│   └── compression/
│       └── compressor.ts     # Core image compression engine & pipeline
├── lib/
│   └── utils.ts              # Utility functions (cn helper)
├── store/
│   └── use-compressor-store.ts # Global Zustand store for image queue & settings
└── types/
    └── compression.types.ts  # TypeScript types for options, presets, and images
```

---

## 2. Core Development Rules

### Rule 1: 100% Client-Side Privacy (Absolute Non-Negotiable)
- **Zero Server Uploads:** NEVER introduce server endpoints, cloud uploads, or database storage for user images.
- All compression, resizing, and format conversions MUST remain strictly client-side using browser memory (`Blob`, `File`, `ArrayBuffer`, `Canvas`, and Web Workers).
- User privacy is the core selling point of this project.

### Rule 2: Next.js Static Export Compatibility (`output: 'export'`)
- The project deploys as a static export (`out/` directory).
- **No Node.js Runtime Server Features:** Do not use runtime Node server features like `getServerSideProps`, runtime middleware requiring server logic, dynamic server routes without static generation, or raw server-side filesystem writes.
- For SEO routes (`manifest.ts`, `robots.ts`, `sitemap.ts`), always keep `export const dynamic = 'force-static'`.
- All interactive components that use hooks (`useState`, `useEffect`, `useCompressorStore`) MUST declare `"use client"` at the very top.

### Rule 3: Component Reusability & DRY Architecture
- Keep UI components presentational and modular.
- Check `src/components/ui/` for existing primitives before writing new ones.
- When creating UI components, use Tailwind utility classes driven by theme tokens (e.g. `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`).
- Do NOT hardcode ad-hoc hex colors or inline style objects.

### Rule 4: Lucide Icons vs Next.js `<Image />`
- When importing icons from `lucide-react`, avoid importing `Image` directly without aliasing. Always import as:
  ```tsx
  import { Image as ImageIcon } from 'lucide-react'
  ```
  This prevents ESLint conflicts with `@next/next/no-img-element` and `jsx-a11y/alt-text`.

### Rule 5: State Management & Store Access
- Global state for selected files, compression settings, and active presets is managed via `useCompressorStore` (`src/store/use-compressor-store.ts`).
- Local UI state (e.g., expanded accordions, temporary slider drag values) should reside in React `useState`.
- When updating compression options, use the typed `setOptions` mutation.

### Rule 6: Clean TypeScript & Strict Validation
- No `any` types. Always declare or reuse types from `src/types/compression.types.ts`.
- Ensure all JSX text containing apostrophes or quotes escapes them (`&apos;`, `&quot;`) to satisfy ESLint `react/no-unescaped-entities`.
- Test builds locally using `npm run build` before opening any PR.

---

## 3. Pull Request & Contribution Guidelines

1. **Branch Naming:**
   - Features: `feat/feature-name`
   - Bugfixes: `fix/bug-description`
   - Docs/Refactoring: `chore/topic` or `docs/update-guide`
2. **Commit Message Format (Conventional Commits):**
   - `feat: add WebP lossless compression preset`
   - `fix: prevent layout shift on preview thumbnail load`
   - `docs: update deployment instructions for Cloudflare Pages`
3. **Pre-Submission Checklist:**
   ```bash
   npm run lint   # Must pass with 0 warnings/errors
   npm run build  # Must export static build to out/ with exit code 0
   ```

---

## 4. Useful Commands

- `npm run dev`: Launch local development server at `http://localhost:3000`.
- `npm run build`: Generate production static build in `out/`.
- `npm run lint`: Run ESLint checks.
- `npx serve out`: Preview static export locally.
