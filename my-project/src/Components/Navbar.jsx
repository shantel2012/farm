import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6 text-white relative z-10">
      <div className="text-2xl font-bold">🌿 Grimo</div>
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        <li className="hover:text-yellow-400 cursor-pointer">PAGES ▾</li>
        <li className="hover:text-yellow-400 cursor-pointer">SERVICES</li>
        <li className="hover:text-yellow-400 cursor-pointer">PORTFOLIO</li>
        <li className="hover:text-yellow-400 cursor-pointer">BLOG</li>
        <li className="hover:text-yellow-400 cursor-pointer">CONTACT US</li>
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