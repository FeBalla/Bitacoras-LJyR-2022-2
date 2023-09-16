import type { FC } from "react"
import LinkWrapper from "../../Links/LinkWrapper"

type CurrentPageButtonProps = {
  pageNumber: number
}

const CurrentPageButton: FC<CurrentPageButtonProps> = ({ pageNumber }) => {
  return (
    <LinkWrapper
      aria-current="page"
      className="relative z-10 inline-flex items-center border border-sky-500
      bg-sky-50 px-4 py-2 text-sm font-medium text-sky-600 focus:z-20"
      isDisabled
    >
      {pageNumber}
    </LinkWrapper>
  )
}

export default CurrentPageButton
