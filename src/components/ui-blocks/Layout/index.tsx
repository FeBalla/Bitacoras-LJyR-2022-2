import React from "react"
import { TopographyPatternBackground } from "../TopographyPatternBackground"
import { Footer } from "./atoms/Footer"
import { Header } from "./atoms/Header"

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const bgStrokeColor = "#a2c0d3"

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white">
      <TopographyPatternBackground strokeColor={bgStrokeColor}>
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </TopographyPatternBackground>
    </div>
  )
}
