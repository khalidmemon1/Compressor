"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass border-b sticky top-0 z-50 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative">
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/logo.png"
                alt="Image Compressor Logo"
                width={40}
                height={40}
                className="rounded-lg shadow-sm"
                priority
              />
            </motion.div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
          <div>
            <span className="font-bold text-xl gradient-text">Image Compressor</span>
            <Badge variant="secondary" className="ml-2 text-xs">
              v2.0
            </Badge>
          </div>
        </motion.div>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="hidden sm:flex text-xs">
            100% Private
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative overflow-hidden"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
