import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Image Compressor - Free Online Tool',
    short_name: 'ImageCompressor',
    description: 'Compress images online for free. Reduce JPEG, PNG, WebP file sizes without uploads.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}