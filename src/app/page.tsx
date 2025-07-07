"use client"
import { ApolloClientProvider } from "~/components/ApolloClientProvider"
import { GameCard } from "~/components/GameCard"
import { Layout } from "~/components/UIBlocks/Layout"
import { LoadingSpinner } from "~/components/UIBlocks/LoadingSpinner"
import { Pagination } from "~/components/UIBlocks/Pagination"
import { useGamesQuery } from "~/graphql/generated"
import { usePage } from "~/hooks/usePage"
import { useSearchParams } from "next/navigation"

function HomeContent() {
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
    <Layout>
      <div className="flex flex-col items-center justify-center p-4 sm:p-5 lg:px-20">
        <div className="my-5 flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold text-gray-900 lg:text-3xl">Lista de juegos</h1>
          <h4 className="italic">Página {page.page}</h4>
        </div>
        {data && (
          <section className="flex flex-col items-center">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.games.map((game) => {
                return <GameCard key={game.id} game={game} />
              })}
            </div>
            <Pagination page={page} pageMetaData={data.gamesConnection} pathname="/" />
          </section>
        )}
      </div>
    </Layout>
  )
}

export default function Home() {
  return (
    <ApolloClientProvider>
      <HomeContent />
    </ApolloClientProvider>
  )
}
