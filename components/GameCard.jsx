import ImageWithFallback from "./ImageWithFallback"

const GameCard = ({ data }) => {
  return (
    <div className="flex flex-col rounded-md gap-2 border p-3">
      <div className="w-full h-52 relative">
        <ImageWithFallback src={data.imgUrl} />
      </div>

      <div className="text-center">
        <h1 className="font-semibold text-xl">{data.name}</h1>
        <span className="italic text-xs sm:text-sm text-gray-600">Clase del {data.date}</span>
      </div>

      <div>
        <h2 className="font-semibold text-lg mb-0.5">Descripción</h2>
        <p className="text-sm md:text-base">{data.description}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg mb-0.5">Objetivos</h2>
        <p className="text-sm md:text-base">{data.objectives}</p>
      </div>
    </div>
  )
}

export default GameCard
