const PrimaryButton = ({ ...props }) => {
  return (
    <button
      className="rounded-md bg-blue-700 hover:bg-blue-800 text-white text-sm transition-colors
      md:text-base px-3 md:px-5 py-2 md:py-3 disabled:opacity-40 disabled:pointer-events-none"
      {...props}
    >
      {props.children}
    </button>
  )
}

export default PrimaryButton
