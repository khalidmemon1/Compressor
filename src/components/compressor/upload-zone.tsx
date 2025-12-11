"use client"

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, FileImage, AlertCircle } from 'lucide-react'
import { useCompressorStore } from '@/store/use-compressor-store'
import { toast } from 'sonner'

const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB
const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif', 'image/bmp']

export default function UploadZone() {
  const addImage = useCompressorStore((state) => state.addImage)

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    // Handle rejected files
    rejectedFiles.forEach(({ file, errors }) => {
      errors.forEach((error: any) => {
        if (error.code === 'file-too-large') {
          toast.error(`${file.name} is too large. Max size is 50MB.`)
        } else if (error.code === 'file-invalid-type') {
          toast.error(`${file.name} is not a supported image format.`)
        } else {
          toast.error(`${file.name}: ${error.message}`)
        }
      })
    })

    // Process accepted files
    acceptedFiles.forEach((file) => {
      // Additional validation
      if (!SUPPORTED_FORMATS.includes(file.type)) {
        toast.error(`${file.name} is not a supported format`)
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          // Validate image dimensions
          if (img.width < 1 || img.height < 1) {
            toast.error(`${file.name} has invalid dimensions`)
            return
          }

          addImage({
            id: crypto.randomUUID(),
            file,
            preview: e.target?.result as string,
            originalSize: file.size,
            format: file.type,
            width: img.width,
            height: img.height,
          })
          toast.success(`${file.name} added successfully`)
          
          // Auto-scroll to preview section
          setTimeout(() => {
            document.getElementById('preview-section')?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }, 500)
        }
        img.onerror = () => {
          toast.error(`Failed to load ${file.name}`)
        }
        img.src = e.target?.result as string
      }
      reader.onerror = () => {
        toast.error(`Failed to read ${file.name}`)
      }
      reader.readAsDataURL(file)
    })
  }, [addImage])

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: { 
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
      'image/webp': ['.webp'],
      'image/gif': ['.gif'],
      'image/bmp': ['.bmp']
    },
    multiple: true,
    maxSize: MAX_FILE_SIZE,
  })

  const getBorderColor = () => {
    if (isDragReject) return 'border-destructive bg-destructive/5'
    if (isDragActive) return 'border-primary bg-primary/5'
    return 'border-border hover:border-primary/50'
  }

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all duration-200 ${getBorderColor()}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center space-y-4">
        {isDragReject ? (
          <AlertCircle className="h-12 w-12 text-destructive" />
        ) : isDragActive ? (
          <FileImage className="h-12 w-12 text-primary animate-pulse" />
        ) : (
          <Upload className="h-12 w-12 text-muted-foreground" />
        )}
        
        <div>
          <p className="text-lg font-medium mb-2">
            {isDragReject
              ? 'Invalid file type'
              : isDragActive
              ? 'Drop images here'
              : 'Drag & drop images here'
            }
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            or click to browse
          </p>
          <p className="text-xs text-muted-foreground">
            Supports JPEG, PNG, WebP, GIF, BMP • Max 50MB per file
          </p>
        </div>
      </div>
    </div>
  )
}
