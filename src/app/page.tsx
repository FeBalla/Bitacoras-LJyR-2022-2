import { LoadingSpinner } from "~/components/ui-blocks/LoadingSpinner"
import { Suspense } from "react"
import { GamesListPageContent } from "~/components/page-content/GamesListPageContent"

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
