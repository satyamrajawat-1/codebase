import Hero from "./pages/Hero";
import About from "./pages/About";
import Image from "next/image";
import Tracks from "./components/sections/Tracks.jsx";
export default function Home() {
  return (
    <>
    <Hero/>
    <Tracks/>
    <About/>
    </>
    
  )
}
