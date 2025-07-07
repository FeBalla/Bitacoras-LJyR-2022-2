import Image from "next/image"

export function LudolabLogo() {
  return (
    <div className="flex text-2xl font-bold md:text-3xl">
      <Image src="/app_logo.png" alt="Ludolab Logo" width={32} height={32} className="mr-2" />
      <span className="text-gray-800">ludo</span>
      <span className="text-cyan-600">lab</span>
    </div>
  )
}
