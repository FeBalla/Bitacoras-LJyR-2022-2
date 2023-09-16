import ImageWithFallback from "~/components/UIBlocks/ImageWithFallback"
import { type GamesQuery } from "~/graphql/generated"

type GameCardProps = {
  game: GamesQuery["games"][number]
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-md border p-3">
      <div className="text-left">
        <h2 className="text-2xl font-semibold text-gray-800">{game.name}</h2>
      </div>

      <div className="relative my-2 h-52 w-full">
        <ImageWithFallback src={game.imgUrl} alt={`Imagen del juego ${game.name}`} />
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold text-gray-700">Descripción</h3>
        <p className="text-justify text-sm text-gray-600 md:text-base">{game.description}</p>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold text-gray-700">Objetivos</h3>
        <p className="text-justify text-sm text-gray-600 md:text-base">{game.objectives}</p>
      </div>
    </div>
  )
}

export default GameCard
