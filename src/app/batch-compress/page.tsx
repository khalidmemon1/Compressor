"use client"

import ToolView, { FAQItem, GuideStep, FeatureItem } from "@/components/compressor/tool-view"
import { Layers, Archive, Shield } from "lucide-react"

const features: FeatureItem[] = [
  {
    icon: Layers,
    title: "Bulk Concurrency",
    description: "Process dozens of photos simultaneously",
  },
  {
    icon: Archive,
    title: "One-Click ZIP Download",
    description: "Package all files into a single archive",
  },
  {
    icon: Shield,
    title: "100% Private & Free",
    description: "No server bandwidth limits or queue times",
  },
]

const guideSteps: GuideStep[] = [
  {
    step: "1",
    title: "Select Multiple Files",
    desc: "Drop a batch of photos or folder contents into the dropzone. You can add 10, 20, or 50+ images at a time.",
  },
  {
    step: "2",
    title: "Set Global Settings",
    desc: "Choose a target format, set your desired compression quality, and toggle aspect ratio retention for the entire batch.",
  },
  {
    step: "3",
    title: "Compress All & Download ZIP",
    desc: "Click 'Compress All'. Once finished, click 'Download All (ZIP)' to get all optimized photos organized in one compressed file.",
  },
]

const faqs: FAQItem[] = [
  {
    question: "How many images can I batch compress at once?",
    answer: "There are no hard server limits. You can drag in dozens of images. Because processing occurs asynchronously in browser Web Workers, your browser handles the queue smoothly.",
  },
  {
    question: "Can I download all compressed pictures at once?",
    answer: "Yes! Once you compress multiple images, a 'Download All (ZIP)' button appears, letting you save all compressed files in a single organized ZIP archive.",
  },
  {
    question: "Can I convert formats while batch compressing?",
    answer: "Absolutely. You can convert a batch of mixed PNGs, JPEGs, and BMPs into lightweight WebPs or uniform JPEGs with a single click.",
  },
  {
    question: "Is batch compressing safe for sensitive or confidential photos?",
    answer: "Yes. Your photos are never sent across the internet. They stay strictly inside your browser's private memory space.",
  },
]

export default function BatchCompressPage() {
  return (
    <ToolView
      badge="Bulk Photo Processing • Download as ZIP"
      title="Batch"
      highlightTitle="Image Compressor"
      subtitle="Compress dozens of photos in seconds. Apply consistent quality presets across your entire photo collection and download as a ZIP file."
      breadcrumbCurrent="Batch Compress"
      defaultFormat="same"
      features={features}
      guideTitle="How to Batch Compress Multiple Images"
      guideSteps={guideSteps}
      faqs={faqs}
    />
  )
}
