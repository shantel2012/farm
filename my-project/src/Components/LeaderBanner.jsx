import React from "react";
import { Handshake } from "lucide-react"; // you can replace with another icon
import bgImage from "../assets/grass.png"; // replace with your background image

export default function LeaderBanner() {
  return (
    <section className="relative w-full h-[200px] rounded-t-2xl overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Agriculture background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="bg-grey"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-between items-center h-full px-10">
        {/* Left Side */}
        <div className="flex items-center space-x-5">
          <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center">
            <Handshake size={28} className="text-white" />
          </div>
          <h2 className="text-white text-2xl font-semibold leading-snug max-w-md">
            We’re popular leader in <br /> agriculture market globally
          </h2>
        </div>

        {/* Right Button */}
        <button className="flex items-center space-x-2 bg-white text-gray-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
          <span>Discover More</span>
          <span className="text-lg">→</span>
        </button>
      </div>
    </section>
  );
}
