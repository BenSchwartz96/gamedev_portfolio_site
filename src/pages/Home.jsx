import Navbar from '../components/common/navbar/Navbar'
import Header from '../components/homepage/header/Header'
//import Nav from '../components/nav/Nav'
import About from '../components/homepage/about/About'
import Details from '../components/homepage/details/Details'
import Skills from '../components/homepage/skills/Skills'
import Portfolio from '../components/homepage/portfolio/Portfolio'
import Contact from '../components/homepage/contact/Contact'
import Footer from '../components/common/footer/Footer'

const Home = () => {
  return (
    <>

      <Navbar/>
      <Header />
      {/* <Nav /> */}
      <About />
      <Details />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default Home