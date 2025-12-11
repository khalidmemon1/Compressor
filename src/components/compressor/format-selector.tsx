"use client"

import { useCompressorStore } from '@/store/use-compressor-store'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { ImageFormat } from '@/types/compression.types'

export default function FormatSelector() {
  const { options, setOptions } = useCompressorStore()

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Output Format</label>
      <Tabs
        value={options.outputFormat}
        onValueChange={(value) => setOptions({ outputFormat: value as ImageFormat })}
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="jpeg">JPEG</TabsTrigger>
          <TabsTrigger value="png">PNG</TabsTrigger>
          <TabsTrigger value="webp">WebP</TabsTrigger>
          <TabsTrigger value="same">Same</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
