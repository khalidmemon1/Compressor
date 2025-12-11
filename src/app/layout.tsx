import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export const metadata: Metadata = {
  title: "Free Image Compressor Online - Reduce Photo Size Without Upload | 2024",
  description: "Compress JPEG, PNG, WebP images up to 90% smaller. Free online tool with batch processing, no uploads required. Reduce image file size instantly in your browser.",
  keywords: "image compressor, compress images online, reduce image size, photo compressor, optimize images, webp converter, batch image compression, free image optimizer, resize images, image file size reducer",
  authors: [{ name: "Image Compressor Tool" }],
  creator: "Nuvolin.com",
  publisher: "Nuvolin.com",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://yoursite.com"
  },
  openGraph: {
    title: "Free Image Compressor - Reduce Photo Size Online Without Upload",
    description: "Compress JPEG, PNG, WebP images up to 90% smaller. Free browser-based tool with batch processing. No uploads, 100% private and secure.",
    type: "website",
    locale: "en_US",
    url: "https://yoursite.com",
    siteName: "Image Compressor",
    images: [{
      url: "/logo.png",
      width: 1200,
      height: 630,
      alt: "Free Image Compressor Tool"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Compressor - Reduce Photo Size Online",
    description: "Compress images up to 90% smaller. Free browser tool, no uploads required. JPEG, PNG, WebP support.",
    images: ["/logo.png"]
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Technology",
  classification: "Image Processing Tool"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
