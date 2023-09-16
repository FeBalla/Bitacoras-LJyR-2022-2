import Footer from "./atoms/Footer"
import Header from "./atoms/Header"

type LayoutProps = {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout