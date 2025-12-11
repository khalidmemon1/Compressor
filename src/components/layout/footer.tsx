"use client"

import { Heart, Shield, Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🖼️</span>
              <span className="font-bold text-xl">Compressor</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Free, fast, and secure image compression tool. 
              Process images directly in your browser with complete privacy.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                100% Private - No uploads
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Fast batch processing
              </li>
              <li className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Multiple formats supported
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold">Supported Formats</h3>
            <div className="flex flex-wrap gap-2">
              {['JPEG', 'PNG', 'WebP', 'GIF', 'BMP'].map((format) => (
                <span 
                  key={format}
                  className="px-2 py-1 bg-muted rounded text-xs font-medium"
                >
                  {format}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            Made with <Heart className="inline h-4 w-4 text-red-500" /> for privacy-conscious users
          </p>
          <p className="mt-2">
            Developed with <a href="https://nuvolin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Nuvolin.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}