"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Layers, FileImage, Sparkles, Github } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

const navLinks = [
  { href: "/compress", label: "Compress", icon: Sparkles },
  { href: "/batch-compress", label: "Batch Compress", icon: Layers },
  { href: "/webp-converter", label: "WebP Converter", icon: FileImage },
]

export default function Header() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass border-b sticky top-0 z-50 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative">
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/logo.png"
                alt="Image Compressor Logo"
                width={36}
                height={36}
                className="rounded-lg shadow-sm"
                priority
              />
            </motion.div>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
          </div>
          <div className="flex items-center">
            <span className="font-bold text-lg md:text-xl gradient-text">Image Compressor</span>
            <Badge variant="secondary" className="ml-2 text-[10px] py-0 px-1.5 hidden sm:inline-flex">
              v2.0
            </Badge>
          </div>
        </Link>

        {/* Navigation Tools */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href
            return (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  size="sm"
                  className="text-xs font-medium gap-1.5"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {link.label}
                </Button>
              </Link>
            )
          })}
        </nav>
        
        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="hidden lg:flex text-xs">
            100% Private
          </Badge>

          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-9 w-9"
          >
            <a
              href="https://github.com/khalidmemon1/Compressor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9 relative overflow-hidden"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
