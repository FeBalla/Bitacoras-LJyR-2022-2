"use client"
import { GameCard } from "~/components/GameCard"
import { LoadingSpinner } from "~/components/ui-blocks/LoadingSpinner"
import { Pagination } from "~/components/ui-blocks/Pagination"
import { useGamesQuery } from "~/graphql/generated"
import { usePage } from "~/hooks/usePage"
import { useSearchParams } from "next/navigation"

export function GamesListPageContent() {
  const searchParams = useSearchParams()
  const page = usePage(searchParams)

  const { data, loading, error } = useGamesQuery({
    variables: {
      first: page.itemsPerPage,
      skip: page.itemsToSkip,
    },
  })

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
        <h4 className="italic">Página {page.page}</h4>
      </div>

      {data && (
        <section className="w-full">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
            {data.games.map((game) => {
              return <GameCard key={game.id} game={game} />
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <Pagination page={page} pageMetaData={data.gamesConnection} pathname="/" />
          </div>
        </section>
      )}
    </div>
  )
}
