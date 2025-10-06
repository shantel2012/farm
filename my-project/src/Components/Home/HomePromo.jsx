import React from 'react';
import hero from '../../assets/hero.jpg';

export default function HomePromo() {
  return (
    <section className="bg-[#F6F7EE] py-14">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6 items-stretch">
        <div className="md:col-span-2 rounded-2xl overflow-hidden shadow">
          <img src={hero} alt="Farmer" className="w-full h-full object-cover" />
        </div>
        <div className="bg-amber-200 rounded-2xl p-6 text-green-900 flex flex-col justify-between shadow">
          <div>
            <div className="text-xs uppercase tracking-wide text-green-800">Consult with us</div>
            <h3 className="text-2xl font-bold mt-2">We help with modern agriculture solutions</h3>
            <p className="text-sm text-green-900/80 mt-2">From soil testing to supply logistics, our team supports your farm end-to-end.</p>
          </div>
          <div className="mt-4">
            <a href="#contact" className="inline-block bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-white/90">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
}
