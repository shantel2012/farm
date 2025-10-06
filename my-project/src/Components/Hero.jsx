// import React from "react";
// import { FaSearch, FaPhoneAlt } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
// import { Search } from "lucide-react";
// import hero from "../assets/hero.jpg"; // Keep your background image

// export default function LandingPage() {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src={hero}
//           alt="Farm background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-grey bg-opacity-40"></div>
//       </div>
//       <div className="absolute top-0 right-0 w-[200px] h-[100px] bg-[#f7f7ed] rounded-bl-[50px]"></div>

//       {/* Content */}
//       <div className="relative z-5 max-w-2xl mx-auto py-23 px-3 text-center"></div>

//       {/* Navbar */}
//       <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-white z-20">
//         {/* Placeholder Logo */}
//         <div className="flex items-center gap-2 text-2xl font-bold">
//           {/* You can later replace with a real logo image */}
//          <span className="text-green-500">🌿</span> Agrimo
//         </div>

//         <ul className="hidden md:flex gap-8 font-medium">
//           <li className="flex items-center gap-2 cursor-pointer text-[#EDDD5E]">HOME</li>
//           <li className="flex items-center gap-2 cursor-pointer hover:text-green-400">About</li>
//           <li className="flex items-center gap-2 cursor-pointer hover:text-green-400">SERVICES</li>
//           <li className="flex items-center gap-2 cursor-pointer hover:text-green-400">PORTFOLIO</li>
//           <li className="flex items-center gap-2 cursor-pointer hover:text-green-400">BLOG</li>
//           <li className="flex items-center gap-2 cursor-pointer hover:text-green-400">CONTACT US</li>
//         </ul>

//         {/* Right section */}
//         <div className="flex items-center gap-8">
//           <div className="flex items-center gap-2 text-sm">
// //             <FaPhoneAlt /> <span>Call Us Now<br />+ (412) 215-4511</span>
// //           </div>
//           <Search className="w-4 h-4 cursor-pointer hover:text-green-400 gap-8" />
//           <button className="bg-yellow-300 text-black rounded-full px-6 py-2 shadow-md hover:bg-yellow-400 transition">
//             Get In Touch
//           </button>
//         </div>
//       </nav>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 md:px-24 text-white">
//         <button className="px-4 py-2 border border-white rounded-full text-xs uppercase tracking-wide mb-4 hover:bg-white hover:text-black transition">
//           Believe in Quality!
//         </button>

//         <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
//           Quality Trust: <br /> Direct to the Farm
//         </h1>

//         <p className="text-lg max-w-xl mb-6">
//           We all need a little space to grow. Give yourself the space you need to find your inner you.
//         </p>

//         <button className="bg-white text-black rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition">
//           Contact Us<FaArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Search } from "lucide-react";
import { Link } from "react-router-dom"; // <-- import Link
import hero from "../assets/hero.jpg";

export default function LandingPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Farm background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-grey bg-opacity-40"></div>
      </div>
      <div className="absolute top-0 right-0 w-[200px] h-[100px] bg-[#f7f7ed] rounded-bl-[50px]"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-white z-20">
        {/* Logo */}
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
        
        <div className="leading-tight">
            <div className="text-[11px] text-green-100">Call us Now</div>
            <div className="text-sm font-semibold text-white">+1(212)255-511</div>
         </div>

        {/* Right section */}
        <div className="flex items-center gap-8">
          <Search className="w-4 h-4 cursor-pointer hover:text-green-400" />
          <button className="bg-yellow-300 text-black rounded-full px-6 py-2 shadow-md hover:bg-yellow-400 transition">
            Get In Touch
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 md:px-24 text-white">
        <button className="px-4 py-2 border border-white rounded-full text-xs uppercase tracking-wide mb-4 hover:bg-white hover:text-black transition">
          Believe in Quality!
        </button>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
          Quality Trust: <br /> Direct to the Farm
        </h1>

        <p className="text-lg max-w-xl mb-6">
          We all need a little space to grow. Give yourself the space you need to find your inner you.
        </p>

        <button className="bg-white text-black rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition flex items-center gap-2">
          Contact Us <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
