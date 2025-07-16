import Image from "next/image"
import { useEffect, useState } from "react"

const IMG_FALLBACK_SRC = "/image_placeholder.jpg"

type ImageWithFallbackProps = {
  src?: string
  alt?: string
  className?: string
}

export function ImageWithFallback({ src, alt, className }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(IMG_FALLBACK_SRC)

  useEffect(() => {
    setImgSrc(src || IMG_FALLBACK_SRC)
  }, [src])

  return (
    <Image
      src={imgSrc}
      fill
      alt={alt || "imagen"}
      className={`bg-gray-100 object-cover ${className || ""}`}
      onError={() => {
        setImgSrc(IMG_FALLBACK_SRC)
      }}
    />
  )
}
