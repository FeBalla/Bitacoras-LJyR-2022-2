import { useEffect, useState } from "react"
import { GamesQuery } from "../graphql/generated"
import router from "next/router"

type GameConnection = GamesQuery["gamesConnection"]

type UsePaginationState = {
  itemFrom: number
  itemTo: number
  totalItems: number
  isPreviousDisabled: boolean
  isNextDisabled: boolean
  currentPage: number
  itemsPerPage: number
  gamesToSkip: number
}

const usePagination = (pageMetaData: GameConnection): UsePaginationState => {
  const gamesPerPage = Number(process.env.NEXT_PUBLIC_GAMES_PER_PAGE) || 6
  const [currentPage, setCurrentPage] = useState(1)
  const [currentGamesToSkip, setCurrentGamesToSkip] = useState(0)

  useEffect(() => {
    const { page: queryPage } = router.query
    const page = Number(queryPage)

    if (isNaN(page)) {
      setCurrentPage(1)
    } else {
      setCurrentPage(page)
    }
    const gamesToSkip = gamesPerPage * (currentPage - 1)
    setCurrentGamesToSkip(gamesToSkip)
  }, [router, currentPage, gamesPerPage])


  return {
    itemFrom: (currentPage - 1) * gamesPerPage + 1,
    itemTo: Math.min(currentPage * gamesPerPage, pageMetaData.aggregate.count),
    totalItems: pageMetaData.aggregate.count,
    isPreviousDisabled: currentPage === 1,
    isNextDisabled: false,//currentPage === pageMetaData.totalPages,
    currentPage: currentPage,
    gamesToSkip: currentGamesToSkip,
    itemsPerPage: gamesPerPage,
  }
}

export { usePagination }
