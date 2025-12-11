export type ImageFormat = 'jpeg' | 'png' | 'webp' | 'avif' | 'same'

export interface CompressionOptions {
  outputFormat: ImageFormat
  quality: number
  maxWidth?: number
  maxHeight?: number
  maintainAspectRatio: boolean
  stripMetadata: boolean
  preserveColorProfile: boolean
  progressive?: boolean
  mozjpeg?: boolean
  optimizationLevel?: number
}

export interface CompressionPreset {
  id: string
  name: string
  description: string
  icon: string
  category: 'web' | 'social' | 'print' | 'archive'
  options: CompressionOptions
  estimatedReduction: string
  useCase: string
}

export interface ImageFile {
  id: string
  file: File
  preview: string
  originalSize: number
  compressedSize?: number
  format: string
  width: number
  height: number
}

export interface CompressionResult {
  blob: Blob
  size: number
  format: string
  compressionRatio: number
}
