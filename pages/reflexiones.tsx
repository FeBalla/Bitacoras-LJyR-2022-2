import Head from "next/head"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { useReflectionsQuery } from "../graphql/generated"

const Home = () => {
  const { data, loading } = useReflectionsQuery()
  return (
    <>
      <Head>
        <title>Reflexiones - Liderazgo, Juegos y Recreación</title>
        <meta
          name="description"
          content="Reflexiones de los autores sobre el curso Liderazgo, Juegos y Recreación, del 
          semestre 2022-2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex flex-col justify-center items-center p-4 lg:px-20 sm:p-5 my-5">
        <div>
          {!loading && (
            <>{JSON.stringify(data)}</>
          )}
        </div>

        <Footer />
      </main>
    </>
  )
}

export default Home