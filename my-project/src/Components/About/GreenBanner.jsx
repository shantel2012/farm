import React from "react";

export default function GreenBanner() {
  return (
    <section className="py-20 bg-green-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm mb-2 text-green-200">Welcome</p>
            <h2 className="text-4xl font-bold mb-6">
              Organic farmers in the
              <br />
              field and devoted
            </h2>
            <img
              src="https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Farmer in field"
              className="rounded-lg"
            />
            <div className="inline-block bg-yellow-300 text-green-900 text-2xl font-bold px-6 py-3 rounded-lg -mt-6 relative">
              100%
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white text-gray-800 p-6 rounded-lg">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="space-y-4 text-gray-100">
              {["Best organic farming", "Quality products", "Organic food products", "Fresh and organic"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
