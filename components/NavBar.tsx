import Link from "next/link"

const NavBar = () => {
  return (
    <header
      className="flex w-full sticky top-0 z-50 justify-center md:justify-end shadow-md px-5 py-3 
      md:px-16 md:py-5 bg-white font-semibold"
    >
      <nav className="flex gap-5">
        <Link href="/" className="hover:text-gray-700">
          Bitácoras
        </Link>

        <Link href="/reflexiones" className="hover:text-gray-700">
          Reflexión
        </Link>
      </nav>
    </header>
  )
}

export default NavBar
