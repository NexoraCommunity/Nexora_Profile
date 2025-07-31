import Navbar from '@/components/Navbar'
import About from '@/Features/Homepage/About'
import Faq from '@/Features/Homepage/Faq'
import Gallery from '@/Features/Homepage/Gallery'
import HeroSection from '@/Features/Homepage/HeroSection'
import Portfolio from '@/Features/Homepage/Portfolio'
import SmoothScrolling from "@/utils/Lenis";



const page = () => {
  return (
    <SmoothScrolling>
      <Navbar />
      <HeroSection />
      <About />
      <Portfolio />
      <Gallery />
      <Faq />
    </SmoothScrolling>
  )
}

export default page