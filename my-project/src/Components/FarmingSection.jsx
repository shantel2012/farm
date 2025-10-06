import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import farm from '../assets/farm.jpg'; // Replace with your image path

const HealthySection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left: Image */}
        <div className="lg:w-1/2 h-96 lg:h-auto">
          <img 
            src={farm} 
            alt="Farmer inspecting crops" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="lg:w-1/2 bg-yellow-400 p-10 flex flex-col justify-center">
          
          {/* Subtitle */}
          <div className="flex items-center bg-white bg-opacity-50 px-3 py-1 rounded-md w-fit mb-4">
            <FaQuestion className="text-sm mr-2" />
            <span className="text-sm font-semibold text-gray-800">What We Do</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Healthy life with fresh products
          </h2>

          {/* Text */}
          <p className="text-gray-700 text-base leading-relaxed mb-8">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
          </p>

          {/* Stats */}
          <div className="flex gap-8 flex-wrap">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center shadow-[0_0_0_4px_#799a63] mb-2">
                <span className="text-xl font-bold text-gray-800">90%</span>
              </div>
              <span className="text-gray-800 text-sm font-medium max-w-[120px]">Eco Farms Worldwide</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center shadow-[0_0_0_4px_#343a40] mb-2">
                <span className="text-xl font-bold text-gray-800">78%</span>
              </div>
              <span className="text-gray-800 text-sm font-medium max-w-[120px]">Special Equipment</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HealthySection;
