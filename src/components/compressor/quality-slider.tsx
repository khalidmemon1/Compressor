"use client"

import { useCompressorStore } from '@/store/use-compressor-store'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'

export default function QualitySlider() {
  const { options, setOptions } = useCompressorStore()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Quality: {options.quality}%</label>
      </div>
      <Slider
        value={[options.quality]}
        onValueChange={([value]) => setOptions({ quality: value })}
        min={1}
        max={100}
        step={1}
      />
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => setOptions({ quality: 60 })}>
          Low
        </Button>
        <Button variant="outline" size="sm" onClick={() => setOptions({ quality: 75 })}>
          Medium
        </Button>
        <Button variant="outline" size="sm" onClick={() => setOptions({ quality: 85 })}>
          High
        </Button>
      </div>
    </div>
  )
}
