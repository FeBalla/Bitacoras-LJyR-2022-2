import PrimaryButton from "./PrimaryButton"
import { type PageInfo } from "../graphql/generated"
import usePage from "../hooks/usePage"
import { NextRouter } from "next/router"

type PageNavigatorProps = {
  pageInfo: PageInfo
  router: NextRouter
}

const PageNavigator = ({ pageInfo, router }: PageNavigatorProps) => {
  const [currentPage] = usePage(router)

  const goToPreviousPage = () => {
    router.push({
      pathname: "/",
      query: { page: currentPage - 1 },
    })
  }
  const goToNextPage = () => {
    router.push({
      pathname: "/",
      query: { page: currentPage + 1 },
    })
  }

  return (
    <div className="flex gap-7 md:gap-10 my-5 lg:my-8">
      <PrimaryButton disabled={!pageInfo.hasPreviousPage} onClick={goToPreviousPage}>
        Página anterior
      </PrimaryButton>

      <PrimaryButton disabled={!pageInfo.hasNextPage} onClick={goToNextPage}>
        Página siguiente
      </PrimaryButton>
    </div>
  )
}

export default PageNavigator
