import { AppProps } from "next/app"
import "../styles/globals.css"
import GraphQLClientProvider from "../lib/client"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphQLClientProvider>
      <Component {...pageProps} />
    </GraphQLClientProvider>
  )
}

export default MyApp
