import DoubleQuotesIcon from "~/components/icons/DoubleQuotesIcon"
import ImageWithFallback from "~/components/UIBlocks/ImageWithFallback"
import { type ReflectionsQuery } from "~/graphql/generated"

type ReflectionCardProps = {
  reflection: ReflectionsQuery["reflections"][number]
}

const ReflectionCard = ({ reflection }: ReflectionCardProps) => {
  const { body, author } = reflection
  return (
    <div className="relative flex flex-col items-center gap-2 rounded-md border p-3 md:p-7">
      <div className="absolute top-0 left-0 p-4">
        <DoubleQuotesIcon width={30} height={30} />
      </div>

      <div className="relative aspect-square w-40 rounded-full md:w-52">
        <ImageWithFallback
          src={author?.imgUrl}
          alt={`Imagen del autor ${author?.name}`}
          style="rounded-full aspect-square shadow-lg"
        />
      </div>

      <h2 className="text-center text-lg font-semibold md:text-xl">{author?.name}</h2>
      <p className="text-sm md:text-base">{body}</p>
    </div>
  )
}

export default ReflectionCard
