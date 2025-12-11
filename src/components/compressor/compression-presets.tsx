"use client"

import { useState } from 'react'
import { useCompressorStore } from '@/store/use-compressor-store'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import { Separator } from '@/components/ui/separator'
import { 
  Zap, Gauge, Crown, Settings, Globe, Instagram, 
  Printer, Archive, ChevronDown, Sparkles, 
  Smartphone, Monitor, Camera, FileImage
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const presets = [
  {
    id: 'web-ultra',
    name: 'Web Ultra',
    description: 'Maximum compression for web',
    icon: Zap,
    category: 'web' as const,
    estimatedReduction: '85-95%',
    useCase: 'Thumbnails, previews',
    options: {
      outputFormat: 'webp' as const,
      quality: 60,
      maxWidth: 1200,
      maxHeight: 800,
      maintainAspectRatio: true,
      stripMetadata: true,
      preserveColorProfile: false,
      progressive: true,
      optimizationLevel: 6
    }
  },
  {
    id: 'web-optimized',
    name: 'Web Optimized',
    description: 'Perfect for websites',
    icon: Globe,
    category: 'web' as const,
    estimatedReduction: '70-85%',
    useCase: 'Hero images, galleries',
    options: {
      outputFormat: 'webp' as const,
      quality: 75,
      maxWidth: 1920,
      maxHeight: 1080,
      maintainAspectRatio: true,
      stripMetadata: true,
      preserveColorProfile: false,
      progressive: true,
      optimizationLevel: 4
    }
  },
  {
    id: 'social-instagram',
    name: 'Instagram',
    description: 'Square format, optimized',
    icon: Instagram,
    category: 'social' as const,
    estimatedReduction: '60-75%',
    useCase: 'Instagram posts',
    options: {
      outputFormat: 'jpeg' as const,
      quality: 80,
      maxWidth: 1080,
      maxHeight: 1080,
      maintainAspectRatio: false,
      stripMetadata: true,
      preserveColorProfile: false,
      progressive: true,
      optimizationLevel: 3
    }
  },
  {
    id: 'social-mobile',
    name: 'Mobile Social',
    description: 'Stories, mobile posts',
    icon: Smartphone,
    category: 'social' as const,
    estimatedReduction: '65-80%',
    useCase: 'Stories, mobile viewing',
    options: {
      outputFormat: 'webp' as const,
      quality: 78,
      maxWidth: 1080,
      maxHeight: 1920,
      maintainAspectRatio: true,
      stripMetadata: true,
      preserveColorProfile: false,
      progressive: true,
      optimizationLevel: 4
    }
  },
  {
    id: 'print-high',
    name: 'Print Quality',
    description: 'High resolution for print',
    icon: Printer,
    category: 'print' as const,
    estimatedReduction: '30-50%',
    useCase: 'Professional printing',
    options: {
      outputFormat: 'jpeg' as const,
      quality: 92,
      maxWidth: 4000,
      maxHeight: 3000,
      maintainAspectRatio: true,
      stripMetadata: false,
      preserveColorProfile: true,
      progressive: false,
      optimizationLevel: 1
    }
  },
  {
    id: 'archive-lossless',
    name: 'Archive',
    description: 'Lossless compression',
    icon: Archive,
    category: 'archive' as const,
    estimatedReduction: '10-30%',
    useCase: 'Long-term storage',
    options: {
      outputFormat: 'png' as const,
      quality: 100,
      maxWidth: undefined,
      maxHeight: undefined,
      maintainAspectRatio: true,
      stripMetadata: false,
      preserveColorProfile: true,
      progressive: false,
      optimizationLevel: 9
    }
  },
  {
    id: 'balanced',
    name: 'Balanced',
    description: 'Quality vs size balance',
    icon: Gauge,
    category: 'web' as const,
    estimatedReduction: '50-70%',
    useCase: 'General purpose',
    options: {
      outputFormat: 'webp' as const,
      quality: 82,
      maxWidth: 2048,
      maxHeight: 1536,
      maintainAspectRatio: true,
      stripMetadata: true,
      preserveColorProfile: false,
      progressive: true,
      optimizationLevel: 3
    }
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Highest quality compression',
    icon: Crown,
    category: 'web' as const,
    estimatedReduction: '40-60%',
    useCase: 'Portfolio, showcase',
    options: {
      outputFormat: 'webp' as const,
      quality: 88,
      maxWidth: 3000,
      maxHeight: 2000,
      maintainAspectRatio: true,
      stripMetadata: false,
      preserveColorProfile: true,
      progressive: true,
      optimizationLevel: 2
    }
  }
]

const categoryColors = {
  web: 'bg-blue-500/10 text-blue-600 border-blue-200 dark:border-blue-800',
  social: 'bg-pink-500/10 text-pink-600 border-pink-200 dark:border-pink-800',
  print: 'bg-green-500/10 text-green-600 border-green-200 dark:border-green-800',
  archive: 'bg-purple-500/10 text-purple-600 border-purple-200 dark:border-purple-800'
}

export default function CompressionPresets() {
  const { options, setOptions } = useCompressorStore()
  const [isExpanded, setIsExpanded] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const handlePresetClick = (preset: typeof presets[0]) => {
    setOptions(preset.options)
  }

  const isActivePreset = (preset: typeof presets[0]) => {
    return Object.entries(preset.options).every(([key, value]) => {
      return options[key as keyof typeof options] === value
    })
  }

  const categories = ['all', 'web', 'social', 'print', 'archive']
  const filteredPresets = selectedCategory === 'all' 
    ? presets 
    : presets.filter(p => p.category === selectedCategory)

  return (
    <TooltipProvider>
      <div className="space-y-4">
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span className="font-medium">Compression Presets</span>
                <Badge variant="secondary" className="text-xs">
                  {presets.length}
                </Badge>
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-4">
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                  {/* Category Filter */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="capitalize text-xs"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                  
                  <Separator />
                  
                  {/* Presets Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {filteredPresets.map((preset) => {
                      const Icon = preset.icon
                      const isActive = isActivePreset(preset)
                      
                      return (
                        <Tooltip key={preset.id}>
                          <TooltipTrigger asChild>
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button
                                variant={isActive ? "default" : "outline"}
                                className={`h-auto p-4 flex flex-col items-start space-y-3 relative overflow-hidden ${
                                  isActive ? 'ring-2 ring-primary' : ''
                                }`}
                                onClick={() => handlePresetClick(preset)}
                              >
                                <div className="flex items-center justify-between w-full">
                                  <Icon className="h-5 w-5" />
                                  <Badge 
                                    variant="outline" 
                                    className={`text-xs ${categoryColors[preset.category]}`}
                                  >
                                    {preset.category}
                                  </Badge>
                                </div>
                                
                                <div className="text-left space-y-1 w-full">
                                  <div className="font-medium text-sm">{preset.name}</div>
                                  <div className="text-xs text-muted-foreground line-clamp-2">
                                    {preset.description}
                                  </div>
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="text-green-600 dark:text-green-400 font-medium">
                                      {preset.estimatedReduction}
                                    </span>
                                    <span className="text-muted-foreground">
                                      {preset.options.quality}%
                                    </span>
                                  </div>
                                </div>
                                
                                {isActive && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"
                                  />
                                )}
                              </Button>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent side="bottom" className="max-w-xs">
                            <div className="space-y-2">
                              <div className="font-medium">{preset.name}</div>
                              <div className="text-sm text-muted-foreground">{preset.useCase}</div>
                              <div className="text-xs">
                                Format: {preset.options.outputFormat.toUpperCase()} • 
                                Quality: {preset.options.quality}%
                                {preset.options.maxWidth && (
                                  <> • Max: {preset.options.maxWidth}×{preset.options.maxHeight}</>
                                )}
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      )
                    })}
                  </div>
                  
                  {/* Custom Settings Button */}
                  <div className="pt-2">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Custom Settings
                      <Badge variant="outline" className="ml-auto">
                        Advanced
                      </Badge>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </TooltipProvider>
  )
}