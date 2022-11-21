import Head from "next/head"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Reflexión - Liderazgo, Juegos y Recreación</title>
        <meta name="description" content="Bitácoras - Liderazgo, Juegos y Recreación" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex flex-col justify-center items-center p-4 lg:px-20 sm:p-5">
        JEJE
        <Footer />
      </main>
    </>
  )
}
