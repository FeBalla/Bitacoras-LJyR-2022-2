import { useEffect, useState } from "react"
import Image from "next/image"

const ImageWithFallback = ({ src, ...props }) => {
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
      className="bg-gray-100"
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
      {...props}
    />
  )
}

export default ImageWithFallback
