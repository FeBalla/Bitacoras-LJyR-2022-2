import Head from "next/head"
import { useRouter } from "next/router"
import LoadingSpinner from "../components/atoms/LoadingSpinner"
import GameCard from "../components/games/GameCard"
import PageNavigator from "../components/games/PageNavigator"
import Layout from "../components/layout/Layout"
import { useGamesQuery } from "../graphql/generated"
import usePage from "../hooks/usePage"
import Pagination from "../components/atoms/Pagination"

export default function Home() {
  const router = useRouter()
  const [currentPage, gamesPerPage, currentGamesToSkip] = usePage(router)
  const { data, loading, error } = useGamesQuery({
    variables: { first: gamesPerPage, skip: currentGamesToSkip },
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

  console.log(data)

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

            <h4 className="italic">Página {currentPage}</h4>
          </div>

          {data && (
            <section className="flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.games.map((game) => {
                  return <GameCard key={game.id} game={game} />
                })}
              </div>

              <PageNavigator pageInfo={data.gamesConnection.pageInfo} router={router} />
              <Pagination pageMetaData={data.gamesConnection} pathname="/" />
            </section>
          )}
        </div>
      </Layout>
    </>
  )
}
