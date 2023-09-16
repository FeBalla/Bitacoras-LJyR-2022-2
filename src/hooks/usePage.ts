import { NextRouter } from "next/router"
import { useEffect, useState } from "react"

type PageState = {
  page: number
  itemsPerPage: number
  itemsToSkip: number
}

const usePage = (router: NextRouter): PageState => {
  const itemsPerPage = Number(process.env.NEXT_PUBLIC_GAMES_PER_PAGE) || 6
  const [page, setPage] = useState(1)
  const [itemsToSkip, setItemsToSkip] = useState(0)

  useEffect(() => {
    const queryPage = Number(router.query.page)

    if (isNaN(queryPage)) {
      setPage(1)
    } else {
      setPage(queryPage)
    }

    const itemsToSkip = itemsPerPage * (page - 1)
    setItemsToSkip(itemsToSkip)
  }, [router, page, itemsPerPage])

  return { page, itemsPerPage, itemsToSkip }
}

export default usePage
