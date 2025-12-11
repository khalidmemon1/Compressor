import imageCompression from 'browser-image-compression'
import type { CompressionOptions, CompressionResult } from '@/types/compression.types'

export async function compressImage(
  file: File,
  options: CompressionOptions
): Promise<CompressionResult> {
  const outputFormat = options.outputFormat === 'same' 
    ? file.type.split('/')[1] 
    : options.outputFormat

  // Calculate target file size based on original size and quality
  const originalSizeMB = file.size / (1024 * 1024)
  let maxSizeMB = originalSizeMB * (options.quality / 100)
  
  // Ensure we don't set maxSizeMB too high
  if (maxSizeMB > originalSizeMB * 0.9) {
    maxSizeMB = originalSizeMB * 0.8 // Force some compression
  }
  
  // Minimum compression for very small files
  if (maxSizeMB < 0.1) maxSizeMB = 0.1

  const compressionOptions: any = {
    maxSizeMB,
    maxWidthOrHeight: options.maxWidth || options.maxHeight || 1920, // Default to web-friendly size
    useWebWorker: true,
    fileType: `image/${outputFormat}`,
    initialQuality: Math.min(options.quality / 100, 0.9), // Cap at 90%
  }

  // Handle specific width/height constraints
  if (options.maxWidth) compressionOptions.maxWidth = options.maxWidth
  if (options.maxHeight) compressionOptions.maxHeight = options.maxHeight
  
  // For WebP, use more aggressive compression
  if (outputFormat === 'webp') {
    compressionOptions.initialQuality = Math.min(options.quality / 100, 0.85)
    compressionOptions.maxSizeMB = maxSizeMB * 0.7 // More aggressive for WebP
  }
  
  // For JPEG, optimize quality
  if (outputFormat === 'jpeg') {
    compressionOptions.initialQuality = Math.min(options.quality / 100, 0.9)
  }
  
  try {
    const compressedFile = await imageCompression(file, compressionOptions)
    
    // If compressed file is larger than original, try more aggressive compression
    if (compressedFile.size >= file.size * 0.95) {
      const aggressiveOptions = {
        ...compressionOptions,
        maxSizeMB: originalSizeMB * 0.5,
        initialQuality: Math.min(options.quality / 100 * 0.8, 0.7),
        maxWidthOrHeight: Math.min(compressionOptions.maxWidthOrHeight, 1600)
      }
      
      const recompressed = await imageCompression(file, aggressiveOptions)
      
      // Use the smaller result
      const finalFile = recompressed.size < compressedFile.size ? recompressed : compressedFile
      
      return {
        blob: finalFile,
        size: finalFile.size,
        format: outputFormat,
        compressionRatio: ((file.size - finalFile.size) / file.size) * 100,
      }
    }
    
    return {
      blob: compressedFile,
      size: compressedFile.size,
      format: outputFormat,
      compressionRatio: ((file.size - compressedFile.size) / file.size) * 100,
    }
  } catch (error) {
    console.error('Compression failed:', error)
    throw new Error(`Failed to compress image: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}
