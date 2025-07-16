import { Button, Modal } from "antd"
import { ImageWithFallback } from "~/components/ui-blocks/ImageWithFallback"
import { type GamesQuery } from "~/graphql/generated"

type Game = GamesQuery["games"][number]

type GameDetailModalProps = {
  open: boolean
  onClose: () => void
  game: Game
}

export function GameDetailModal({ open, onClose, game }: GameDetailModalProps) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={
        <div className="flex justify-end">
          <Button onClick={onClose} className="flex items-center gap-2">
            Cerrar
          </Button>
        </div>
      }
      width={700}
      closeIcon={null}
      centered
    >
      <div className="flex flex-col overflow-hidden bg-white">
        <div className="relative h-72 w-full">
          <ImageWithFallback
            src={game.imgUrl}
            alt={`Imagen del juego ${game.name}`}
            className="h-full w-full object-cover rounded-t-lg"
          />
        </div>

        <div className="flex flex-col gap-4 py-6">
          <h2 className="text-2xl font-semibold text-gray-800">{game.name}</h2>

          <div>
            <h3 className="mb-1 text-sm font-medium text-gray-800">Descripción</h3>
            <p className="text-sm text-gray-700 whitespace-pre-line">{game.description}</p>
          </div>

          <div>
            <h3 className="mb-1 text-sm font-medium text-gray-800">Objetivos</h3>
            <p className="text-sm text-gray-700 whitespace-pre-line">{game.objectives}</p>
          </div>
        </div>
      </div>
    </Modal>
  )
}
