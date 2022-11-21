import Head from "next/head"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import ReflectionCard from "../components/ReflectionCard"
import reflectionsData from "../data/reflectionsData.json"

export default function Home() {
  return (
    <>
      <Head>
        <title>Reflexión - Liderazgo, Juegos y Recreación</title>
        <meta name="description" content="Bitácoras - Liderazgo, Juegos y Recreación" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex flex-col justify-center items-center p-4 lg:px-20 sm:p-5 my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reflectionsData.map((reflection) => {
            return <ReflectionCard key={reflection.id} data={reflection} />
          })}
        </div>

        <Footer />
      </main>
    </>
  )
}
