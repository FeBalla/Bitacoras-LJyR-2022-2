import { type ReflectionsQuery } from "../graphql/generated"
import DoubleQuotesIcon from "./DoubleQuotesIcon"
import ImageWithFallback from "./ImageWithFallback"

type ReflectionCardProps = {
  reflection: ReflectionsQuery["reflections"][number]
}

const ReflectionCard = ({ reflection }: ReflectionCardProps) => {
  const { body, author } = reflection
  return (
    <div className="flex flex-col rounded-md gap-2 border p-3 md:p-7 items-center relative">
      <div className="absolute top-0 left-0 p-4">
        <DoubleQuotesIcon width={30} height={30} />
      </div>

      <div className="w-40 md:w-52 relative rounded-full aspect-square">
        <ImageWithFallback
          src={author.imgUrl}
          alt={`Imagen del autor ${author.name}`}
          style="rounded-full aspect-square shadow-lg"
        />
      </div>

      <h2 className="text-center font-semibold text-xl">{author.name}</h2>
      <p className="text-sm md:text-base">{body}</p>
    </div>
  )
}

export default ReflectionCard
