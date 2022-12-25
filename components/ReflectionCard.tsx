import DoubleQuotesIcon from "./DoubleQuotesIcon"
import ImageWithFallback from "./ImageWithFallback"

export type ReflectionCardProps = {
  name: string
  reflection: string
  imgUrl: string
}

const ReflectionCard = ({ name, reflection, imgUrl }: ReflectionCardProps) => {
  return (
    <div className="flex flex-col rounded-md gap-2 border p-3 md:p-7 items-center relative">
      <div className="absolute top-0 left-0 p-4">
        <DoubleQuotesIcon width={30} height={30} />
      </div>

      <div className="w-40 md:w-52 relative rounded-full aspect-square">
        <ImageWithFallback
          src={imgUrl}
          className="rounded-full aspect-square shadow-lg"
          quality="100"
        />
      </div>

      <h2 className="text-center font-semibold text-xl">{name}</h2>
      <p className="text-sm md:text-base">{reflection}</p>
    </div>
  )
}

export default ReflectionCard
