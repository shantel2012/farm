import React from 'react';
import { FiTruck, FiFeather, FiUsers, FiClock } from 'react-icons/fi';

export default function HomeStatsRow() {
  const stats = [
    { icon: <FiFeather />, label: 'Eco Projects', value: '120+' },
    { icon: <FiUsers />, label: 'Happy Clients', value: '500+' },
    { icon: <FiTruck />, label: 'Deliveries', value: '1.2k+' },
    { icon: <FiClock />, label: 'Years Experience', value: '10+' },
  ];
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(s => (
          <div key={s.label} className="flex items-center gap-3 p-4 rounded-xl border border-green-50 shadow-sm">
            <div className="h-10 w-10 rounded-full bg-amber-300 text-green-900 grid place-items-center text-lg">
              {s.icon}
            </div>
            <div>
              <div className="text-xl font-bold text-green-900">{s.value}</div>
              <div className="text-xs text-neutral-600">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
