import Image from "next/image";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar2";
import Hero from "./components/Hero";
import Advertise from "./components/advertise-strip";
import About from "./components/About";
import Responsiveness from "./components/Responsiveness";
import FeaturesSection from "./components/Features";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrolltoTop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/whatsapp";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
export default function Home() {
  return (
    <div>
      <ScrollToTop />
      <WhatsAppButton />
      <Alert/>
      <Navbar />
      <Hero />
      <Advertise />
      <About />
      <Responsiveness />
      <FeaturesSection />
      <Projects />
      <Services/>
      <Testimonials/>
      <Contact />
      <Footer />
    </div>
  );
}
