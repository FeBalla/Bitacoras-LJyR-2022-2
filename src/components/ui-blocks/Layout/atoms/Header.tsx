import Image from "next/image"
import { ExternalLink } from "~/components/ui-blocks/ExternalLink"
import { LudolabLogo } from "~/components/ui-blocks/LudoLabLogo"

export function Header() {
  return (
    <header
      className="z-50 flex w-full justify-between bg-gray-50 px-5 py-3 shadow-md items-center
      md:px-16 md:py-5 bg-opacity-70 backdrop-blur-sm"
    >
      <LudolabLogo />

      <div className="flex items-center gap-4">
        <div>
          <ExternalLink
            href={process.env.NEXT_PUBLIC_GITHUB_REPO_URL || ""}
            className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
          >
            <Image src="/github_logo.svg" alt="GitHub Logo" width={24} height={24} />
            GitHub
          </ExternalLink>
        </div>
      </div>
    </header>
  )
}
