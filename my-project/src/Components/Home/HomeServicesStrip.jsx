import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { services } from '../../data/services';

export default function HomeServicesStrip() {
  const items = services.slice(0, 3);
  return (
    <section className="bg-green-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((s) => (
            <article key={s.slug} className="rounded-2xl bg-white overflow-hidden shadow-sm">
              <Link to={`/services/${s.slug}`} className="block group">
                <div className="h-48 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                </div>
                <div className="p-5 text-green-900">
                  <div className="text-[11px] uppercase tracking-wide text-amber-700">• {s.tag}</div>
                  <h3 className="mt-1 font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{s.desc}</p>
                  <div className="mt-3 inline-flex items-center justify-center h-9 w-9 rounded-full bg-amber-300 text-green-900 shadow">
                    <FiArrowUpRight size={16} aria-hidden />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
