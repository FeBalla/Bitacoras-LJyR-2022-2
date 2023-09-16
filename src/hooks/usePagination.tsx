import { useEffect, useState } from "react"

// How many buttons in the pagination will be displayed.
const _MAX_PAGE_BUTTONS_DISPLAYED = 5

type UsePaginationState = {
  pagesToShow: number[]
  itemFrom: number
  itemTo: number
  totalItems: number
  isPreviousDisabled: boolean
  isNextDisabled: boolean
}

const usePagination = (pageMetaData: any): UsePaginationState => {
  const [pagesToShow, setPagesToShow] = useState<number[]>([])

  const getPagesToShow = (): number[] => {
    const lastButtonPage = Math.min(
      pageMetaData.totalPages,
      Math.max(_MAX_PAGE_BUTTONS_DISPLAYED, pageMetaData.pageNumber + 2)
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

  return {
    pagesToShow,
    itemFrom: (pageMetaData.pageNumber - 1) * pageMetaData.pageSize + 1,
    itemTo: Math.min(pageMetaData.pageNumber * pageMetaData.pageSize, pageMetaData.totalItems),
    totalItems: pageMetaData.totalItems,
    isPreviousDisabled: pageMetaData.pageNumber === 1,
    isNextDisabled: pageMetaData.pageNumber === pageMetaData.totalPages,
  }
}

export { usePagination }
