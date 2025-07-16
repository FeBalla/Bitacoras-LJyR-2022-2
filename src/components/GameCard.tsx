import { ImageWithFallback } from "~/components/ui-blocks/ImageWithFallback"
import { type GamesQuery } from "~/graphql/generated"

type GameCardProps = {
  game: GamesQuery["games"][number]
}

export function GameCard({ game }: GameCardProps) {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200
      bg-white shadow-sm transition-shadow hover:shadow-md bg-opacity-80"
    >
      <div className="relative h-64 w-full">
        <ImageWithFallback
          src={game.imgUrl}
          alt={`Imagen del juego ${game.name}`}
          className="h-full w-full object-cover transition-transform duration-500
          group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-3 p-4">
        <h2 className="text-xl font-semibold text-gray-800 transition-colors">{game.name}</h2>

        <div className="min-h-[7.5rem]">
          <h3 className="mb-1 text-sm font-medium text-gray-800">Descripción</h3>
          <p className="text-sm text-gray-700 line-clamp-5">{game.description}</p>
        </div>

        <div className="min-h-[5.25rem]">
          <h3 className="mb-1 text-sm font-medium text-gray-800">Objetivos</h3>
          <p className="text-sm text-gray-700 line-clamp-3">{game.objectives}</p>
        </div>
      </div>
    </div>
  )
}
