import "~/styles/globals.css"
import React from "react"

export const metadata = {
  title: "ludolab | Lista de juegos",
  description: "Conoce juegos y dinámicas de grupo para hacer con amigos",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
