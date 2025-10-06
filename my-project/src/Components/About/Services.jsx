import React from "react";

const serviceItems = [
  { title: "Vegetables", img: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=300" },
  { title: "Fruits", img: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=300" },
  { title: "Grains", img: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=300" },
  { title: "Dairy", img: "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=300" },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Best Agriculture Services</h2>
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {serviceItems.map((service) => (
            <div key={service.title} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2">
          {serviceItems.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-green-700" : "bg-gray-300"}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
}
