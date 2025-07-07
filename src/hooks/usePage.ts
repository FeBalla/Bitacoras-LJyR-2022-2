import { useEffect, useState } from "react"
import { PageState } from "~/types"

export function usePage(searchParams: URLSearchParams): PageState {
  const itemsPerPage = Number(process.env.NEXT_PUBLIC_GAMES_PER_PAGE) || 6
  const [page, setPage] = useState(1)
  const [itemsToSkip, setItemsToSkip] = useState(0)

  useEffect(() => {
    const queryPage = Number(searchParams.get("page"))

    if (isNaN(queryPage) || queryPage < 1) {
      setPage(1)
    } else {
      setPage(queryPage)
    }

    const itemsToSkip = itemsPerPage * ((isNaN(queryPage) || queryPage < 1 ? 1 : queryPage) - 1)
    setItemsToSkip(itemsToSkip)
  }, [searchParams, itemsPerPage])

  return { page, itemsPerPage, itemsToSkip }
}
