import Head from "next/head"
import GameCard from "../components/GameCard"
import { gamesData } from "../data/games"

export default function Home() {
  return (
    <>
      <Head>
        <title>Bitácoras - Liderazgo, Juegos y Recreación</title>
        <meta name="description" content="Bitácoras - Liderazgo, Juegos y Recreación" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center p-4 lg:px-20 sm:p-5">
        <h1 className="text-center text-2xl lg:text-3xl my-5 font-semibold">
          Bitácoras - Liderazgo, Juegos y Recreación
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gamesData.map((game) => {
            return <GameCard data={game} />
          })}
        </div>

        <div className="flex gap-7 md:gap-10 my-5 lg:my-8">
          <button 
            className="rounded-md bg-indigo-700 hover:bg-indigo-800 text-white text-sm 
            md:text-base px-3 md:px-5 py-2 md:py-3"
          >
            Página anterior
          </button>

          <button 
            className="rounded-md bg-indigo-700 hover:bg-indigo-800 text-white text-sm 
            md:text-base px-3 md:px-5 py-2 md:py-3"
          >
            Página siguiente
          </button>
        </div>
      </main>
    </>
  )
}
