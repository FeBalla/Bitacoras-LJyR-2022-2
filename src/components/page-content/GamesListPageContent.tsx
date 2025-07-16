"use client"

import { Pagination } from "antd"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { GameCard } from "~/components/GameCard"
import { LoadingSpinner } from "~/components/ui-blocks/LoadingSpinner"
import { useGamesQuery } from "~/graphql/generated"
import { usePagination } from "~/hooks/usePagination"

export function GamesListPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const pagination = usePagination(searchParams)

  const { data, loading, error } = useGamesQuery({
    variables: {
      first: pagination.itemsPerPage,
      skip: pagination.itemsToSkip,
    },
  })

  const totalItems = data?.gamesConnection.aggregate.count ?? 0

  const handlePageChange = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", pageNumber.toString())
    router.push(`${pathname}?${params.toString()}`)
  }

  if (loading) {
    return (
      <div className="grid h-screen place-items-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <h2>Algo salió mal</h2>
  }

  return (
    <div className="flex flex-col p-2 sm:p-5 lg:px-20 w-full">
      <div className="my-5 flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 lg:text-3xl">Lista de juegos</h1>
        <h4 className="italic">Página {pagination.currentPage}</h4>
      </div>

      {data && (
        <section className="w-full">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
            {data.games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          <div
            className="mt-8 flex justify-center mx-auto py-2 px-3 rounded-full bg-gray-50/70
            w-fit"
          >
            <Pagination
              current={pagination.currentPage}
              pageSize={pagination.itemsPerPage}
              total={totalItems}
              onChange={handlePageChange}
              showSizeChanger={false}
              align="center"
              responsive
              showLessItems
              hideOnSinglePage
            />
          </div>
        </section>
      )}
    </div>
  )
}
