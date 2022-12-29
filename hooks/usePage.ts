import { NextRouter } from "next/router"
import { useEffect, useState } from "react"

const usePage = (router: NextRouter) => {
  const gamesPerPage: number = Number(process.env.NEXT_PUBLIC_GAMES_PER_PAGE) || 6
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

  return [currentPage, gamesPerPage, currentGamesToSkip]
}

export default usePage
