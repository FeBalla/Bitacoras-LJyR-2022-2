const Footer = () => {
  return (
    <footer className="flex flex-col text-center text-xs md:text-sm gap-1 py-5 bg-gray-50">
      <h4>Hecho con 💜 para el curso Liderazgo, Juegos y Recreación del 2022-2</h4>
      <h5>Fernando Balladares - Martín Orrego - Sebastián Breguel</h5>
      <div>
        {"Desarrollado por "}
        <a
          href="https://github.com/FeBalla"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-blue-800 hover:text-blue-900"
        >
          @FeBalla
        </a>
      </div>
    </footer>
  )
}

export default Footer
