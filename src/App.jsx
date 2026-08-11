import Header from './components/header'
import Hero from './components/hero'
import Benefits from './components/destinos'
import Services from './components/pacotes'
import Testimonials from './components/clientes'
import Footer from './components/footer'

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App