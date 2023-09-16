import Head from "next/head"
import { useRouter } from "next/router"
import LoadingSpinner from "~/components/UIBlocks/LoadingSpinner"
import Pagination from "~/components/UIBlocks/Pagination"
import GameCard from "~/components/GameCard"
import Layout from "~/components/UIBlocks/Layout"
import { useGamesQuery } from "~/graphql/generated"
import usePage from "~/hooks/usePage"

export default function Home() {
  const router = useRouter()
  const page = usePage(router)

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
    <>
      <Head>
        <title>Bitácoras - Liderazgo, Juegos y Recreación</title>
        <meta name="description" content="Bitácoras - Liderazgo, Juegos y Recreación" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="flex flex-col justify-center items-center p-4 lg:px-20 sm:p-5">
          <div className="flex flex-col text-center my-5 gap-2">
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">
              Bitácoras - Liderazgo, Juegos y Recreación
            </h1>

            <h4 className="italic">Página {page.page}</h4>
          </div>

          {data && (
            <section className="flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.games.map((game) => {
                  return <GameCard key={game.id} game={game} />
                })}
              </div>

              <Pagination
                page={page}
                pageMetaData={data.gamesConnection}
                pathname="/"
              />
            </section>
          )}
        </div>
      </Layout>
    </>
  )
}
