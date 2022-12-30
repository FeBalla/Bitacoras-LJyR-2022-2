import Footer from "./Footer"
import NavBar from "./NavBar"

type LayoutProps = {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavBar />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
