"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import UploadZone from "@/components/compressor/upload-zone"
import ControlPanel from "@/components/compressor/control-panel"
import PreviewArea from "@/components/compressor/preview-area"
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'
import { Sparkles, Shield, Zap, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "100% Private",
    description: "All processing happens in your browser"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Web Worker-based compression"
  },
  {
    icon: Globe,
    title: "Multiple Formats",
    description: "JPEG, PNG, WebP support"
  }
]

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Image Compressor',
    description: 'Free online image compression tool. Reduce JPEG, PNG, WebP file sizes without uploads.',
    url: 'https://compressor.nuvolin.com',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    featureList: [
      'JPEG compression',
      'PNG compression', 
      'WebP compression',
      'Batch processing',
      'No file uploads',
      'Privacy focused'
    ]
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-12">
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
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Free • No Sign-up • Client-side Processing
                </Badge>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent leading-tight">
                Image Compressor
              </h1>
              
              <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Compress images directly in your browser with advanced presets. 
                <span className="text-primary font-medium">100% private</span>, no uploads required.
              </p>
            </div>
            
            {/* Feature Pills */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-8"
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
                    className="flex items-center gap-3 bg-card border rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
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
        </div>
      </main>
      <Footer />
    </div>
  )
}
