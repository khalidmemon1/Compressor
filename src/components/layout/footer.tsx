"use client"

import Link from 'next/link'
import { Heart, Shield, Zap, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🖼️</span>
              <span className="font-bold text-xl">Compressor</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Free, fast, and secure client-side image compression tool. 
              Reduce JPEG, PNG, and WebP files directly in your browser with complete privacy.
            </p>
          </div>
          
          {/* Tools / Pages */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Tools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/compress" className="hover:text-primary transition-colors">
                  Single & Batch Compressor
                </Link>
              </li>
              <li>
                <Link href="/batch-compress" className="hover:text-primary transition-colors">
                  Batch Image Compressor
                </Link>
              </li>
              <li>
                <Link href="/webp-converter" className="hover:text-primary transition-colors">
                  WebP Image Converter
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/khalidmemon1/Compressor" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  Open Source (GitHub)
                </a>
              </li>
            </ul>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                100% Private (No uploads)
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-500" />
                Fast Web Worker processing
              </li>
              <li className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                ZIP archive bulk download
              </li>
            </ul>
          </div>
          
          {/* Supported Formats */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Supported Formats</h3>
            <div className="flex flex-wrap gap-2">
              {['JPEG', 'PNG', 'WebP', 'GIF', 'BMP'].map((format) => (
                <span 
                  key={format}
                  className="px-2.5 py-1 bg-muted rounded-md text-xs font-medium"
                >
                  {format}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground pt-1">
              Convert any supported format to highly optimized WebP, PNG, or JPEG.
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>
            © {new Date().getFullYear()} Compressor • Built for privacy-conscious web creators
          </p>
          <p>
            Developed with{' '}
            <a 
              href="https://nuvolin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline font-medium"
            >
              Nuvolin.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
