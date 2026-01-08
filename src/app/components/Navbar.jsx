"use client"
import { useRef , useEffect} from "react";
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import { useTimeline } from "@/helpers/gsapTimeline";
export default function Navbar() {

  const tl = useTimeline()
  const navRef = useRef()
  useEffect(() => {
    const items = navRef.current.children;

    tl.from(items, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      stagger: 0.16,
      ease: "power3.out"
    });
  }, []);
  

  return (
    <header className="w-full flex justify-center border-2 border-red-500 box-border">
      <nav className="
        w-screen 
        h-14 
        sticky 
        bg-linear-to-r from-[#0a0a15] to-[#0e0e25]
        border border-white/10 
        shadow-lg shadow-purple-500/10
        flex items-center px-6
        top-0
        left-0
      " ref={navRef}>
        
        {/* Logo */}
        <div className="font-extrabold text-white tracking-wide logo">
          logo
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 mx-auto text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer flex items-center gap-1">
            link <span>▾</span>
          </li>
          <li className="hover:text-white cursor-pointer flex items-center gap-1">
            link <span>▾</span>
          </li>
          <li className="hover:text-white cursor-pointer">link</li>
          <li className="hover:text-white cursor-pointer">link</li>
          <li className="hover:text-white cursor-pointer flex items-center gap-1">
            link <span>▾</span>
          </li>
        </ul>

        {/* Button */}
        <button className="
          ml-auto 
          bg-white text-black 
          px-4 py-1.5 
          rounded-lg 
          font-medium 
          hover:bg-gray-200
        ">
          Button
        </button>
      </nav>
    </header>
  );
}
