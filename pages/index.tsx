import Head from "next/head"
import Footer from "../components/Footer"
import GameCard from "../components/GameCard"
import NavBar from "../components/NavBar"
import { useGamesQuery } from "../graphql/generated"
import LoadingSpinner from "../components/LoadingSpinner"
import usePage from "../hooks/usePage"
import PageNavigator from "../components/PageNavigator"
import { useRouter } from "next/router"

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

  return (
    <>
      <Head>
        <title>Bitácoras - Liderazgo, Juegos y Recreación</title>
        <meta name="description" content="Bitácoras - Liderazgo, Juegos y Recreación" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex flex-col justify-center items-center p-4 lg:px-20 sm:p-5">
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
          </section>
        )}

        <Footer />
      </main>
    </>
  )
}
