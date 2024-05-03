import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from '../components/Features'
import Download from "../components/Download"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { motion } from "framer-motion"


function Home() {

  return (
    <>
      <div className="relative">
        <div className="grid-background"></div>
        <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden relative z-10">
          <Header />
          <Hero />
          <Features />
          <Download />
          <About />
          <Contact />
          <Footer />
        </motion.div>
      </div>
    </>
  )
}

export default Home