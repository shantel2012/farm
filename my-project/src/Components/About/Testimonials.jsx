import React from "react";
import { Users, Heart, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "Customer",
    icon: <Users className="w-6 h-6 text-white" />,
    text: "Best organic products I've ever purchased. The quality is outstanding and the taste is incredible.",
  },
  {
    name: "Jane Smith",
    role: "Customer",
    icon: <Heart className="w-6 h-6 text-white" />,
    text: "I love supporting local organic farmers. The freshness of their produce is unmatched.",
  },
  {
    name: "Mike Johnson",
    role: "Customer",
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    text: "Highly recommend! The service is excellent and products are always fresh and organic.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 ">
        <h2 className="text-4xl font-bold mb-12 text-center ">What our customers say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.name} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">{item.icon}</div>
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
