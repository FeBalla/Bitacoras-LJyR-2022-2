import { ExternalLink } from "~/components/UIBlocks/ExternalLink"
import { GitHubIcon } from "~/components/UIBlocks/GitHubIcon"

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 flex w-full justify-between bg-gray-50 px-5 py-3
      shadow-md items-center md:px-16 md:py-5"
    >
      <span className="mr-5 text-2xl font-bold text-gray-800 md:text-3xl">
        ludolab
      </span>

      <div className="flex items-center gap-4">
        <div>
          <ExternalLink
            href={process.env.NEXT_PUBLIC_GITHUB_REPO_URL || ""}
            className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
          >
            <GitHubIcon />
            GitHub
          </ExternalLink>
        </div>
      </div>
    </header>
  )
}
