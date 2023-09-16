type PrimaryButtonProps = {
  children?: string
  disabled?: boolean
  onClick?: () => void
}

const PrimaryButton = ({ disabled, onClick, children }: PrimaryButtonProps) => {
  return (
    <button
      className="rounded-md bg-blue-700 hover:bg-blue-800 text-white text-sm transition-colors
      md:text-base px-3 md:px-5 py-2 md:py-3 disabled:opacity-40 disabled:pointer-events-none"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
