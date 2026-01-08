import Hero from "./pages/Hero";
import About from "./pages/About";
import Image from "next/image";
import Tracks from "./components/sections/Tracks.jsx";
import Details from "./components/sections/Details";
export default function Home() {
  return (
    <>
    <Hero/>
    <Tracks/>
    <About/>
    <Details/>
    </>
    
  )
}
