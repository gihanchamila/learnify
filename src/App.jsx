import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from './components/Features'
import Download from "./components/Download"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {

  return (
    <>
   <div className="relative">
        {/* Background div */}
        <div className="grid-background"></div>

        {/* Your content */}
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden relative z-10">
          <Header />
          <Hero />
          <Features />
          <Download />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
