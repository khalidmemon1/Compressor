"use client"

import { useCompressorStore } from '@/store/use-compressor-store'
import { Button } from '@/components/ui/button'
import { Download, X, Archive, Loader2 } from 'lucide-react'
import { compressImage } from '@/core/compression/compressor'
import { toast } from 'sonner'
import { useState } from 'react'
import JSZip from 'jszip'

export default function PreviewArea() {
  const { images, options, removeImage, setIsProcessing, isProcessing } = useCompressorStore()
  const [compressedImages, setCompressedImages] = useState<Map<string, { blob: Blob; size: number }>>(new Map())
  const [processingIds, setProcessingIds] = useState<Set<string>>(new Set())

  if (images.length === 0) return null

  const handleCompress = async (imageFile: typeof images[0]) => {
    try {
      setProcessingIds(prev => new Set(prev).add(imageFile.id))
      const result = await compressImage(imageFile.file, options)
      setCompressedImages(prev => new Map(prev).set(imageFile.id, { blob: result.blob, size: result.size }))
      toast.success(`${imageFile.file.name} compressed successfully`)
    } catch (error) {
      toast.error(`Failed to compress ${imageFile.file.name}`)
      console.error('Compression error:', error)
    } finally {
      setProcessingIds(prev => {
        const newSet = new Set(prev)
        newSet.delete(imageFile.id)
        return newSet
      })
    }
  }

  const handleCompressAll = async () => {
    setIsProcessing(true)
    const promises = images.map(img => handleCompress(img))
    await Promise.allSettled(promises)
    setIsProcessing(false)
    toast.success('Batch compression completed')
  }

  const handleDownload = (imageFile: typeof images[0]) => {
    const compressed = compressedImages.get(imageFile.id)
    if (!compressed) return

    const url = URL.createObjectURL(compressed.blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `compressed-${imageFile.file.name.split('.')[0]}.${options.outputFormat === 'same' ? imageFile.file.name.split('.').pop() : options.outputFormat}`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleDownloadAll = async () => {
    // For now, download files individually
    // TODO: Implement ZIP functionality with a client-side compatible library
    let downloadCount = 0
    
    compressedImages.forEach((compressed, id) => {
      const image = images.find(img => img.id === id)
      if (image) {
        setTimeout(() => {
          const url = URL.createObjectURL(compressed.blob)
          const a = document.createElement('a')
          a.href = url
          a.download = `compressed-${image.file.name.split('.')[0]}.${options.outputFormat === 'same' ? image.file.name.split('.').pop() : options.outputFormat}`
          a.click()
          URL.revokeObjectURL(url)
        }, downloadCount * 100) // Stagger downloads
        downloadCount++
      }
    })
    
    if (downloadCount === 0) {
      toast.error('No compressed images to download')
      return
    }
    
    toast.success(`Downloading ${downloadCount} compressed images`)
  }

  const compressedCount = compressedImages.size
  const totalSavings = Array.from(compressedImages.entries()).reduce((total, [id, compressed]) => {
    const image = images.find(img => img.id === id)
    return image ? total + (image.originalSize - compressed.size) : total
  }, 0)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Images ({images.length})</h2>
        <div className="flex gap-2">
          {images.length > 1 && (
            <Button 
              onClick={handleCompressAll} 
              disabled={isProcessing}
              variant="outline"
            >
              {isProcessing ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : null}
              Compress All
            </Button>
          )}
          {compressedCount > 1 && (
            <Button onClick={handleDownloadAll} variant="outline">
              <Archive className="h-4 w-4 mr-2" />
              Download All
            </Button>
          )}
        </div>
      </div>
      
      {compressedCount > 0 && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <p className="text-sm text-green-700 dark:text-green-300">
            {compressedCount} of {images.length} images compressed • 
            Total saved: {(totalSavings / 1024).toFixed(1)} KB
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img) => {
          const compressed = compressedImages.get(img.id)
          const isProcessingThis = processingIds.has(img.id)
          return (
            <div key={img.id} className="border rounded-lg p-4 space-y-3">
              <div className="relative aspect-video bg-muted rounded overflow-hidden">
                <img src={img.preview} alt={`Preview of ${img.file.name}`} className="w-full h-full object-contain" />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => removeImage(img.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-sm space-y-1">
                <p className="font-medium truncate" title={img.file.name}>{img.file.name}</p>
                <p className="text-muted-foreground">
                  {(img.originalSize / 1024).toFixed(1)} KB • {img.width}×{img.height}
                </p>
                {compressed && (
                  <p className="text-green-600 dark:text-green-400">
                    Compressed: {(compressed.size / 1024).toFixed(1)} KB
                    ({Math.round((1 - compressed.size / img.originalSize) * 100)}% saved)
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <Button 
                  onClick={() => handleCompress(img)} 
                  className="flex-1"
                  disabled={isProcessingThis}
                >
                  {isProcessingThis ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : null}
                  {compressed ? 'Recompress' : 'Compress'}
                </Button>
                {compressed && (
                  <Button variant="outline" size="icon" onClick={() => handleDownload(img)}>
                    <Download className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
