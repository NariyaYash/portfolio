import Aos from "aos"
import { useEffect } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import MyProjects from "./components/MyProjects"
import Footer from "./components/Footer"
import Contact from "./components/Contact"


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      <main className="bg-gray-950">
        <Hero />
        <About />
        <Skills />
        <MyProjects />
        {/* <Contact/> */}
        <Footer />  
      </main>
    </>
  )
}

export default App
