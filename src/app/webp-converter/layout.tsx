import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WebP Converter - Convert JPG, PNG to Next-Gen WebP Online Free",
  description: "Convert PNG, JPG, JPEG, and GIF images to next-gen WebP format online for free. Reduce file size by 30% or more compared to JPEG with superior quality.",
  alternates: {
    canonical: "https://compressor.nuvolin.com/webp-converter",
  },
  openGraph: {
    title: "WebP Converter - Convert Images to WebP Online",
    description: "Convert PNG and JPG pictures to WebP format directly in your browser. Boost website loading speeds and SEO.",
    url: "https://compressor.nuvolin.com/webp-converter",
  },
}

export default function WebpConverterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
