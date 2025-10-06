import React from 'react';
import Hero from '../Components/Services/Hero';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolio';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Portfolio() {
  return (
    <main className="bg-[#F6F7EE] min-h-screen">
      <Hero
        badge="Home • Portfolio"
        titleLine1="Portfolio Grid"
        titleLine2=""
        subtitle="Selected work from our farms and partners"
        ctaLabel=""
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioItems.map((p) => (
            <article key={p.slug} className="rounded-2xl bg-white shadow-sm overflow-hidden">
              <Link to={`/portfolio/${p.slug}`} className="block group">
                <div className="h-56 overflow-hidden">
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 text-green-900">
                  <div className="text-[11px] uppercase tracking-wide text-amber-700">• {p.category}</div>
                  <h3 className="mt-1 font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{p.excerpt}</p>
                  <div className="mt-3 inline-flex items-center justify-center h-9 w-9 rounded-full bg-amber-300 text-green-900 shadow">
                    <FiArrowUpRight size={16} aria-hidden />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
