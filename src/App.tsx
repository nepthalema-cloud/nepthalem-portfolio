import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProjectCaseStudy from './components/ProjectCaseStudy'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { useRouter } from './router'

function App() {
  const { projectSlug } = useRouter()

  return (
    <>
      <Navbar />
      {projectSlug ? (
        <main id="top">
          <ProjectCaseStudy slug={projectSlug} />
        </main>
      ) : (
        <main id="top">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  )
}

export default App

