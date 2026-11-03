import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Online Image Compressor - Compress JPEG, PNG & WebP Images Free",
  description: "Compress images online for free without losing quality. Reduce photo file size up to 90% directly in your browser. 100% private, no sign-up or software needed.",
  alternates: {
    canonical: "https://compressor.nuvolin.com/compress",
  },
  openGraph: {
    title: "Online Image Compressor - Free Photo Size Reducer",
    description: "Compress images online for free without losing quality. Reduce photo file size up to 90% directly in your browser.",
    url: "https://compressor.nuvolin.com/compress",
  },
}

export default function CompressLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
