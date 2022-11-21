import Head from "next/head"
import { useState, useEffect } from "react"
import GameCard from "../components/GameCard"
import PrimaryButton from "../components/PrimaryButton"
import gamesData from "../data/gamesData.json"

export default function Home() {
  const [page, setPage] = useState(0)
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

  const handlePageInput = (event) => {
    const { value } = event.target
    if (value > 0 && value <= maxPage) {
      setPage(value - 1)
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
            (Página {page + 1} de {maxPage})
          </h3>
        </div>

        <div className="flex gap-7 md:gap-10 my-5 lg:my-8">
          <PrimaryButton disabled={page < 1} onClick={decreasePage}>
            Página anterior
          </PrimaryButton>

          <PrimaryButton disabled={page >= maxPage} onClick={increasePage}>
            Página siguiente
          </PrimaryButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gamesData.slice(startGame, endGame).map((game) => {
            return <GameCard key={game.id} data={game} />
          })}
        </div>

        <div className="flex gap-7 md:gap-10 my-5 lg:my-8">
          <PrimaryButton disabled={page < 1} onClick={decreasePage}>
            Página anterior
          </PrimaryButton>

          <input
            type="number"
            className="hidden md:inline-block border outline-none px-1 text-center rounded-md w-min"
            min="1"
            max={maxPage}
            value={page + 1}
            onChange={(event) => handlePageInput(event)}
          />

          <PrimaryButton disabled={page >= maxPage} onClick={increasePage}>
            Página siguiente
          </PrimaryButton>
        </div>

        <div className="flex flex-col text-center text-xs md:text-sm gap-1">
          <h4>Hecho con 💜 para el curso Liderazgo, Juegos y Recreación - Sección 3 (2022-2)</h4>
          <h5>Fernando Balladares - Martín Orrego - Sebastián Breguel</h5>
        </div>
      </main>
    </>
  )
}
