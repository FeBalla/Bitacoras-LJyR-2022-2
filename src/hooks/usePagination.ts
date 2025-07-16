import { useEffect, useState } from "react"

export type PageState = {
  currentPage: number
  itemsPerPage: number
  itemsToSkip: number
}

export function usePagination(searchParams: URLSearchParams): PageState {
  const itemsPerPage = Number(process.env.NEXT_PUBLIC_GAMES_PER_PAGE) || 6
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsToSkip, setItemsToSkip] = useState(0)

  useEffect(() => {
    const queryPage = Number(searchParams.get("page"))

    if (isNaN(queryPage) || queryPage < 1) {
      setCurrentPage(1)
    } else {
      setCurrentPage(queryPage)
    }

    const itemsToSkip = itemsPerPage * ((isNaN(queryPage) || queryPage < 1 ? 1 : queryPage) - 1)
    setItemsToSkip(itemsToSkip)
  }, [searchParams, itemsPerPage])

  return { currentPage, itemsPerPage, itemsToSkip }
}
