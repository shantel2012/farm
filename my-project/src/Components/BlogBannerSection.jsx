import React from 'react';
import mom from '../assets/mom.jpg';
import no from '../assets/no.jpg';
import cow from '../assets/cow.jpg';

const blogPosts = [
  {
    id: 1,
    title: "How to Grow Organic Vegetables",
    excerpt: "Learn best practices and tips for growing healthy organic vegetables in your garden.",
    imageUrl: mom,
  },
  {
    id: 2,
    title: "Sustainable Farming Methods",
    excerpt: "Explore methods that protect the soil and environment while maximizing yield.",
    imageUrl: no,
  },
  {
    id: 3,
    title: "Crop Rotation Explained",
    excerpt: "Understand why rotating crops matters and how to plan your fields.",
    imageUrl: cow,
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#f9f9f2] py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Banner */}
        <div className="relative bg-cover bg-center rounded-xl h-48 md:h-64 overflow-hidden" style={{ backgroundImage: "url('/images/agriculture-banner.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

<div className="absolute inset-0 flex items-center justify-between px-6 md:px-12">
            <div className="flex items-center gap-4 text-white">
              <div className="bg-yellow-400 text-black rounded-full p-3 text-xl">🚜</div>
              <h2 className="text-lg md:text-2xl font-semibold">
                We’re popular leader in agriculture market globally
              </h2>
            </div>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-yellow-300 transition">
              Discover More →
            </button>
          </div>
        </div>

        {/* Section Header + Navigation */}
        <div className="flex justify-between items-center">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Latest posts & articles</h3>
          <div className="flex gap-2">
            <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">←</button>
            <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">→</button>
          </div>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-700 font-medium">
          <span className="cursor-pointer hover:underline">Farming</span>

If you want help integrating this or making it responsive or animated, I can help you next.

<span className="cursor-pointer hover:underline">Organic News</span>
          <span className="cursor-pointer hover:underline">Market Tips</span>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <div className="overflow-hidden rounded-lg">
                <img src={post.imageUrl} alt={post.title} className="w-full h-40 object-cover" />
              </div>
              <h4 className="mt-4 font-semibold text-gray-800">{post.title}</h4>
              <p className="mt-2 text-gray-600 text-sm">{post.excerpt}</p>
              <button className="mt-4 text-yellow-600 font-medium hover:underline">Read More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection