import { motion } from "framer-motion"

interface LogoProps {
  className?: string
  size?: number
}

export default function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <motion.div 
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Background Circle */}
        <motion.circle
          cx="16"
          cy="16"
          r="15"
          fill="url(#gradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        />
        
        {/* Image Icon */}
        <motion.g
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Image Frame */}
          <rect
            x="8"
            y="10"
            width="16"
            height="12"
            rx="2"
            fill="white"
            fillOpacity="0.9"
          />
          
          {/* Mountain/Image Content */}
          <path
            d="M10 18L13 15L15 17L19 13L22 16V20C22 20.5523 21.5523 21 21 21H11C10.4477 21 10 20.5523 10 20V18Z"
            fill="url(#imageGradient)"
          />
          
          {/* Sun/Circle */}
          <circle
            cx="19"
            cy="13"
            r="1.5"
            fill="#FCD34D"
          />
        </motion.g>
        
        {/* Compression Arrows */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {/* Left Arrow */}
          <path
            d="M6 16L4 16M4 16L5 15M4 16L5 17"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Right Arrow */}
          <path
            d="M26 16L28 16M28 16L27 15M28 16L27 17"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          
          <linearGradient id="imageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Pulse Effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}