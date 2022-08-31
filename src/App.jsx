
import './App.css'

import NavBar from './Components/NavBar/NavBar'
import Banner  from './Components/Banner/Banner'
import Skills  from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


function App() {


  return (
  <div className="App">
    <NavBar/>
    <Banner />
    <Skills />
    <Projects />
    <About />
    <Footer /> 
    </div>
  )
}

export default App
