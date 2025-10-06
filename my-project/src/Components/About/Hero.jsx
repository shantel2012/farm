import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

export default function Hero() {
  return (
    <section
      className="relative h-[400px] bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      }}
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-20 text-white">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-green-500">🌿</span> Agrimo
        </div>

        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <Link to="/" className="flex items-center gap-2 text-[#EDDD5E] hover:text-yellow-400">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center gap-2 hover:text-yellow-400">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/services" className="flex items-center gap-2 hover:text-yellow-400">
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="flex items-center gap-2 hover:text-yellow-400">
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link to="/blog" className="flex items-center gap-2 hover:text-yellow-400">
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center gap-2 hover:text-yellow-400">
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 h-full flex items-center relative z-10">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-2">About Us</h1>
          <p className="text-lg">
            We're impartial and independent, and every day we create distinctive,
            <br />
            world-class programmes and content
          </p>
        </div>
      </div>
    </section>
  );
}
