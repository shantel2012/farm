import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6 text-white relative z-10">
      <div className="text-2xl font-bold">🌿 Grimo</div>
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        <li>
          <Link to="/" className="hover:text-yellow-400">HOME</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-400">ABOUT</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-yellow-400">SERVICES</Link>
        </li>
        <li>
          <Link to="/portfolio" className="hover:text-yellow-400">PORTFOLIO</Link>
        </li>
        <li>
          <Link to="/product" className="hover:text-yellow-400">PRODUCT</Link>
        </li>
        <li>
          <Link to="/team" className="hover:text-yellow-400">TEAM</Link>
        </li>
        <li>
          <Link to="/blog" className="hover:text-yellow-400">BLOG</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-400">CONTACT US</Link>
        </li>
      </ul>
      {/* <a
        href="#contact"
        className="bg-yellow-400 text-black font-medium px-5 py-2 rounded-full hover:bg-yellow-300 transition"
      >
        Get In Touch ➜
      </a> */}
    </nav>
  );
};

export default Navbar;