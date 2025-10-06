import React from 'react';
import corn from '../assets/corn.png'; // Update path as needed
import { FaSeedling, FaLeaf, FaCarrot, FaCheckCircle } from 'react-icons/fa';

const PerfectFieldSection = () => {
  return (
    <section className="bg-[#f9f9f2] py-16">
      <div className="text-center mb-10">
        <p className="text-sm text-gray-500">🌿 Grow Naturally</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Choose What’s Perfect <br /> For Your Field
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 max-w-7xl mx-auto">
        {/* Left Features */}
        <div className="flex flex-col gap-8">
          <Feature icon={<FaSeedling />} title="Agriculture Products" />
          <Feature icon={<FaCheckCircle />} title="Quality Products" />
        </div>

        {/* Corn Image */}
        <img src={corn} alt="Corn" className="w-60 md:w-72" />

        {/* Right Features */}
        <div className="flex flex-col gap-8">
          <Feature icon={<FaCarrot />} title="Fresh Vegetables" />
          <Feature icon={<FaLeaf />} title="Pure & Organic" />

</div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title }) => (
  <div className="flex items-center gap-4">
    <div className="bg-yellow-300 p-4 rounded-full text-black text-xl">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-500 text-sm">
        Nullam porta enim vel tellus commodo, eget laoreet odio ultricies.
      </p>
    </div>
  </div>
);

export default PerfectFieldSection;