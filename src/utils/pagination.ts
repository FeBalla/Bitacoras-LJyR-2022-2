import type { PageInfo, Aggregate } from "../graphql/generated"

type ItemConnection = {
  pageInfo: PageInfo
  aggregate: Aggregate
}

type PaginationConfig = {
  currentPage: number
  itemFrom: number
  itemTo: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
  isPreviousDisabled: boolean
  isNextDisabled: boolean
  pagesToShow: number[]
}

/**
 * Obtains the pages that should be displayed in the pagination, considering the
 * current page, the total pages and taking into account that the current page
 * should be relatively centered between the previous and following pages.
 * @param currentPage The current page number.
 * @param totalPages The total number of pages.
 * @returns An array with the pages that should be displayed in order.
 */
const _getPagesToShow = (currentPage: number, totalPages: number): number[] => {
  // How many buttons in the pagination will be displayed.
  const MAX_PAGE_BUTTONS_DISPLAYED = 8
  // The last button must not pass the upper limit.
  const lastButtonPage = Math.min(totalPages, Math.max(MAX_PAGE_BUTTONS_DISPLAYED, currentPage + 2))
  let page = Math.max(1, lastButtonPage - (MAX_PAGE_BUTTONS_DISPLAYED - 1))
  const pagesToShow = []

  while (page <= lastButtonPage) {
    pagesToShow.push(page)
    page += 1
  }
  return pagesToShow
}

/**
 * Gets a complete configuration for the pagination component based on the
 * current page and the results of the query.
 * @param currentPage An object with the current page configuration.
 * @param gameConnection An object with the page meta data based on the
 * query results (i.e. the total number of items).
 * @returns An object with the complete configuration for the component.
 */
const getPaginationConfig = (
  currentPage: any,
  gameConnection: ItemConnection
): PaginationConfig => {
  const gamesPerPage = currentPage.itemsPerPage || 6
  const totalItems = gameConnection.aggregate.count
  const totalPages = Math.ceil(totalItems / gamesPerPage)
  const pagesToShow = _getPagesToShow(currentPage.page, totalPages)

  return {
    currentPage: currentPage.page,
    itemFrom: currentPage.itemsToSkip,
    itemTo: Math.min(currentPage.itemsToSkip + gamesPerPage, totalItems),
    itemsPerPage: gamesPerPage,
    totalItems: totalItems,
    totalPages: totalPages,
    isPreviousDisabled: currentPage.page === 1,
    isNextDisabled: currentPage.page === totalPages,
    pagesToShow: pagesToShow,
  }
}

export { getPaginationConfig }
