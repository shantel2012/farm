import React from "react";
import { Phone } from "lucide-react";
import bgImage from "../../assets/img.jpg"; // replace with your actual image path

export default function AboutHero() {
  return (
    <div className="relative w-full h-[90vh] font-poppins overflow-hidden rounded-2xl">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Farmer with tomatoes"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-4 z-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // replace with your logo
            alt="Agrimo Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-white text-2xl font-bold">Agrimo</h1>
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex items-center space-x-6 text-white text-sm font-medium">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Services</li>
          <li className="hover:text-yellow-400 cursor-pointer">Portfolio</li>
          <li className="hover:text-yellow-400 cursor-pointer">Blog</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
        </ul>

        {/* Contact Info + Button */}
        <div className="hidden md:flex items-center space-x-5">
          <div className="flex items-center space-x-2 text-white">
            <div className="bg-yellow-400/20 p-2 rounded-full">
              <Phone size={16} className="text-yellow-400" />
            </div>
            <div className="leading-tight">
              <p className="text-xs">Call us now</p>
              <p className="text-sm font-semibold">+263 456 891 45</p>
            </div>
          </div>
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition">
            Get In Touch
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center pl-16 text-white z-10">
        <h1 className="text-5xl font-bold mb-3">About Us</h1>
        <div className="flex items-center text-sm">
          <span className="hover:text-yellow-400 cursor-pointer">AGRIMO</span>
          <span className="mx-2 text-yellow-400">›</span>
          <span>ABOUT US</span>
        </div>
      </div>
    </div>
  );
}
