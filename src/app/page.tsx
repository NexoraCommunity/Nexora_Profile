import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import About from '@/Features/Homepage/About'
import Faq from '@/Features/Homepage/Faq'
import Gallery from '@/Features/Homepage/Gallery'
import HeroSection from '@/Features/Homepage/HeroSection'
import Partnership from '@/Features/Homepage/About/Partnership'
import Portfolio from '@/Features/Homepage/Portfolio'
import SmoothScrolling from "@/utils/Lenis";
import Testimoni from '@/Features/Homepage/Testimoni'



const page = () => {
  return (
    <SmoothScrolling>
      <Navbar />
      <HeroSection />
      <About />
      <Portfolio />
      <Gallery />
      <Testimoni />
      <Faq />
      <Footer />
    </SmoothScrolling>
  )
}

export default page