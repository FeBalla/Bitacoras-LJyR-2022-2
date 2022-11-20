import Head from "next/head"
import { useRouter } from "next/router"
import GameCard from "../components/GameCard"
import { gamesData } from "../data/games"

export default function Home() {
  const router = useRouter()
  const { page = 1 } = router.query
  return (
    <>
      <Head>
        <title>Bitácoras - Liderazgo, Juegos y Recreación</title>
        <meta name="description" content="Bitácoras - Liderazgo, Juegos y Recreación" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center p-4 lg:px-20 sm:p-5">
        <div className="flex flex-col text-center my-5 gap-2">
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">
            Bitácoras - Liderazgo, Juegos y Recreación
          </h1>
          <h3 className="italic">(Página {page})</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gamesData.map((game) => {
            return <GameCard key={game.id} data={game} />
          })}
        </div>

        <div className="flex gap-7 md:gap-10 my-5 lg:my-8">
          <button
            className="rounded-md bg-cyan-700 hover:bg-cyan-800 text-white text-sm 
            md:text-base px-3 md:px-5 py-2 md:py-3 disabled:opacity-40 disabled:pointer-events-none"
            disabled={page <= 1}
          >
            Página anterior
          </button>

          <button
            className="rounded-md bg-cyan-700 hover:bg-cyan-800 text-white text-sm 
            md:text-base px-3 md:px-5 py-2 md:py-3 disabled:opacity-40 disabled:pointer-events-none"
          >
            Página siguiente
          </button>
        </div>
      </main>
    </>
  )
}
