"use client"

import { useEffect } from "react"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import UploadZone from "@/components/compressor/upload-zone"
import ControlPanel from "@/components/compressor/control-panel"
import PreviewArea from "@/components/compressor/preview-area"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useCompressorStore } from "@/store/use-compressor-store"
import { 
  ChevronRight, 
  HelpCircle, 
  CheckCircle2, 
  LucideIcon 
} from "lucide-react"

export interface FAQItem {
  question: string
  answer: string
}

export interface GuideStep {
  step: string
  title: string
  desc: string
}

export interface FeatureItem {
  title: string
  description: string
  icon: LucideIcon
}

interface ToolViewProps {
  badge: string
  title: string
  highlightTitle?: string
  subtitle: string
  defaultFormat?: "same" | "webp" | "jpeg" | "png"
  features: FeatureItem[]
  guideTitle: string
  guideSteps: GuideStep[]
  faqs: FAQItem[]
  breadcrumbCurrent: string
}

export default function ToolView({
  badge,
  title,
  highlightTitle,
  subtitle,
  defaultFormat,
  features,
  guideTitle,
  guideSteps,
  faqs,
  breadcrumbCurrent,
}: ToolViewProps) {
  const { setOptions } = useCompressorStore()

  useEffect(() => {
    if (defaultFormat) {
      setOptions({ outputFormat: defaultFormat })
    }
  }, [defaultFormat, setOptions])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/20">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{breadcrumbCurrent}</span>
          </nav>

          {/* Hero Section */}
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center"
              >
                <Badge variant="secondary" className="px-4 py-1.5 text-xs sm:text-sm font-medium">
                  {badge}
                </Badge>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
                {title}{" "}
                {highlightTitle && (
                  <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                    {highlightTitle}
                  </span>
                )}
              </h1>
              
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            </div>
            
            {/* Feature Pills */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 bg-card border rounded-full px-4 py-2 shadow-sm"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <div className="text-left">
                      <div className="text-sm font-medium">{feature.title}</div>
                      <div className="text-xs text-muted-foreground hidden sm:block">{feature.description}</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
          
          {/* Upload Zone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <UploadZone />
          </motion.div>
          
          {/* Preview Area */}
          <motion.div
            id="preview-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <PreviewArea />
          </motion.div>
          
          {/* Control Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ControlPanel />
          </motion.div>

          {/* How It Works Guide */}
          <section className="border rounded-2xl bg-card p-6 md:p-10 space-y-8 shadow-sm">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold">{guideTitle}</h2>
              <p className="text-sm text-muted-foreground">
                Follow these simple steps to optimize your pictures in seconds without software installation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guideSteps.map((step) => (
                <div 
                  key={step.step}
                  className="rounded-xl border bg-background/50 p-6 space-y-3 relative overflow-hidden"
                >
                  <span className="text-4xl font-extrabold text-primary/15 absolute right-4 top-2 select-none">
                    {step.step}
                  </span>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <CheckCircle2 className="h-4 w-4" />
                    Step {step.step}
                  </div>
                  <h3 className="font-semibold text-base">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="space-y-6">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
                <HelpCircle className="h-3.5 w-3.5" />
                Frequently Asked Questions
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Everything You Need to Know</h2>
              <p className="text-sm text-muted-foreground">
                Have questions about image optimization and privacy? Here are quick answers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className="rounded-xl border bg-card p-5 space-y-2 hover:border-primary/40 transition-colors"
                >
                  <h3 className="font-semibold text-base flex items-start gap-2">
                    <span className="text-primary font-bold">Q.</span>
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground pl-6 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
