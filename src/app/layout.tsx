import { ApolloClientProvider } from "~/components/ApolloClientProvider"
import { Inter } from "next/font/google"
import "./globals.css"
import { Layout } from "~/components/ui-blocks/Layout"
import React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Layout>
          <ApolloClientProvider>{children}</ApolloClientProvider>
        </Layout>
      </body>
    </html>
  )
}
