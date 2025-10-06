import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import Hero from '../Components/Services/Hero';
import { FiCheck, FiChevronRight, FiPlus, FiMinus } from 'react-icons/fi';

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const svc = services.find(s => s.slug === slug) || services[0];

  // Simple FAQ data (can be customized per service later)
  const faqs = [
    { q: 'What does this service include?', a: 'We include planning, on-site assessment, and a tailored implementation roadmap.' },
    { q: 'Do you offer ongoing support?', a: 'Yes, we provide follow-ups, seasonal checks, and performance optimization.' },
    { q: 'How do we schedule an inspection?', a: 'Use the contact form or call us. We will propose the earliest available slot.' },
  ];
  const [open, setOpen] = useState(0);

  const sidebar = (
    <aside className="space-y-6">
      <div className="bg-white rounded-2xl shadow p-4">
        <h3 className="text-sm font-semibold text-green-900 px-2 mt-1">Our Services</h3>
        <ul className="mt-3 space-y-1">
          {services.map(s => (
            <li key={s.slug}>
              <Link
                to={`/services/${s.slug}`}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition ${s.slug === svc.slug ? 'bg-amber-100 text-green-900 font-semibold' : 'hover:bg-green-50 text-green-900'}`}
              >
                <span>{s.title}</span>
                <FiChevronRight size={16} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <div className="relative h-40">
          <img src={svc.img} alt="Contact" className="h-full w-full object-cover" />
        </div>
        <div className="p-4 text-green-900">
          <h4 className="font-semibold">Have a question?</h4>
          <p className="text-sm text-neutral-700 mt-1">Talk with our team for estimates and planning.</p>
          <div className="mt-4 flex gap-2">
            <button onClick={() => navigate('/contact')} className="px-4 py-2 rounded-full bg-amber-300 text-black font-medium hover:bg-amber-400">Get in touch</button>
            <a href="tel:+1212255511" className="px-4 py-2 rounded-full border border-green-300 text-green-900 font-medium hover:bg-green-50">Call us</a>
          </div>
        </div>
      </div>
    </aside>
  );

  return (
    <main className="bg-[#F6F7EE] min-h-screen">
      {/* Banner */}
      <Hero bg={svc.img} badge={`Service • ${svc.tag}`} titleLine1={svc.title} titleLine2="" subtitle="Professional, experienced and dedicated." ctaLabel="" />

      {/* Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            {sidebar}
          </div>

          {/* Content */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-8">
            {/* Hero image */}
            <div className="bg-white rounded-2xl shadow overflow-hidden">
              <img src={svc.img} alt={svc.title} className="w-full h-[280px] md:h-[360px] object-cover" />
            </div>

            {/* Why choose */}
            <div className="bg-white rounded-2xl shadow p-6 text-green-900">
              <h2 className="text-xl font-semibold">Why Choose Our Services</h2>
              <p className="text-neutral-700 mt-2">We combine modern techniques with practical experience to deliver consistent and measurable results for your farm.</p>
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="rounded-xl bg-green-50 p-4">
                  <div className="text-3xl font-bold">01</div>
                  <div className="mt-1 font-semibold">Schedule Fast Experience</div>
                  <div className="text-sm text-neutral-700">Quick assessment and timeline planning.</div>
                </div>
                <div className="rounded-xl bg-green-50 p-4">
                  <div className="text-3xl font-bold">02</div>
                  <div className="mt-1 font-semibold">Get Professional Advice</div>
                  <div className="text-sm text-neutral-700">Recommendations tailored to your site.</div>
                </div>
                <div className="rounded-xl bg-green-50 p-4">
                  <div className="text-3xl font-bold">03</div>
                  <div className="mt-1 font-semibold">Meet Our Expert People</div>
                  <div className="text-sm text-neutral-700">A multidisciplinary team at your service.</div>
                </div>
              </div>
            </div>

            {/* Work points */}
            <div className="bg-white rounded-2xl shadow p-6 text-green-900">
              <h3 className="text-lg font-semibold">Modern Technique Work Points</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <ul className="space-y-2">
                  {['Soil analysis and mapping','Irrigation efficiency setup','Sustainable input planning','Crop rotation and cover crops'].map(t => (
                    <li key={t} className="flex items-start gap-2"><FiCheck className="mt-1 text-green-700" /><span>{t}</span></li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {['Yield monitoring','Post-harvest handling','Cold-chain logistics','Staff training and SOPs'].map(t => (
                    <li key={t} className="flex items-start gap-2"><FiCheck className="mt-1 text-green-700" /><span>{t}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow p-6 text-green-900">
              <h3 className="text-lg font-semibold">Frequently asked questions</h3>
              <div className="mt-4 divide-y">
                {faqs.map((f, i) => (
                  <div key={i} className="py-3">
                    <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between text-left">
                      <span className="font-medium">{f.q}</span>
                      {open === i ? <FiMinus /> : <FiPlus />}
                    </button>
                    {open === i && (
                      <p className="mt-2 text-sm text-neutral-700">{f.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
