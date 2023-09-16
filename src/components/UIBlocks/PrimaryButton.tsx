type PrimaryButtonProps = {
  children?: string
  disabled?: boolean
  onClick?: () => void
}

const PrimaryButton = ({ disabled, onClick, children }: PrimaryButtonProps) => {
  return (
    <button
      className="rounded-md bg-blue-700 px-3 py-2 text-sm text-white
      transition-colors hover:bg-blue-800 disabled:pointer-events-none
      disabled:opacity-40 md:px-5 md:py-3 md:text-base"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
