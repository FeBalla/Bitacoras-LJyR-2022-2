import { LinkWrapper } from "~/components/UIBlocks/LinkWrapper"

type PageButtonProps = {
  pageNumber: number
  href: string
  isDisabled?: boolean
}

export function PageButton({ pageNumber, href, isDisabled = false }: PageButtonProps) {
  return (
    <LinkWrapper
      className="border-gray-30 relative inline-flex items-center border
      px-4 py-2 text-sm text-neutral-500 hover:bg-gray-50 focus:z-20"
      href={href}
      isDisabled={isDisabled}
      query={{ page: pageNumber }}
    >
      {pageNumber}
    </LinkWrapper>
  )
}
