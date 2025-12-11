"use client"

import { useState } from 'react'
import { useCompressorStore } from '@/store/use-compressor-store'
import QualitySlider from './quality-slider'
import FormatSelector from './format-selector'
import CompressionPresets from './compression-presets'
import CompressionInfo from './compression-info'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  RotateCcw, Settings, ChevronDown, Info, 
  Zap, Image, Sliders, Palette, FileImage,
  Monitor, Smartphone, Maximize2
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ControlPanel() {
  const { images, options, setOptions } = useCompressorStore()
  const [showAdvanced, setShowAdvanced] = useState(false)

  if (images.length === 0) return null

  const resetToDefaults = () => {
    setOptions({
      outputFormat: 'webp',
      quality: 80,
      maxWidth: undefined,
      maxHeight: undefined,
      maintainAspectRatio: true,
      stripMetadata: true,
      preserveColorProfile: false,
      progressive: true,
      mozjpeg: false,
      optimizationLevel: 3,
    })
  }

  const quickSizes = [
    { name: 'Mobile', width: 480, height: 320, icon: Smartphone },
    { name: 'Tablet', width: 768, height: 1024, icon: Monitor },
    { name: 'Desktop', width: 1920, height: 1080, icon: Monitor },
    { name: 'Ultra HD', width: 3840, height: 2160, icon: Maximize2 },
  ]

  return (
    <TooltipProvider>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border rounded-xl p-6 space-y-6 shadow-sm"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Compression Settings</h2>
              <p className="text-sm text-muted-foreground">
                {images.length} image{images.length !== 1 ? 's' : ''} selected
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={resetToDefaults}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
        
        <Separator />
        
        {/* Presets */}
        <CompressionPresets />
        
        <Separator />
        
        {/* Main Settings Tabs */}
        <Tabs defaultValue="basic" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic" className="flex items-center gap-2">
              <Sliders className="h-4 w-4" />
              Basic
            </TabsTrigger>
            <TabsTrigger value="dimensions" className="flex items-center gap-2">
              <Maximize2 className="h-4 w-4" />
              Size
            </TabsTrigger>
            <TabsTrigger value="advanced" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Advanced
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <FormatSelector />
                <QualitySlider />
              </div>
              <div className="space-y-4">
                <div className="space-y-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <Palette className="h-4 w-4" />
                          Preserve Color Profile
                        </label>
                        <Switch
                          checked={options.preserveColorProfile}
                          onCheckedChange={(checked) => setOptions({ preserveColorProfile: checked })}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Keep original color information for accurate colors</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <FileImage className="h-4 w-4" />
                          Strip Metadata
                        </label>
                        <Switch
                          checked={options.stripMetadata}
                          onCheckedChange={(checked) => setOptions({ stripMetadata: checked })}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Remove EXIF data to reduce file size</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <Image className="h-4 w-4" />
                          Maintain Aspect Ratio
                        </label>
                        <Switch
                          checked={options.maintainAspectRatio}
                          onCheckedChange={(checked) => setOptions({ maintainAspectRatio: checked })}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Keep original image proportions when resizing</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="dimensions" className="space-y-4">
            {/* Quick Size Presets */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Quick Sizes</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {quickSizes.map((size) => {
                  const Icon = size.icon
                  const isActive = options.maxWidth === size.width && options.maxHeight === size.height
                  
                  return (
                    <Button
                      key={size.name}
                      variant={isActive ? "default" : "outline"}
                      size="sm"
                      className="flex flex-col items-center gap-1 h-auto py-3"
                      onClick={() => setOptions({ maxWidth: size.width, maxHeight: size.height })}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-xs">{size.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {size.width}×{size.height}
                      </span>
                    </Button>
                  )
                })}
              </div>
            </div>
            
            <Separator />
            
            {/* Custom Dimensions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-sm font-medium flex items-center gap-2">
                  Max Width (px)
                  <Badge variant="outline" className="text-xs">
                    {options.maxWidth || 'Auto'}
                  </Badge>
                </label>
                <Slider
                  value={[options.maxWidth || 4096]}
                  onValueChange={([value]) => setOptions({ maxWidth: value === 4096 ? undefined : value })}
                  min={100}
                  max={4096}
                  step={50}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-medium flex items-center gap-2">
                  Max Height (px)
                  <Badge variant="outline" className="text-xs">
                    {options.maxHeight || 'Auto'}
                  </Badge>
                </label>
                <Slider
                  value={[options.maxHeight || 4096]}
                  onValueChange={([value]) => setOptions({ maxHeight: value === 4096 ? undefined : value })}
                  min={100}
                  max={4096}
                  step={50}
                  className="w-full"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="advanced" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Progressive JPEG</label>
                      <Switch
                        checked={options.progressive || false}
                        onCheckedChange={(checked) => setOptions({ progressive: checked })}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Load images progressively for better user experience</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">MozJPEG Encoder</label>
                      <Switch
                        checked={options.mozjpeg || false}
                        onCheckedChange={(checked) => setOptions({ mozjpeg: checked })}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Use Mozilla's advanced JPEG encoder for better compression</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    Optimization Level
                    <Badge variant="outline" className="text-xs">
                      {options.optimizationLevel || 3}
                    </Badge>
                  </label>
                  <Slider
                    value={[options.optimizationLevel || 3]}
                    onValueChange={([value]) => setOptions({ optimizationLevel: value })}
                    min={1}
                    max={9}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Fast</span>
                    <span>Balanced</span>
                    <span>Best</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <Separator />
        
        {/* Compression Info */}
        <CompressionInfo />
      </motion.div>
    </TooltipProvider>
  )
}
