import React from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../Components/Services/Hero';
import { portfolioItems } from '../data/portfolio';
import { FiCheck } from 'react-icons/fi';

export default function PortfolioDetail() {
  const { slug } = useParams();
  const item = portfolioItems.find(p => p.slug === slug) || portfolioItems[0];

  return (
    <main className="bg-[#F6F7EE] min-h-screen">
      <Hero
        badge={`Portfolio • ${item.category}`}
        titleLine1={item.title}
        titleLine2=""
        subtitle="Professional, experienced and dedicated."
        ctaLabel=""
        bg={item.cover}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl overflow-hidden bg-white shadow">
              <img src={item.images[0]} alt={item.title} className="w-full h-[320px] md:h-[420px] object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {item.images.slice(1).map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden bg-white shadow">
                  <img src={img} alt={`${item.title} ${i+2}`} className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow p-6 text-green-900">
              <h2 className="text-xl font-semibold">About this project</h2>
              <p className="text-neutral-700 mt-2">{item.excerpt} We implemented modern techniques and sustainable practices to ensure quality and consistency through the entire process.</p>
              <ul className="grid sm:grid-cols-2 gap-2 mt-4">
                {['Planning and assessment','Implementation support','Monitoring and optimization','Documentation and training'].map(t => (
                  <li key={t} className="flex items-start gap-2"><FiCheck className="mt-1 text-green-700" /><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow p-5 text-green-900">
              <h3 className="font-semibold">Project Facts</h3>
              <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <dt className="text-neutral-600">Category</dt><dd>{item.category}</dd>
                <dt className="text-neutral-600">Status</dt><dd>Completed</dd>
                <dt className="text-neutral-600">Client</dt><dd>Confidential</dd>
                <dt className="text-neutral-600">Year</dt><dd>2025</dd>
              </dl>
            </div>
            <div className="bg-white rounded-2xl shadow p-5 text-green-900">
              <h3 className="font-semibold">Need a similar project?</h3>
              <p className="text-sm text-neutral-700 mt-1">Contact our team for estimates and timelines.</p>
              <a href="#contact" className="inline-block mt-3 px-5 py-2 rounded-full bg-amber-300 text-black font-medium hover:bg-amber-400">Get in touch</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
