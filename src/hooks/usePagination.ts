import router from "next/router"
import { useEffect, useState } from "react"
import { GamesQuery } from "../graphql/generated"

type GameConnection = GamesQuery["gamesConnection"]

// How many buttons in the pagination will be displayed.
const _MAX_PAGE_BUTTONS_DISPLAYED = 5

const getPagesToShow = (currentPage: number, totalPages: number): number[] => {
  const lastButtonPage = Math.min(
    totalPages,
    Math.max(_MAX_PAGE_BUTTONS_DISPLAYED, currentPage + 2)
  )

  let page = Math.max(1, lastButtonPage - (_MAX_PAGE_BUTTONS_DISPLAYED - 1))
  const pagesToShow = []

  while (page <= lastButtonPage) {
    pagesToShow.push(page)
    page += 1
  }
  console.log(">>> ", pagesToShow)
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
  gamesToSkip: number
  pagesToShow: number[]
  totalPages: number
}

const usePagination = (pageMetaData: GameConnection): UsePaginationState => {
  const gamesPerPage = Number(process.env.NEXT_PUBLIC_GAMES_PER_PAGE) || 6
  const [currentPage, setCurrentPage] = useState(1)
  const [currentGamesToSkip, setCurrentGamesToSkip] = useState(0)
  const [pagesToShow, setPagesToShow] = useState<number[]>([])

  const totalItems = pageMetaData.aggregate.count
  const totalPages = Math.ceil(totalItems / gamesPerPage)

  useEffect(() => {
    const { page: queryPage } = router.query
    const page = Number(queryPage)

    if (isNaN(page)) {
      setCurrentPage(1)
    } else {
      setCurrentPage(page)
    }
    const gamesToSkip = gamesPerPage * (currentPage - 1)
    const pagesToShow = getPagesToShow(currentPage, totalPages)
    setCurrentGamesToSkip(gamesToSkip)
    setPagesToShow(pagesToShow)
  }, [router, currentPage, gamesPerPage, pageMetaData])

  return {
    itemFrom: (currentPage - 1) * gamesPerPage + 1,
    itemTo: Math.min(currentPage * gamesPerPage, totalItems),
    totalItems: totalItems,
    isPreviousDisabled: currentPage === 1,
    isNextDisabled: false, //currentPage === pageMetaData.totalPages,
    currentPage: currentPage,
    gamesToSkip: currentGamesToSkip,
    itemsPerPage: gamesPerPage,
    pagesToShow: pagesToShow,
    totalPages: totalPages,
  }
}

export { usePagination }
