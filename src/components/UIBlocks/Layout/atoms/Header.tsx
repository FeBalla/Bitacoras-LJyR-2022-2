import Link from "next/link"
import { useRouter } from "next/router"

const HEader = () => {
  const router = useRouter()
  return (
    <header
      className="sticky top-0 z-50 flex w-full justify-center bg-gray-50 px-5 py-3 shadow-md 
      md:justify-end md:px-16 md:py-5"
    >
      <nav className="flex gap-5">
        <Link href="/" className={router.pathname === "/" ? "font-semibold" : ""}>
          Bitácoras
        </Link>

        <Link
          href="/reflexiones"
          className={router.pathname === "/reflexiones" ? "font-semibold" : ""}
        >
          Reflexiones
        </Link>
      </nav>
    </header>
  )
}

export default HEader
