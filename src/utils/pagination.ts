import { GamesQuery } from "../graphql/generated"

type GameConnection = GamesQuery["gamesConnection"]


const _getPagesToShow = (currentPage: number, totalPages: number): number[] => {
  // How many buttons in the pagination will be displayed.
  const MAX_PAGE_BUTTONS_DISPLAYED = 8
  const lastButtonPage = Math.min(
    totalPages,
    Math.max(MAX_PAGE_BUTTONS_DISPLAYED, currentPage + 2)
  )

  let page = Math.max(1, lastButtonPage - (MAX_PAGE_BUTTONS_DISPLAYED - 1))
  const pagesToShow = []

  while (page <= lastButtonPage) {
    pagesToShow.push(page)
    page += 1
  }
  return pagesToShow
}

type UsePaginationState = {
  itemFrom: number
  itemTo: number
  totalItems: number
  isPreviousDisabled: boolean
  isNextDisabled: boolean
  currentPage: number
  itemsPerPage: number
  pagesToShow: number[]
  totalPages: number
}

const getPaginationConfig = (
  currentPage: any,
  pageMetaData: GameConnection,
): UsePaginationState => {
  const gamesPerPage = currentPage.itemsPerPage || 6
  const totalItems = pageMetaData.aggregate.count
  const totalPages = Math.ceil(totalItems / gamesPerPage)
  const pagesToShow = _getPagesToShow(currentPage.page, totalPages)

  return {
    itemFrom: currentPage.itemsToSkip,
    itemTo: Math.min(currentPage.itemsToSkip + gamesPerPage, totalItems),
    itemsPerPage: gamesPerPage,
    totalItems: totalItems,
    isPreviousDisabled: currentPage.page === 1,
    isNextDisabled: currentPage.page === totalPages,
    currentPage: currentPage.page,
    pagesToShow: pagesToShow,
    totalPages: totalPages,
  }
}

export { getPaginationConfig }
