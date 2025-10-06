import React from 'react';

export default function HomeNewsletter() {
  return (
    <section className="bg-green-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-xl font-semibold">Join our newsletter</h3>
        <form className="flex w-full md:w-auto max-w-xl gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 md:w-80 px-4 py-2 rounded-full text-black focus:outline-none"
          />
          <button type="button" className="bg-amber-300 text-black font-semibold px-5 py-2 rounded-full hover:bg-amber-400">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
