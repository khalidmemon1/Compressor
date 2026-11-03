"use client"

import ToolView, { FAQItem, GuideStep, FeatureItem } from "@/components/compressor/tool-view"
import { Shield, Zap, Sparkles } from "lucide-react"

const features: FeatureItem[] = [
  {
    icon: Sparkles,
    title: "Lossless & Lossy Modes",
    description: "Balanced compression preserving crispness",
  },
  {
    icon: Shield,
    title: "100% Client-Side",
    description: "Photos never leave your device",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "High-speed Web Worker processing",
  },
]

const guideSteps: GuideStep[] = [
  {
    step: "1",
    title: "Upload Your Images",
    desc: "Drag and drop your photos into the dropzone or click to browse files from your computer or phone.",
  },
  {
    step: "2",
    title: "Adjust Quality & Presets",
    desc: "Pick a preset (Web, Social Media, Print) or drag the slider to fine-tune quality, dimensions, and metadata removal.",
  },
  {
    step: "3",
    title: "Compress & Download",
    desc: "Review the instant compression savings and click download to save your optimized pictures.",
  },
]

const faqs: FAQItem[] = [
  {
    question: "How does this image compressor work without uploading files?",
    answer: "Compressor uses the browser's native HTML5 Canvas API and Web Workers to decode, resize, re-encode, and strip unnecessary metadata entirely inside your computer's RAM. No network transfer occurs.",
  },
  {
    question: "Does compressing reduce the visual quality of my image?",
    answer: "Our intelligent compression algorithms remove imperceptible image details and color redundancy. At 80% quality, the visual difference is virtually invisible while saving 60% to 85% of file size.",
  },
  {
    question: "What image formats are supported?",
    answer: "You can compress and convert between JPEG/JPG, PNG, WebP, BMP, and GIF files seamlessly.",
  },
  {
    question: "Is there a limit on file size or number of images?",
    answer: "Because processing runs locally on your machine, there are no artificial server limits. You can process large images directly without subscription fees or paywalls.",
  },
]

export default function CompressPage() {
  return (
    <ToolView
      badge="High-Speed Optimization • Zero Server Uploads"
      title="Online"
      highlightTitle="Image Compressor"
      subtitle="Reduce photo file sizes by up to 90% without compromising visual clarity. Fast, browser-based, and completely private."
      breadcrumbCurrent="Image Compressor"
      defaultFormat="same"
      features={features}
      guideTitle="How to Compress Images Online"
      guideSteps={guideSteps}
      faqs={faqs}
    />
  )
}
