import { LinkWrapper } from "~/components/ui-blocks/LinkWrapper"

type CurrentPageButtonProps = {
  pageNumber: number
}

export function CurrentPageButton({ pageNumber }: CurrentPageButtonProps) {
  return (
    <LinkWrapper
      aria-current="page"
      className="relative z-10 inline-flex items-center border border-blue-500
      bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 focus:z-20"
      isDisabled
    >
      {pageNumber}
    </LinkWrapper>
  )
}
