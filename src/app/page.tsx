import Navbar from '@/components/Navbar'
import About from '@/Features/Homepage/About'
import Faq from '@/Features/Homepage/Faq'
import Gallery from '@/Features/Homepage/Gallery'
import HeroSection from '@/Features/Homepage/HeroSection'
import Portfolio from '@/Features/Homepage/Portfolio'


const page = () => {
  return (
    <div className=' w-full bg-black text-white'>
      <Navbar />
      <HeroSection />
      <About />
      <Portfolio />
      <Gallery />
      <Faq />
    </div>
  )
}

export default page