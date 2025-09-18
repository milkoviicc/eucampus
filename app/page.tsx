import Navbar from './components/Navbar'
import LandingWrapper from './components/LandingWrapper'
import Footer from './components/Footer'

export default function Home() {
  // call api to fetch courses and pass them into LandingWrapper.tsx as a prop

  return (
    <div>
      <div className="relative max-w-[1300px] mx-auto">
        <Navbar />
      </div>
      <LandingWrapper />
      <Footer />
    </div>
  )
}
