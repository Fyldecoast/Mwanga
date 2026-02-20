"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageWithFallbackProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  containerClassName?: string
  overlay?: boolean
  priority?: boolean
  sizes?: string
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  containerClassName,
  overlay = false,
  priority = false,
  sizes,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError || !src) {
    return (
      <div
        className={cn("media-placeholder", containerClassName)}
        role="img"
        aria-label={alt}
      >
        <span className="px-4 text-center text-sm text-mwanga-text-muted">
          {alt || "Image unavailable"}
        </span>
      </div>
    )
  }

  return (
    <div className={cn("media", overlay && "media--overlay", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : (width ?? 800)}
        height={fill ? undefined : (height ?? 600)}
        fill={fill}
        className={cn("object-cover", className)}
        onError={() => setHasError(true)}
        priority={priority}
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
      />
    </div>
  )
}
