import { Footer } from "./atoms/Footer"
import { Header } from "./atoms/Header"
import React from "react"

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  )
}
