import React from "react";
import { Leaf } from "lucide-react";

export default function AwardBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 to-green-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center">
              <Leaf className="w-8 h-8 text-green-900" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">We're already About +</h3>
              <p className="text-gray-300">Growing community of organic farmers</p>
            </div>
          </div>
          <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
