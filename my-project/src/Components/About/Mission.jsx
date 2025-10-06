import React from "react";

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Person with plant"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <div className="inline-block bg-yellow-300 text-3xl font-bold px-6 py-4 rounded-lg mb-6">
              $335
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Is committed on our mission
              <br />
              and selling organic food
            </h2>
            <p className="text-gray-600 mb-4">
              We help you transform your vision into a sustainable business. Grow your business with our expertise, tools, and support.
            </p>
            <p className="text-gray-600">
              Find the right products and guidance you need to maximize your impact and make a difference in your community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
