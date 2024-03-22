import Hero from './component/Hero'
import Divider from './component/Divider'
import Community from './component/Community'
import Tokenomics from './component/Tokenomics'
import Ready from './component/Ready'
import Footer from './component/Footer'


function App() {

  return (
    <div className="wrapper">
      <Hero/>
      <Community/>
      <Tokenomics/>
      <Ready/>
      <div className="marque ">
        <Divider/>
      </div>
      <section className="about">
       <img className="about-content" src="/assets/img/about/website 3.png"/>
      </section>
      <Footer/>
    </div>
  )
}

export default App


