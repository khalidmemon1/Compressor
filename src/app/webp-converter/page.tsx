"use client"

import ToolView, { FAQItem, GuideStep, FeatureItem } from "@/components/compressor/tool-view"
import { FileImage, Zap, Globe } from "lucide-react"

const features: FeatureItem[] = [
  {
    icon: FileImage,
    title: "Next-Gen WebP Output",
    description: "25% to 35% smaller than comparable JPEGs",
  },
  {
    icon: Globe,
    title: "Universal Browser Support",
    description: "Supported by Chrome, Safari, Firefox, and Edge",
  },
  {
    icon: Zap,
    title: "Transparency Supported",
    description: "Preserves PNG alpha channel transparency",
  },
]

const guideSteps: GuideStep[] = [
  {
    step: "1",
    title: "Upload JPG or PNG Files",
    desc: "Select the images you want to transform into Google's next-gen WebP format.",
  },
  {
    step: "2",
    title: "Select WebP Quality",
    desc: "The output format is preset to WebP. Adjust quality (recommended: 80% to 85%) for the ideal size-to-clarity ratio.",
  },
  {
    step: "3",
    title: "Convert & Download",
    desc: "Compress and convert instantly. Download your new `.webp` files individually or bundled in a ZIP.",
  },
]

const faqs: FAQItem[] = [
  {
    question: "Why should I convert my images to WebP?",
    answer: "WebP was developed by Google specifically for the modern web. WebP images are typically 25% to 35% smaller than JPEGs and up to 80% smaller than PNGs while preserving identical visual fidelity and alpha transparency.",
  },
  {
    question: "Do modern web browsers support WebP images?",
    answer: "Yes! WebP has universal support across Google Chrome, Apple Safari (iOS & macOS), Mozilla Firefox, Microsoft Edge, and Opera (representing over 97% of worldwide internet users).",
  },
  {
    question: "Can I convert transparent PNGs to WebP without losing transparency?",
    answer: "Yes, WebP fully supports 8-bit alpha channels just like PNGs, allowing transparent logos and icons to remain transparent at a fraction of PNG file size.",
  },
  {
    question: "Is converting to WebP beneficial for Google SEO and Core Web Vitals?",
    answer: "Yes. Google recommends using next-generation image formats like WebP in PageSpeed Insights to improve Largest Contentful Paint (LCP) scores and search ranking.",
  },
]

export default function WebpConverterPage() {
  return (
    <ToolView
      badge="Next-Gen Image Format • Higher Compression Ratio"
      title="WebP Image"
      highlightTitle="Converter"
      subtitle="Convert PNG, JPG, and GIF images to Google's next-generation WebP format. Improve site speed, save bandwidth, and elevate Core Web Vitals."
      breadcrumbCurrent="WebP Converter"
      defaultFormat="webp"
      features={features}
      guideTitle="How to Convert Images to WebP"
      guideSteps={guideSteps}
      faqs={faqs}
    />
  )
}
