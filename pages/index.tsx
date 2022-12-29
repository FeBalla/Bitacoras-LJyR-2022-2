import Head from "next/head"
import { useState, useEffect } from "react"
import Footer from "../components/Footer"
import GameCard from "../components/GameCard"
import NavBar from "../components/NavBar"
import PrimaryButton from "../components/PrimaryButton"
import gamesData from "../data/gamesData.json"
import { useGamesQuery } from "../graphql/generated"

export default function Home() {
  const { data, loading, error } = useGamesQuery()

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
          <h3 className="italic">
            (Página)
          </h3>
        </div>

        {data && (
          <section className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.games.map(game => {
                return <GameCard key={game.id} game={game} />
              })}
            </div>

            <div className="flex gap-7 md:gap-10 my-5 lg:my-8">
              <PrimaryButton>
                Página anterior
              </PrimaryButton>

              <PrimaryButton>
                Página siguiente
              </PrimaryButton>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </>
  )
}
