import { type FC } from "react"
import { GamesQuery } from "../../../graphql/generated"
import { usePagination } from "../../../hooks/usePagination"
import LinkWrapper from "../Links/LinkWrapper"
import CurrentPageButton from "./atoms/CurrentPageButton"
import PageButton from "./atoms/PageButton"

type PaginationProps = {
  pathname: string
  currentPage: {
    page: number
    itemsPerPage: number
    itemsToSkip: number
  }
  pageMetaData: GamesQuery["gamesConnection"]
}

const Pagination: FC<PaginationProps> = ({ pathname, currentPage, pageMetaData }) => {
  const pagination = usePagination(currentPage, pageMetaData)

  // If there's less than one page, the pagination is an empty component.
  if (pagination.totalPages <= 1) {
    return <></>
  }

  return (
    <div
      className="flex justify-center w-full items-center border-t border-gray-200 
      px-4 py-3 sm:px-6"
    >
      <div className="hidden flex-col gap-5 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Mostrando
            <span className="font-medium">{` ${pagination.itemFrom} `}</span>
            -
            <span className="font-medium">{` ${pagination.itemTo} `}</span>
            de
            <span className="font-medium">{` ${pagination.totalItems} `}</span>
            juegos
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
              <span className="sr-only">Anterior</span>
            </LinkWrapper>

            {pagination.pagesToShow.map((page) => {
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
              <span className="sr-only">Siguiente</span>
            </LinkWrapper>
          </nav>
        </div>
      </div>

      <div className="flex justify-between sm:hidden">
        <LinkWrapper
          className="relative inline-flex items-center rounded-md border border-gray-300
          bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50
          disabled:bg-gray-100 disabled:opacity-70"
          href={pathname}
          isDisabled={pagination.isPreviousDisabled}
          query={{ page: pagination.currentPage - 1 }}
        >
          Anterior
        </LinkWrapper>

        <LinkWrapper
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300
          bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50
          disabled:bg-gray-100 disabled:opacity-70"
          href={pathname}
          isDisabled={pagination.isNextDisabled}
          query={{ page: pagination.currentPage + 1 }}
        >
          Siguiente
        </LinkWrapper>
      </div>
    </div>
  )
}

export default Pagination
