import { ExternalLink } from "~/components/ui-blocks/ExternalLink"

export function Footer() {
  const GITHUB_BASE_URL = "https://github.com"

  return (
    <footer
      className="flex gap-1 bg-gray-50 py-5 px-2 justify-center items-center text-xs
      md:text-sm bg-opacity-40 backdrop-blur-sm"
    >
      <span>👨‍💻 Desarrollado por</span>

      <ExternalLink
        href={`${GITHUB_BASE_URL}/${process.env.NEXT_PUBLIC_GITHUB_USER}`}
        className="text-sky-600 hover:text-sky-700"
      >
        @{process.env.NEXT_PUBLIC_GITHUB_USER}
      </ExternalLink>
    </footer>
  )
}
