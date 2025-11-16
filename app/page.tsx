import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Secure from "./components/secure/secure";
import Mobile from "./components/mobile/mobile";
import Ready from "./components/ready/ready";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TestimonialCarousel from "./components/TestimonialsCarousel/TestimonialsCarousel";




export default function FastCash() {
  return (
    <main className="bg-neutral-100 w-full min-h-screen">
      <Navbar />
      <Header />
      <About />
      <Secure />
      <Mobile />
      <HowItWorks />
      <TestimonialCarousel />
      <Ready />
      <Footer />
    </main>
  );
}
