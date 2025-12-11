# Deployment Guide

## Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

## Production Deployment

The app is configured for static export and can be deployed to any static hosting platform.

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. No additional configuration needed

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`
3. Deploy the `out` folder

### Cloudflare Pages
1. Build command: `npm run build`
2. Build output directory: `out`
3. Deploy the generated static files

### GitHub Pages
1. Run `npm run build`
2. Deploy the `out` folder to your GitHub Pages repository
3. Enable GitHub Pages in repository settings

## Environment Variables

No environment variables are required. The app runs entirely client-side.

## Performance Tips

- The app uses Web Workers for image compression
- All processing happens in the browser
- No server-side dependencies
- Optimized for mobile and desktop

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Features Included

✅ Multiple image format support (JPEG, PNG, WebP, GIF, BMP)
✅ Batch processing
✅ Quality control
✅ Size constraints
✅ Metadata stripping
✅ Dark/Light theme
✅ Responsive design
✅ ZIP download for multiple files
✅ Drag & drop interface
✅ Real-time compression preview
✅ No server uploads (100% private)