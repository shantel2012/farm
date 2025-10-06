import React from 'react';
import { FiFeather, FiPackage, FiPhoneCall } from 'react-icons/fi';

const items = [
  {
    icon: <FiFeather className="text-green-800" size={18} />,
    title: 'Organic Solutions',
    text: 'Eco-friendly inputs and practices for healthier crops.',
  },
  {
    icon: <FiPackage className="text-green-800" size={18} />,
    title: 'Fast Delivery',
    text: 'Scheduled supply and harvest logistics on time.',
  },
  {
    icon: <FiPhoneCall className="text-green-800" size={18} />,
    title: '24/7 Support',
    text: 'Expert advice and assistance whenever you need it.',
  },
];

export default function HomeQuickCards() {
  return (
    <section className="relative -mt-10 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.title} className="bg-white rounded-2xl shadow-sm p-5 flex items-start gap-3 border border-green-50">
              <div className="h-9 w-9 rounded-full bg-amber-300 grid place-items-center flex-shrink-0">{it.icon}</div>
              <div>
                <div className="font-semibold text-green-900">{it.title}</div>
                <div className="text-sm text-neutral-600">{it.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
