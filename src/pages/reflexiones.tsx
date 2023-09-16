import Head from "next/head"
import ReflectionCard from "~/components/ReflectionCard"
import Layout from "~/components/UIBlocks/Layout"
import LoadingSpinner from "~/components/UIBlocks/LoadingSpinner"
import { useReflectionsQuery } from "~/graphql/generated"

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
        <div className="my-5 flex flex-col items-center justify-center gap-5 p-4 sm:p-5 lg:px-20">
          <h1 className="text-2xl font-semibold md:text-3xl">Reflexiones</h1>

          {data && (
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
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
