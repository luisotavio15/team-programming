"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface OrbitalLoaderProps {
  message?: string
  messagePlacement?: "top" | "bottom" | "left" | "right"
  className?: string
}

export function OrbitalLoader({
  className,
  message,
  messagePlacement = "bottom",
  ...props
}: React.ComponentProps<"div"> & OrbitalLoaderProps) {
  const flexDirection = {
    bottom: "flex-col",
    top: "flex-col-reverse",
    right: "flex-row",
    left: "flex-row-reverse",
  }[messagePlacement]

  return (
    <div className={cn("flex gap-4 items-center justify-center", flexDirection)}>
      <div className={cn("relative w-16 h-16", className)} {...props}>
        <motion.div
          className="absolute inset-0 border-2 border-transparent border-t-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-2 border-2 border-transparent border-t-primary rounded-full"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-4 border-2 border-transparent border-t-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      {message && <div className="text-foreground font-medium">{message}</div>}
    </div>
  )
}
