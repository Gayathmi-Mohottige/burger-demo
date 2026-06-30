import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import Menu from "../components/Menu";
import Story from "../components/Story";
import Process from "../components/Process";
import Awards from "../components/Awards";
import Locations from "../components/Locations";
import Gallery from "../components/Gallery";
import OrderCTA from "../components/OrderCTA";
import Careers from "../components/Careers";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Ticker />
      <Menu />
      <Story />
      <Process />
      <Awards />
      <Locations />
      <Gallery />
      <OrderCTA />
      <Careers />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
}
