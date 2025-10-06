import React from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/team';

export default function Team() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-green-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">Our Team Member</h1>
          <p className="mt-2 text-green-100">Meet the people behind our fields and fresh produce.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {teamMembers.map((m) => (
          <Link
            key={m.id}
            to={`/team/${m.id}`}
            className="group bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
              <p className="text-sm text-green-700 font-medium">{m.role}</p>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{m.short}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
