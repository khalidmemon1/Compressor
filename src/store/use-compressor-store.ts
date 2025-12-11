import { create } from 'zustand'
import type { ImageFile, CompressionOptions } from '@/types/compression.types'

interface CompressorState {
  images: ImageFile[]
  selectedImage: ImageFile | null
  options: CompressionOptions
  isProcessing: boolean
  setImages: (images: ImageFile[]) => void
  addImage: (image: ImageFile) => void
  removeImage: (id: string) => void
  setSelectedImage: (image: ImageFile | null) => void
  setOptions: (options: Partial<CompressionOptions>) => void
  setIsProcessing: (isProcessing: boolean) => void
}

export const useCompressorStore = create<CompressorState>((set) => ({
  images: [],
  selectedImage: null,
  options: {
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
  },
  isProcessing: false,
  setImages: (images) => set({ images }),
  addImage: (image) => set((state) => ({ images: [...state.images, image] })),
  removeImage: (id) => set((state) => ({ images: state.images.filter((img) => img.id !== id) })),
  setSelectedImage: (image) => set({ selectedImage: image }),
  setOptions: (options) => set((state) => ({ options: { ...state.options, ...options } })),
  setIsProcessing: (isProcessing) => set({ isProcessing }),
}))
