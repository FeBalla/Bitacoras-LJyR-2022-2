import Head from "next/head"
import { useReflectionsQuery } from "../graphql/generated"
import LoadingSpinner from "../components/atoms/LoadingSpinner"
import ReflectionCard from "../components/reflections/ReflectionCard"
import Layout from "../components/layout/Layout"

const Home = () => {
  const { data, loading, error } = useReflectionsQuery()

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
        <title>Reflexiones - Liderazgo, Juegos y Recreación</title>
        <meta
          name="description"
          content="Reflexiones de los autores sobre el curso Liderazgo, Juegos y Recreación, del 
          semestre 2022-2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="flex flex-col justify-center items-center p-4 lg:px-20 sm:p-5 my-5 gap-5">
          <h1 className="font-semibold text-2xl md:text-3xl">Reflexiones</h1>

          {data && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {data.reflections.map((reflection) => {
                return <ReflectionCard key={reflection.id} reflection={reflection} />
              })}
            </div>
          )}
        </div>
      </Layout>
    </>
  )
}

export default Home
