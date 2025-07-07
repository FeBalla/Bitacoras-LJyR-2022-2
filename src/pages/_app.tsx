import { AppProps } from "next/app"
import GraphQLClientProvider from "~/lib/client"
import "~/styles/globals.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphQLClientProvider>
      <Component {...pageProps} />
    </GraphQLClientProvider>
  )
}
