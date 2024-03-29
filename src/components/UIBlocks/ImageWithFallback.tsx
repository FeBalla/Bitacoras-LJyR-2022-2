import Image from "next/image"
import { useEffect, useState } from "react"

type ImageWithFallbackProps = {
  src?: string
  style?: string
  alt?: string
}
const fallbackSrc = "/image_placeholder.jpg"

const ImageWithFallback = ({ src, alt, style }: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(fallbackSrc)

  useEffect(() => {
    setImgSrc(src || fallbackSrc)
  }, [src])

  return (
    <Image
      src={imgSrc}
      fill
      alt={alt || "imagen"}
      className={`bg-gray-100 object-cover ${style || ""}`}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}

export default ImageWithFallback
