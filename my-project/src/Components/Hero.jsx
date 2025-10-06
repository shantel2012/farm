// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { Search } from "lucide-react";
// import { Link } from "react-router-dom";
// import hero from "../assets/hero.jpg";

// export default function Hero() {
//   return (
//     <div className="relative mt-4 w-full min-h-[70vh] overflow-hidden rounded-3xl md:h-[80vh] m-[15px]">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img src={hero} alt="Farm background" className="h-full w-full object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50" />
//       </div>
//       <div className="absolute top-0 right-0 h-[110px] w-[220px] rounded-bl-[56px] bg-[#f7f7ed]" />

//       {/* Navbar */}
//       <nav className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-6 py-6 text-white md:px-10">
//         {/* Logo */}
//         <div className="flex items-center gap-2 text-2xl font-bold">
//           <span className="text-green-500">🌿</span> Agrimo
//         </div>

//         <ul className="hidden gap-8 font-medium md:flex">
//           <li>
//             <Link to="/" className="flex items-center gap-2 text-[#EDDD5E] hover:text-yellow-400">
//               HOME
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="flex items-center gap-2 hover:text-yellow-400">
//               ABOUT
//             </Link>
//           </li>
//           <li>
//             <Link to="/services" className="flex items-center gap-2 hover:text-yellow-400">
//               SERVICES
//             </Link>
//           </li>
//           <li>
//             <Link to="/portfolio" className="flex items-center gap-2 hover:text-yellow-400">
//               PORTFOLIO
//             </Link>
//           </li>
//           <li>
//             <Link to="/product" className="flex items-center gap-2 hover:text-yellow-400">
//               PRODUCT
//             </Link>
//           </li>
//           <li>
//             <Link to="/team" className="flex items-center gap-2 hover:text-yellow-400">
//               TEAM
//             </Link>
//           </li>
//           <li>
//             <Link to="/blog" className="flex items-center gap-2 hover:text-yellow-400">
//               BLOG
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="flex items-center gap-2 hover:text-yellow-400">
//               CONTACT US
//             </Link>
//           </li>
//         </ul>

//         <div className="hidden text-right leading-tight md:block">
//           <div className="text-[11px] text-green-100">Call us Now</div>
//           <div className="text-sm font-semibold text-white">+1(212)255-511</div>
//         </div>

//         {/* Right section */}
//         <div className="flex items-center gap-6">
//           <Search className="h-4 w-4 cursor-pointer hover:text-green-400" />
//           <button className="flex items-center gap-2 rounded-full bg-yellow-300 px-6 py-2 text-black shadow-md transition hover:bg-yellow-400">
//             Get In Touch
//           </button>
//         </div>
//       </nav>

//       {/* Hero Content */}
//       <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 text-white md:px-16">
//         <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm">
//           BELIEVE IN QUALITY
//         </span>

//         {/* Heading */}
        
//          <div className="mt-4 inline-block rounded-xl border-2 border-yellow-300/80 px-4 py-2 backdrop-blur-sm">
//           <h1 className="text-5xl font-extrabold leading-tight drop-shadow-[0_2px_2px_RGBA(0,0,0,0.25)] md:text-7xl">
//             Quality Trust:
//             <br />
//             Direct to the Farm
//           </h1>
//         </div>

//         {/* Decorative line under heading */}
//         <div className="mt-3 w-97 h-1 bg-white-400 rounded"></div>

//         {/* Subtitle */}
//         <p className="mt-4 mb-5 max-w-xl text-base text-white/90 md:text-lg">
//           We all need a little space to grow. Give yourself the space you need to find your inner you.
//         </p>

//         {/* CTA Button */}
//         <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black shadow-md transition hover:bg-gray-200">
//           Contact Us <FaArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <div className="relative m-[15px] h-[100vh] w-[calc(100%-30px)] overflow-hidden rounded-3xl">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={hero} alt="Farm background" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50" />
      </div>
      <div className="absolute top-0 right-0 h-[110px] w-[220px] rounded-bl-[56px] bg-[#f7f7ed]" />

      {/* Navbar */}
      <nav className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-6 py-6 text-white md:px-10">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-green-500">🌿</span> Agrimo
        </div>

        {/* Menu */}
        <ul className="hidden gap-8 font-medium md:flex">
          {[
            { name: "HOME", link: "/", highlight: true },
            { name: "ABOUT", link: "/about" },
            { name: "SERVICES", link: "/services" },
            { name: "PORTFOLIO", link: "/portfolio" },
            { name: "PRODUCT", link: "/product" },
            { name: "TEAM", link: "/team" },
            { name: "BLOG", link: "/blog" },
            { name: "CONTACT US", link: "/contact" },
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {/* Small yellow dot */}
              <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
              <Link
                to={item.link}
                className={`hover:text-yellow-400 ${
                  item.highlight ? "text-[#EDDD5E]" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Phone Info */}
        <div className="hidden text-right leading-tight md:block">
          <div className="text-[11px] text-green-100">Call us Now</div>
          <div className="text-sm font-semibold text-white">+1(212)255-511</div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6">
          <Search className="h-4 w-4 cursor-pointer hover:text-green-400" />
          <button className="flex items-center gap-2 rounded-full bg-yellow-300 px-6 py-2 text-black shadow-md transition hover:bg-yellow-400">
            Get In Touch
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 text-white md:px-16">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm">
          BELIEVE IN QUALITY
        </span>

        {/* Heading */}
        <h1 className="mt-4 text-5xl font-extrabold leading-tight drop-shadow-[0_2px_2px_RGBA(0,0,0,0.25)] md:text-7xl">
          Quality Trust:
          <br />
          Direct to the Farm
        </h1>

        {/* White line under heading */}
        <div className="mt-3 h-1 w-28 rounded bg-white"></div>

        {/* Subtitle */}
        <p className="mt-4 mb-5 max-w-xl text-base text-white/90 md:text-lg">
          We all need a little space to grow. Give yourself the space you need to find your inner you.
        </p>

        {/* CTA Button (outlined) */}
        <button className="flex items-center gap-2 rounded-full border border-white bg-white px-6 py-3 text-black transition hover:bg-white/10">
          Contact Us <FaArrowRight />
        </button>
      </div>
    </div>
  );
}


