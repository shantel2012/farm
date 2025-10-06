import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

export default function HeroNew() {
  return (
    <div className="relative mx-auto max-w-7xl mt-4 w-full min-h-[70vh] md:h-[80vh] overflow-hidden rounded-3xl">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={hero} alt="Farm background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50"></div>
      </div>
      <div className="absolute top-0 right-0 w-[220px] h-[110px] bg-[#f7f7ed] rounded-bl-[56px]"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-6 text-white z-20">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-green-500">🌿</span> Agrimo
        </div>

        <ul className="hidden md:flex gap-8 font-medium">
          <li><Link to="/" className="flex items-center gap-2 text-[#EDDD5E] hover:text-yellow-400">HOME</Link></li>
          <li><Link to="/about" className="flex items-center gap-2 hover:text-yellow-400">ABOUT</Link></li>
          <li><Link to="/services" className="flex items-center gap-2 hover:text-yellow-400">SERVICES</Link></li>
          <li><Link to="/portfolio" className="flex items-center gap-2 hover:text-yellow-400">PORTFOLIO</Link></li>
          <li><Link to="/product" className="flex items-center gap-2 hover:text-yellow-400">PRODUCT</Link></li>
          <li><Link to="/team" className="flex items-center gap-2 hover:text-yellow-400">TEAM</Link></li>
          <li><Link to="/blog" className="flex items-center gap-2 hover:text-yellow-400">BLOG</Link></li>
          <li><Link to="/contact" className="flex items-center gap-2 hover:text-yellow-400">CONTACT US</Link></li>
        </ul>

        <div className="hidden md:block leading-tight text-right">
          <div className="text-[11px] text-green-100">Call us Now</div>
          <div className="text-sm font-semibold text-white">+1(212)255-511</div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6">
          <Search className="w-4 h-4 cursor-pointer hover:text-green-400" />
          <button className="bg-yellow-300 text-black rounded-full px-6 py-2 shadow-md hover:bg-yellow-400 transition">Get In Touch</button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-16 text-white">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold border border-white/80 bg-white/10 backdrop-blur-sm">BELIEVE IN QUALITY</span>
        <div className="mt-4 inline-block rounded-xl border-2 border-yellow-300/80 px-4 py-2 backdrop-blur-sm">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
            Quality Trust:
            <br />
            Direct to the Farm
          </h1>
        </div>
        <p className="text-base md:text-lg max-w-xl mt-4 mb-5 text-white/90">We all need a little space to grow. Give yourself the space you need to find your inner you.</p>
        <button className="bg-white text-black rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition flex items-center gap-2">Contact Us <FaArrowRight /></button>
      </div>
    </div>
  );
}
