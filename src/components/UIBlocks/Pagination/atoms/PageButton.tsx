import LinkWrapper from "~/components/UIBlocks/LinkWrapper"

type PageButtonProps = {
  pageNumber: number
  href: string
  isDisabled?: boolean
}

const PageButton = ({ pageNumber, href, isDisabled = false }: PageButtonProps) => {
  return (
    <LinkWrapper
      className="relative inline-flex items-center border border-gray-300 bg-white 
      px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
      href={href}
      isDisabled={isDisabled}
      query={{ page: pageNumber }}
    >
      {pageNumber}
    </LinkWrapper>
  )
}

export default PageButton
