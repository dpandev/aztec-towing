import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { TopInfoBar } from "./TopInfoBar";

export default function Layout({children}) {
  return (
    <div>
      <TopInfoBar />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
