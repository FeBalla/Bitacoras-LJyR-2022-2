import { type GamesQuery } from "../../graphql/generated"
import ImageWithFallback from "../atoms/ImageWithFallback"

type GameCardProps = {
  game: GamesQuery["games"][number]
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="flex flex-col rounded-md gap-2 border p-3">
      <div className="w-full h-52 relative">
        <ImageWithFallback src={game.imgUrl} alt={`Imagen del juego ${game.name}`} />
      </div>

      <div className="text-center">
        <h2 className="font-semibold text-xl">{game.name}</h2>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-0.5">Descripción</h3>
        <p className="text-sm md:text-base">{game.description}</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-0.5">Objetivos</h3>
        <p className="text-sm md:text-base">{game.objectives}</p>
      </div>
    </div>
  )
}

export default GameCard
