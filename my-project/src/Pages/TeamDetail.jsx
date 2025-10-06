import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, Phone, ArrowLeft } from 'lucide-react';
import { teamMembers } from '../data/team';

export default function TeamDetail() {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-gray-700 mb-4">Team member not found.</p>
          <Link to="/team" className="inline-flex items-center gap-2 text-green-700 font-medium hover:underline">
            <ArrowLeft size={18}/> Back to Team
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Banner */}
      <section className="bg-green-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">Our Team Member</h1>
          <p className="mt-2 text-green-100">Professional, experienced and dedicated.</p>
        </div>
      </section>

      {/* Detail Card */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <Link to="/team" className="inline-flex items-center gap-2 text-green-700 mb-6 font-medium hover:underline">
          <ArrowLeft size={18}/> Back to Team
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile */}
          <div className="md:col-span-1 bg-white rounded-2xl shadow overflow-hidden">
            <div className="aspect-[4/3]">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900">{member.name}</h2>
              <p className="text-green-700 font-medium">{member.role}</p>
              <p className="mt-3 text-sm text-gray-600">{member.short}</p>
              <div className="mt-5 space-y-2">
                <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-gray-800">
                  <Phone size={18}/> <span>{member.phone}</span>
                </a>
                <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-gray-800">
                  <Mail size={18}/> <span>{member.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bio and Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900">About {member.name}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{member.bio}</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 mt-8">
              <h3 className="text-lg font-semibold text-gray-900">Send a Message</h3>
              <form className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="md:col-span-1">
                  <label className="block text-sm text-gray-700 mb-1">Your Name</label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="John Doe"/>
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm text-gray-700 mb-1">Your Email</label>
                  <input type="email" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="you@example.com"/>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-700 mb-1">Message</label>
                  <textarea rows="5" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" placeholder={`Hello ${member.name}, I would like to get in touch...`}></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="button" className="bg-yellow-300 hover:bg-yellow-400 text-black font-medium px-6 py-2 rounded-full">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
