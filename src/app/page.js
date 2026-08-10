import Slider from "./components/Slider";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

export const revalidate = 60;

export default function Home() {
  return (
    <>
    <Slider/>
    <Service/>
    <About/>
    <Gallery/>
    <Contact/>
    </>
  )
}
