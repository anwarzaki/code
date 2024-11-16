import './App.css'
import Footer from './footer/Footer'
import Header from './Header/Header'
import HeaderDown from './Header/HeaderDown'
import Hero from './Header/Hero'
import PerfumeCard from './Header/main/PerfumeCard'

function App() {

  return (
    <>
      <Header />
      <HeaderDown />
      <Hero />
        <div>
          <PerfumeCard />
        </div>
        <div>
          <Footer />
        </div>
    </>
  )
}

export default App
