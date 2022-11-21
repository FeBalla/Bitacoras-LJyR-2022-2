import Head from "next/head"
import { useState, useEffect } from "react"
import GameCard from "../components/GameCard"
import gamesData from "../data/gamesData.json"

export default function Home() {
  const [page, setPage] = useState(1)
  const [startGame, setStartGame] = useState(0)
  const [endGame, setEndGame] = useState(6)
  const maxPage = Math.floor(gamesData.length / 6)
  console.log(gamesData.length)

  useEffect(() => {
    const newStartGame = Math.min(6 * page, gamesData.length - 1)
    const newEndGame = Math.min(newStartGame + 6, gamesData.length - 1)
    setStartGame(newStartGame)
    setEndGame(newEndGame)
  }, [page])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const decreasePage = () => {
    if (page > 0) {
      setPage(page - 1)
      scrollToTop()
    }
  }

  const increasePage = () => {
    if (page < maxPage) {
      setPage(page + 1)
      scrollToTop()
    }
  }

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
          <h3 className="italic">
            (Página {page} de {maxPage})
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gamesData.slice(startGame, endGame).map((game) => {
            return <GameCard key={game.id} data={game} />
          })}
        </div>

        <div className="flex gap-7 md:gap-10 my-5 lg:my-8">
          <button
            className="rounded-md bg-blue-700 hover:bg-blue-800 text-white text-sm 
            md:text-base px-3 md:px-5 py-2 md:py-3 disabled:opacity-40 disabled:pointer-events-none"
            disabled={page <= 1}
            onClick={decreasePage}
          >
            Página anterior
          </button>

          <button
            className="rounded-md bg-blue-700 hover:bg-blue-800 text-white text-sm 
            md:text-base px-3 md:px-5 py-2 md:py-3 disabled:opacity-40 disabled:pointer-events-none"
            disabled={page >= maxPage}
            onClick={increasePage}
          >
            Página siguiente
          </button>
        </div>
      </main>
    </>
  )
}
