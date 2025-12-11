"use client"

import { Info, Zap, FileImage, Minimize2 } from 'lucide-react'
import { useCompressorStore } from '@/store/use-compressor-store'

export default function CompressionInfo() {
  const { options } = useCompressorStore()
  
  const getCompressionTips = () => {
    const tips = []
    
    if (options.outputFormat === 'webp') {
      tips.push('WebP format provides excellent compression with good quality')
    }
    
    if (options.quality < 70) {
      tips.push('Lower quality settings provide better compression but may reduce image quality')
    }
    
    if (options.maxWidth || options.maxHeight) {
      tips.push('Resizing images significantly reduces file size')
    } else {
      tips.push('Consider setting max dimensions for better compression')
    }
    
    if (options.stripMetadata) {
      tips.push('Removing metadata helps reduce file size')
    }
    
    return tips
  }

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
        <div className="space-y-2">
          <h3 className="font-medium text-blue-900 dark:text-blue-100">
            Compression Tips
          </h3>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            {getCompressionTips().map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                {tip}
              </li>
            ))}
          </ul>
          
          <div className="grid grid-cols-3 gap-4 mt-4 pt-3 border-t border-blue-200 dark:border-blue-700">
            <div className="text-center">
              <FileImage className="h-5 w-5 mx-auto text-blue-600 dark:text-blue-400 mb-1" />
              <div className="text-xs text-blue-700 dark:text-blue-300">
                Format: {options.outputFormat.toUpperCase()}
              </div>
            </div>
            <div className="text-center">
              <Zap className="h-5 w-5 mx-auto text-blue-600 dark:text-blue-400 mb-1" />
              <div className="text-xs text-blue-700 dark:text-blue-300">
                Quality: {options.quality}%
              </div>
            </div>
            <div className="text-center">
              <Minimize2 className="h-5 w-5 mx-auto text-blue-600 dark:text-blue-400 mb-1" />
              <div className="text-xs text-blue-700 dark:text-blue-300">
                Max: {options.maxWidth || options.maxHeight ? `${options.maxWidth || '∞'}×${options.maxHeight || '∞'}` : 'Original'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}