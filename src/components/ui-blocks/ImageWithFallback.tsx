import Image from "next/image"
import { useEffect, useState } from "react"

type ImageWithFallbackProps = {
  src?: string
  style?: string
  alt?: string
}
const IMG_FALLBACK_SRC = "/image_placeholder.jpg"

export function ImageWithFallback({ src, alt, style }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(IMG_FALLBACK_SRC)

  useEffect(() => {
    setImgSrc(src || IMG_FALLBACK_SRC)
  }, [src])

  return (
    <Image
      src={imgSrc}
      fill
      alt={alt || "imagen"}
      className={`bg-gray-100 object-cover ${style || ""}`}
      onError={() => {
        setImgSrc(IMG_FALLBACK_SRC)
      }}
    />
  )
}
