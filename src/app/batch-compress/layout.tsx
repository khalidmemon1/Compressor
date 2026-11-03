import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Batch Image Compressor - Compress Multiple Images at Once & Download ZIP",
  description: "Compress multiple images at once online for free. Batch compress JPG, PNG, and WebP photos and download them all in a single ZIP archive. Fast & private.",
  alternates: {
    canonical: "https://compressor.nuvolin.com/batch-compress",
  },
  openGraph: {
    title: "Batch Image Compressor - Bulk Photo Optimization Online",
    description: "Compress multiple images concurrently. Download all optimized files together in a ZIP file.",
    url: "https://compressor.nuvolin.com/batch-compress",
  },
}

export default function BatchCompressLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
