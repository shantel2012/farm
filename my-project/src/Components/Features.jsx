import React from "react";
import { Leaf, Truck, ShieldCheck, ShoppingBasket } from "lucide-react";

const features = [
  { icon: Leaf, text: "100% Organic" },
  { icon: Truck, text: "Fast Delivery" },
  { icon: ShieldCheck, text: "Quality Assured" },
  { icon: ShoppingBasket, text: "Best Prices" },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-9xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            <f.icon className="w-16 h-16 text-green-600 mb-6" />
            <p className="font-semibold text-gray-700 text-lg">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
