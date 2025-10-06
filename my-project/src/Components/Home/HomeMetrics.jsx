import React from 'react';
import corn from '../../assets/corn.png';

export default function HomeMetrics() {
  const items = [
    { k: 'Eco Farming', v: 'Sustainable inputs and methods' },
    { k: 'Fresh Delivery', v: 'From our fields to your table' },
    { k: 'Expert Team', v: 'Advisors and technicians on call' },
  ];
  return (
    <section className="bg-[#F6F7EE] py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="sr-only">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <img src={corn} alt="Corn" className="w-40 h-40 object-contain" />
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-3 gap-6">
            {items.map((it) => (
              <div key={it.k} className="text-center bg-white rounded-2xl p-6 shadow-sm border border-green-50">
                <div className="text-lg font-semibold text-green-900">{it.k}</div>
                <div className="text-sm text-neutral-600 mt-1">{it.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
