import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'

// using services from data

export default function ServicesGrid() {
  return (
    <section className="bg-[#F6F7EE] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.slug} className="rounded-[18px] bg-white shadow-sm overflow-hidden">
              <Link to={`/services/${s.slug}`} className="block group">
                <div className="relative h-56 w-full overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute right-3 bottom-3 h-9 w-9 rounded-full bg-amber-300 text-green-900 grid place-items-center shadow">
                    <FiArrowUpRight size={16} aria-hidden />
                  </div>
                </div>
                <div className="p-5 text-green-900">
                  <div className="text-[11px] uppercase tracking-wide text-amber-700">• {s.tag}</div>
                  <h3 className="mt-1 font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
