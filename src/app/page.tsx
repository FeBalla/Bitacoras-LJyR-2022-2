import { LoadingSpinner } from "~/components/ui-blocks/LoadingSpinner"
import { Suspense } from "react"
import { GamesListPageContent } from "~/components/page-content/GamesListPageContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ludolab | Juegos",
  description: `Descubre una amplia variedad de juegos y dinámicas de grupo para
                disfrutar con amigos y compañeros.`,
}

export default function GamesListPage() {
  return (
    <Suspense
      fallback={
        <div className="grid h-screen place-items-center">
          <LoadingSpinner />
        </div>
      }
    >
      <GamesListPageContent />
    </Suspense>
  )
}
