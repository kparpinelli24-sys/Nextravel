import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

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