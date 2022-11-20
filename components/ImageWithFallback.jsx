import { useEffect, useState } from "react"
import Image from "next/image"

export default function ImageWithFallback({ src }) {
  const fallbackSrc = "/image_placeholder.jpg"
  const [imgSrc, setImgSrc] = useState(fallbackSrc)

  useEffect(() => {
    if (src) {
      setImgSrc(src)
    } else {
      setImgSrc(fallbackSrc)
    }
  }, [src])

  return (
    <Image
      src={imgSrc}
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      alt="Imagen del juego"
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}
