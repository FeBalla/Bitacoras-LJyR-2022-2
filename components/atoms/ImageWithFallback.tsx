import { useEffect, useState } from "react"
import Image from "next/image"

type ImageWithFallbackProps = {
  src: string
  style?: string
  alt?: string
}
const fallbackSrc = "/image_placeholder.jpg"

const ImageWithFallback = ({ src, alt, style }: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(fallbackSrc)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <Image
      src={imgSrc}
      fill
      alt={alt}
      className={`bg-gray-100 object-cover ${style || ""}`}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}

export default ImageWithFallback
