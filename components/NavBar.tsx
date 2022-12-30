import Link from "next/link"
import { useRouter } from "next/router"

const NavBar = () => {
  const router = useRouter()
  return (
    <header
      className="flex w-full sticky top-0 z-50 justify-center md:justify-end shadow-md px-5 py-3 
      md:px-16 md:py-5 bg-white"
    >
      <nav className="flex gap-5">
        <Link
          href="/"
          className={router.pathname === "/" ? "font-semibold" : ""}
        >
          Bitácoras
        </Link>

        <Link
          href="/reflexiones"
          className={router.pathname === "/reflexiones" ? "font-semibold" : ""}
        >
          Reflexión
        </Link>
      </nav>
    </header>
  )
}

export default NavBar
