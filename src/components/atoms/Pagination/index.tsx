import CurrentPageButton from "./atoms/CurrentPageButton"
import LinkWrapper from "../Links/LinkWrapper"
import PageButton from "./atoms/PageButton"
import { useEffect, type FC, useState } from "react"
import { usePagination } from "../../../hooks/usePagination"
import { GamesQuery, type GameConnection } from "../../../graphql/generated"

// How many buttons in the pagination will be displayed.
const _MAX_PAGE_BUTTONS_DISPLAYED = 5

type PaginationProps = {
  pathname: string
  pageMetaData: GamesQuery["gamesConnection"]
}

const Pagination: FC<PaginationProps> = ({ pathname, pageMetaData }) => {
  const [pagesToShow, setPagesToShow] = useState<number[]>([])
  const pagination = usePagination(pageMetaData)
  const totalPages = Math.ceil(pagination.totalItems / pagination.itemsPerPage)

  const getPagesToShow = (): number[] => {
    const lastButtonPage = Math.min(
      totalPages,
      Math.max(_MAX_PAGE_BUTTONS_DISPLAYED, pagination.currentPage + 2)
    )

    let page = Math.max(1, lastButtonPage - (_MAX_PAGE_BUTTONS_DISPLAYED - 1))
    const pagesToShow = []

    while (page <= lastButtonPage) {
      pagesToShow.push(page)
      page += 1
    }

    return pagesToShow
  }

  useEffect(() => {
    const newPagesToShow = getPagesToShow()
    setPagesToShow(newPagesToShow)
  }, [pageMetaData])


  // If there's less than one page, the pagination is an empty component.
  if (totalPages <= 1) {
    return <></>
  }

  return (
    <div
      className="flex w-full items-center justify-between border-t border-gray-200 
      px-4 py-3 sm:px-6"
    >
      <div className="flex flex-1 justify-between sm:hidden">
        <LinkWrapper
          className="relative inline-flex items-center rounded-md border border-gray-300
          bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50
          disabled:bg-gray-100 disabled:opacity-70"
          href={pathname}
          isDisabled={pagination.isPreviousDisabled}
          query={{ page: pagination.currentPage - 1 }}
        >
          Previous
        </LinkWrapper>

        <LinkWrapper
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300
          bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50
          disabled:bg-gray-100 disabled:opacity-70"
          href={pathname}
          isDisabled={pagination.isNextDisabled}
          query={{ page: pagination.currentPage + 1 }}
        >
          Next
        </LinkWrapper>
      </div>

      <div className="hidden gap-5 sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium">{` ${pagination.itemFrom} `}</span>
            to
            <span className="font-medium">{` ${pagination.itemTo} `}</span>
            of
            <span className="font-medium">{` ${pagination.totalItems} `}</span>
            results
          </p>
        </div>

        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            <LinkWrapper
              className="relative inline-flex items-center rounded-l-md border border-gray-300
              bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20
              disabled:bg-gray-100 disabled:opacity-70"
              href={pathname}
              isDisabled={pagination.isPreviousDisabled}
              query={{ page: pagination.currentPage - 1 }}
            >
              <span className="sr-only">Previous</span>
            </LinkWrapper>

            {pagesToShow.map((page) => {
              if (page === pagination.currentPage) {
                return <CurrentPageButton key={page} pageNumber={page} />
              }
              return <PageButton href={pathname} key={page} pageNumber={page} />
            })}

            <LinkWrapper
              className="relative inline-flex items-center rounded-r-md border border-gray-300
              bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20
              disabled:bg-gray-100 disabled:opacity-70"
              href={pathname}
              isDisabled={pagination.isNextDisabled}
              query={{ page: pagination.currentPage + 1 }}
            >
              <span className="sr-only">Next</span>
            </LinkWrapper>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination