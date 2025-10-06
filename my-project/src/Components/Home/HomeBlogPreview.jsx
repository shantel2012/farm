import React from 'react';
import img1 from '../../assets/image.jpg';
import img2 from '../../assets/map.jpg';

export default function HomeBlogPreview() {
  const posts = [
    { img: img1, title: 'Improving soil with cover crops', excerpt: 'How cover crops can enhance soil structure and fertility season over season.' },
    { img: img2, title: 'Smart irrigation tips', excerpt: 'Reduce water usage while maintaining yield with telemetry-driven irrigation.' },
  ];
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map(p => (
            <article key={p.title} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-green-50">
              <div className="h-56 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 text-green-900">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-neutral-700 mt-1">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
