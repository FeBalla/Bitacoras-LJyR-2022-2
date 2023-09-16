import { AppProps } from "next/app"
import GraphQLClientProvider from "~/lib/client"
import "~/styles/globals.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GraphQLClientProvider>
      <Component {...pageProps} />
    </GraphQLClientProvider>
  )
}

export default MyApp
