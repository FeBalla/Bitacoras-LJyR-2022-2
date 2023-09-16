import ImageWithFallback from "~/components/UIBlocks/ImageWithFallback"
import { type GamesQuery } from "~/graphql/generated"

type GameCardProps = {
  game: GamesQuery["games"][number]
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="flex flex-col rounded-md gap-2 border p-3">

      <div className="text-left">
        <h2 className="font-semibold text-2xl text-gray-800">{game.name}</h2>
      </div>

      <div className="w-full h-52 relative my-2">
        <ImageWithFallback src={game.imgUrl} alt={`Imagen del juego ${game.name}`} />
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2 text-gray-700">Descripción</h3>
        <p className="text-sm md:text-base text-gray-600 text-justify">{game.description}</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2 text-gray-700">Objetivos</h3>
        <p className="text-sm md:text-base text-gray-600 text-justify">{game.objectives}</p>
      </div>
    </div>
  )
}

export default GameCard
