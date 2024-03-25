import Hero from './component/Hero'
import Divider from './component/Divider'
import Community from './component/Community'
import Tokenomics from './component/Tokenomics'
import Ready from './component/Ready'
import Footer from './component/Footer'
import Banner from './component/Banner'
import { Container } from '@mui/material'
import Header from './component/Header'


function App() {

  return (
    <div className="wrapper">
      <Container  sx={{px:6}}>

      <Header/>
      </Container>
      <Hero/>
      {/* <Community/> */}
      <div className="marque ">
        <Divider/>
      </div>
      <section className="about">
       <img className="about-content" src="/assets/img/about/website 3.png"/>
      </section>
      <div className="marque ">
        <Divider/>
      </div>
      <Tokenomics/>
      <Ready/>
      <div className="marque ">
        <Divider/>
      </div>
      <Banner/>
      <div className="marque ">
        <Divider/>
      </div>
      <Footer/>
    </div>
  )
}

export default App


